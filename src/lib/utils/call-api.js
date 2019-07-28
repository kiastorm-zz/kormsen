/**
 * @memberof utils
 * @description Runs an API call to given API. Auth is handled for you.
 * @param {string} method - the HTTP method e.g. GET, POST, PUT, DELETE.
 * @param {string} apiName - the AP3 API to call, e.g. assets.
 * @param {string} path - the API path to use, e.g. /asset/1.
 * @param {Object} params - for GET will be query params, for POST, PUT will be body params.
 * @returns {Promise} A promise which will resolve with the result, or throw
 * @example
 * import callAPI from './utils/call-api';
 * try {
 *   let response = await callAPI('GET', 'assets')
 *   console.log('Assets are', response)
 * } catch (e) {
 *     console.error('Error retrieving assets', e)
 * }
 */
const findAPI = (apiName) => {
  if (typeof apiName !== 'string') {
    return null;
  }
  const d = window.AP3_DISCOVERY;
  return d && d.apis && d.apis[apiName] && d.apis[apiName].v1;
};

const callAPI = async (method, apiName, path, params) => {
  const api = findAPI(apiName);
  if (!api) {
    return Error(`Could not find API ${apiName}`);
  }
  let apiPath = path || '';
  apiPath = apiPath.replace(/^\/+/g, '');

  let query = `?r=${Math.random()}&`;
  if (api.auth) {
    query += `jwt=${window.AP3_JWT}&`;
  }

  /* If it is GET we send the params in the query
     otherwise we do it in the body */
  let body = null;
  if (method === 'GET') {
    if (params) {
      Object.keys(params).forEach((k) => {
        query += `${k}=${encodeURIComponent(params[k])}&`;
      });
    }
    if (query === '?') query = '';
  } else {
    body = JSON.stringify(params);
  }
  if (query === '?') query = '';

  const url = api.url + apiPath + query;
  const response = await fetch(url, {
    method,
    body
  });
  return response;
};



export default callAPI;
