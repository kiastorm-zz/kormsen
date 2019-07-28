/**
 * A overridden value of document. You override this via `setDocument`, which you
 * would only do in tests.
 * @private
 */
let overrideDoc;

/**
 * @memberof utils
 * @description Returns browser's document object.
 * You may ask: what's wrong with accessing beloved document object directly
 * instead of using `utils.getdocument()`; it's shorter and needs minimum effort to
 * integrate with it. Compare it with `utils.getdocument()` that needs to be imported
 * and then used. Well, that's the case till you start writing tests for your
 * code that uses document object :). You need to:
 *   1. Keep a copy of your document object in another variable
 *   2. overwrite the document object with some mock object
 *   3. Do your test
 *   4. Restore it
 *
 * And if you forget step 4, it's going to cause problem for other tests which is
 * painful to debug and find source of issue.
 *
 * On the other hand, you can simply stub `utils.getdocument()` using Sinon Sandbox.
 *
 * @returns  {Object}       Global document object
 */
const getDocument = () => overrideDoc || document;

/**
 * Overrides the value of document that `getDocument` will return. You would
 * only need to do this in tests
 *
 * @param {Object} win - the value of document that `getDocument` should return.
 * @private
 *
 * @example Overriding document during a test
 *
 *    beforeEach(() => {
 *      setDocument(mockDoc);
 *    });
 *
 *    afterEach(() => {
 *      resetDocument();
 *    });
 */
export const setDocument = (win) => {
  overrideDoc = win;
};

/**
 * Resets the value of document that `getDocument` returns back to the global document.
 *
 * @private
 */
export const resetDocument = () => {
  overrideDoc = undefined;
};

export default getDocument;
