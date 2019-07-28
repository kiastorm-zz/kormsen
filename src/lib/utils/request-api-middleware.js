/* eslint class-methods-use-this: 0 */
import uuid from 'uuid';
import callAPI from './call-api';
import cache from '../cache';
import objectMD5 from './object-md5';

async function apiError(resp) {
  let errJson = null;
  try {
    errJson = await resp.json();
  } catch (err) {
    //
  }
  if (!errJson) {
    throw new Error(`Received non 20x status: ${resp.status}`);
  } else {
    const err = new Error(errJson.error);
    err.error = errJson.error;
    err.code = errJson.code;
    throw err;
  }
}

async function asyncFetch(apiOptions, params) {
  if (typeof apiOptions.api !== 'string') {
    throw new Error('Expected api to be a string.');
  }

  const method = apiOptions.method || 'GET';
  let response = await callAPI(method, apiOptions.api, apiOptions.path, params);
  // token has been expired trying to renew
  if (response.status === 401) {
    const renewTokenResponse = await callAPI("GET", 'auth', '/renew', {});
    if (renewTokenResponse.status !== 200) {
      console.log("Failed to renew token: ", renewTokenResponse.text()); // eslint-disable-line no-console
      window.location = `${window.AP3_DISCOVERY.apis.login.v1.url}?ap3r=${encodeURIComponent(document.location.pathname)}`;
      return;
    }
    const newToken = await renewTokenResponse.json();
    window.AP3_JWT = newToken.session.jwt;
    window.AP3_JWT_RENEW = newToken.renewAfter;
    // re-try original request
    response = await callAPI(method, apiOptions.api, apiOptions.path);
  }
  if (response.ok) return response; // eslint-disable-line consistent-return
  await apiError(response, apiOptions.api, apiOptions.path);
}

const keyFromAction = (action) => {
  const obj = Object.assign({}, action.apiOptions || {});
  Object.assign(obj, action.payload || {});
  delete(obj.jwt);
  return objectMD5(obj);
};

const invalidateCache = (cacheGroup) => {
  cache.invalidate(cacheGroup);
};

const requestApiMiddleware = (dispatch) => {
  return (action) => {
    const { request, success, failure, apiOptions, payload = {}, cacheGroup = null, clearCacheGroup  } = action;

    if (!apiOptions) { // Non API action: pass it on
      return dispatch(
        Object.assign({}, { payload }, {
          type: request
        })
      );
    }

    dispatch(
      Object.assign({}, { payload }, {
        type: request
      })
    );

    async function fetch() {
      try {
        let key = null;
        let cachedPayload = null;
        if (cacheGroup) {
          key = keyFromAction(action);
        }
        const start = Date.now();
        // Don't get cached data during invalidation requests
        if (key && !action.invalidate ) {
          const cachedResponse = cache.get(cacheGroup, key);
          cachedPayload = cachedResponse ? cachedResponse.payload : null;
          // ignore any payload older than 1 hour
          if (cachedPayload && (cachedResponse.updated > (Date.now() - 3600000))) {
            console.log(`${key}: Get cached ${Math.round((Date.now() - cachedResponse.updated) / 1000)}s old payload ${Date.now() - start}ms`); // eslint-disable-line
            dispatch(
              Object.assign({}, {
                request: payload,
                payload: cachedPayload,
                type: success
              })
            );
          }
        }

        if (clearCacheGroup) {
          await invalidateCache(clearCacheGroup);
        }

        const apiResponse = await asyncFetch(apiOptions, payload);
        if (!apiResponse.ok) throw Error(apiResponse.statusText);
        let apiJson = await apiResponse.json();

        if (action.beforeDispatch) {
          apiJson = action.beforeDispatch(apiJson, cachedPayload);
        }

        dispatch(
          Object.assign({}, {
            request: payload,
            payload: apiJson,
            type: success
          })
        );
        if (action.afterSuccess) {
          await action.afterSuccess();
        }
        if (key) {
          console.log(`${action.success} ${key}: Put payload into cache ${Date.now() - start}ms`); // eslint-disable-line
          cache.set(cacheGroup, key, { payload: apiJson, updated: Date.now() });
        }
        return null;
      } catch (error) {
        const err =  new Error(`Failed to call ${apiOptions.api} API ${apiOptions.path}: ${error.message}`);
        if (error.code) {
          err.code = error.code;
          err.error = error.error;
        }
        err.key = uuid.v4();
        console.error(err); // eslint-disable-line
        dispatch(
          Object.assign({}, { payload }, {
            error: err,
            type: failure
          })
        );
        return null;
      }
    }

    return fetch();
  };
};

requestApiMiddleware.invalidateCache = invalidateCache;

export default requestApiMiddleware;
