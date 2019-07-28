import getWindow from './get-window';

/**
 * A overridden value of document. You override this via `setDeviceType`, which you
 * would only do in tests.
 * @private
 */
let overrideDeviceType;


/**
 * @memberof utils
 * @description Returns type of device based on the devices userAgent.
 * @returns     {String}                    type of device
 * @example
 * import deviceType from 'some-path';
 * const getDeviceType = deviceType();
 * console.log(getDeviceType);
 */
const deviceType = () => {
  if (overrideDeviceType) {
    return overrideDeviceType;
  }

  const windowWidth = getWindow().innerWidth;
  const device = window.AP3_DEVICE_TYPE;
  const landscapeDevice = window.matchMedia("(orientation: landscape)").matches;
  const portraitDevice = window.matchMedia("(orientation: portrait)").matches;

  if (device === 'tablet' && landscapeDevice) {
    return 'tablet-landscape';
  } if (device === 'tablet' && portraitDevice) {
    return 'tablet-portrait';
  } if (device === 'mobile' && landscapeDevice) {
    return 'mobile-landscape';
  } if (device === 'mobile' && portraitDevice) {
    return 'mobile';
  } if (windowWidth > 1800) {
    return 'large-desktop';
  }

  return 'desktop';
};

/**
 * Overrides the value of `deviceType` will return. You would
 * only need to do this in tests
 *
 * @param {Object} dt - the value of `deviceType` should return.
 * @private
 *
 * @example Overriding document during a test
 *
 *    beforeEach(() => {
 *      setDeviceType(mockId);
 *    });
 *
 *    afterEach(() => {
 *      resetDeviceType();
 *    });
 */
export const setDeviceType = (dt) => {
  overrideDeviceType = dt;
};

/**
 * Resets the value of document that `deviceType` returns back to the default.
 *
 * @private
 */
export const resetDeviceType = () => {
  overrideDeviceType = undefined;
};

export default deviceType;
