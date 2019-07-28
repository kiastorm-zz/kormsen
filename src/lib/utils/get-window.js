/**
 * A overridden value of window. You override this via `setWindow`, which you
 * would only do in tests.
 * @private
 */
let overrideWin;

/**
 * @memberof utils
 * @description Returns browser's window object.
 * You may ask: what's wrong with accessing beloved window object directly
 * instead of using `utils.getWindow()`; it's shorter and needs minimum effort to
 * integrate with it. Compare it with `utils.getWindow()` that needs to be imported
 * and then used. Well, that's the case till you start writing tests for your
 * code that uses window object :). You need to:
 *   1. Keep a copy of your window object in another variable
 *   2. overwrite the window object with some mock object
 *   3. Do your test
 *   4. Restore it
 *
 * And if you forget step 4, it's going to cause problem for other tests which is
 * painful to debug and find source of issue.
 *
 * On the other hand, you can simply stub `utils.getWindow()` using Sinon Sandbox.
 *
 * @returns  {Object}       Global window object
 */
const getWindow = () => overrideWin || window;

/**
 * Overrides the value of window that `getWindow` will return. You would
 * only need to do this in tests
 *
 * @param {Object} win - the value of window that `getWindow` should return.
 * @private
 *
 * @example Overriding window during a test
 *
 *    beforeEach(() => {
 *      setWindow(mockWin);
 *    });
 *
 *    afterEach(() => {
 *      resetWindow();
 *    });
 */
export const setWindow = (win) => {
  overrideWin = win;
};

/**
 * Resets the value of window that `getWindow` returns back to the global window.
 *
 * @private
 */
export const resetWindow = () => {
  overrideWin = undefined;
};

export default getWindow;
