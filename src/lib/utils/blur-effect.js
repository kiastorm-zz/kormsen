/**
 * @memberof utils
 * @description Puts the user feedback and metadata from the browser into
 *              a feedback object to be consumed by the feedback api
 * @param   {String} feedback a users feedback message
 * @returns {Object} an object ready to be turned into a
 *                   json string and sent to the feedback api
 *
 */
function blurEffect(showBlur, wrapperId = 'ap3-app-ui') {
  const elementToBlur = document.getElementById(wrapperId) &&  document.getElementById(wrapperId).firstChild;

  if (!elementToBlur) return false;

  const addBlurToElement = (elem) => {
    const element = elem;

    const blurClass = element.className.match(/\bbg-blur\b/) ? '' : ' bg-blur';

    element.className += blurClass;
  };

  const removeBlurClassWithoutTimeout = (elem) => {
    elem.classList.remove('bg-blur-exit');
  };

  const removeBlurFromElement = (elem) => {
    const element = elem;

    if (!element.className.match(/\bbg-blur\b/)) return false;

    element.classList.remove('bg-blur');
    element.className += ' bg-blur-exit';

    return removeBlurClassWithoutTimeout(element);
  };


  if (showBlur) {
    return addBlurToElement(elementToBlur);
  }

  return removeBlurFromElement(elementToBlur);

}

export default blurEffect;
