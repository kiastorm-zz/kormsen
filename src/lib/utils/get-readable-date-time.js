import MMMDYYYY0000 from './date/mmm-d-yyyy-0000';

/**
 * @memberof utils
 * @description Returns readable date format.
 * - When passed single date param returns "Apr 30, 2019 11:26AM"
 * @param {Date} date - Date instance
 * @returns {String}
 *
 * @example
 * const date = getReadableDate(new Date('2016-10-1'));
 * console.log(date); // -> Apr 30, 2019 11:26AM
 *
 */
const getReadableDateTime = (date) => {
  return MMMDYYYY0000(date);
};

export default getReadableDateTime;
