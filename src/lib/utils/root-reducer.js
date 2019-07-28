import hasValue from './has-value';

const rootReducer = (reducers) => (state, action) => {
  const reducer = reducers[action.type];
  if (hasValue(reducer) === true) {
    return reducer(state, action);
  }

  return state;
};


export default rootReducer;
