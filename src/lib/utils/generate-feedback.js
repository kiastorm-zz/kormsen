/**
 * @memberof utils
 * @description Puts the user feedback and metadata from the browser into
 *              a feedback object to be consumed by the feedback api
 * @param   {String} feedback a users feedback message
 * @returns {Object} an object ready to be turned into a
 *                   json string and sent to the feedback api
 *
 */
function generateFeedback(feedbackMessage) {
  const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

  const result = {
    "message": feedbackMessage,
    "userAgent": window.navigator.userAgent,
    "page": window.location.href,
    "screen": `${window.screen.width}x${window.screen.height}`,
    "window": `${windowWidth}x${windowHeight}`,
  };

  return result;
}

export default generateFeedback;
