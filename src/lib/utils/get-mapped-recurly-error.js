/**
 * Map the Recurly transaction errors to highlight the fields we want and to customize the messages.
 */
const getMappedRecurlyError = errorMessage => {
  const billingError = {};

  switch (true) {
    case /The transaction was declined. Please use a different card, contact your bank, or contact support./.test(errorMessage):
    case /transaction was declined. Please use a different card or contact your bank/.test(errorMessage):
      billingError.message = 'Your transaction was declined. Please use a different card or contact your bank.';
      billingError.field = 'generic';
      break;

    case /Your card number is not valid. Please update your card number/.test(errorMessage):
      billingError.message = 'Your card number is not valid. Please update your card number.';
      billingError.field = 'cardnumber';
      break;

    case /declined due to insufficient funds in your account/.test(errorMessage):
      billingError.message = 'Your transaction was declined due to insufficient funds in your account. Please use a different card or contact your bank.';
      billingError.field = 'generic';
      break;

    case /The transaction was declined. Please contact support/.test(errorMessage):
      billingError.message = 'The transaction was declined. Please contact support.';
      billingError.field = 'generic';
      break;

    case /Your transaction was declined. Please contact your bank/.test(errorMessage):
      billingError.message = 'Your transaction was declined. Please contact your bank for further details or try another card.';
      billingError.field = 'generic';
      break;

    case /transaction was declined due to invalid data/.test(errorMessage):
      billingError.message = 'The transaction was declined due to invalid data.';
      billingError.field = 'generic';
      break;

    case /the payment system did not respond in time/.test(errorMessage):
      billingError.message = 'The payment system did not respond in time to process your transaction. Please contact support.';
      billingError.field = 'generic';
      break;

    case /A similar transaction was recently submitted/.test(errorMessage):
      billingError.message = 'A similar transaction was recently submitted. Please wait a few minutes and try again.';
      billingError.field = 'generic';
      break;

    case /card type is not accepted/.test(errorMessage):
      billingError.message = 'Your credit card type is not accepted. Please try another card.';
      billingError.field = 'generic';
      break;

    case /expiration date is invalid or does not match/.test(errorMessage):
      billingError.message = 'Your expiration date is invalid or does not match the credit card provided.';
      billingError.field = 'expDate';
      break;

    case /The security code you entered does not match/.test(errorMessage):
      billingError.message = 'The CVV you entered does not match the credit card provided. Please update and try again.';
      billingError.field = 'cvc';
      break;

    case /Your billing address does not match the address on your account/.test(errorMessage):
      billingError.message = 'Your billing address does not match the credit card provided. Please update address or contact your bank.';
      billingError.field = 'addressFields';
      break;

    default:
      billingError.message = 'There was a problem with your transaction. Please contact support.';
      billingError.field = 'generic';
      break;
  }  

  return billingError;
};

export default getMappedRecurlyError;
