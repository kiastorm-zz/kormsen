import 'whatwg-fetch';
import getWindow from './get-window';

/**
 * @memberof utils
 * @description Returns window.fetch object.
 * Try to use this instead of accessing `window.fetch`
 * directly. This helps during tests.
 * @returns {Object} Global fetch object
 *
 * @example
 * import { getFetch } from 'coogee/shared/utils';
 * const fetch = getFetch();
 * fetch('http://coffee.com')
 *   .then(drinkIt);
 */
const getFetch = () => getWindow().fetch;

export default getFetch;
