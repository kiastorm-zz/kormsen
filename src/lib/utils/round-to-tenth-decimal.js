/**
 * @memberof utils
 * @description Rounds trailing decimal places to the nearest tenth
 * @param       {Number}      number      Input number
 * @returns     {Number}      number that is rounded to nearest tenth decimal
 *                            point.
 * @example
 * import { roundToTenthDecimal } from 'utils';
 * const number = 7.051;
 * const result = roundToTenthDecimal(number)
 * console.log(result); // -> 7.1
 */
const roundToTenthDecimal = (number) => {
  if (typeof number === 'undefined' || number === null) {
    return '';
  }
  if (typeof number === 'number') {
    return Number(number.toFixed(1));
  }
  return number;
};

export default roundToTenthDecimal;
