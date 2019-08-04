import React, { createContext, useState, useReducer } from 'react';
import actions from './actions';

const defaultState = {
  sidebarIsOpen: true,
  menuIsOpen: false,
  currentPage: null,
  showCanvas: true,
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  }
};

export const GlobalContext = React.createContext(defaultState);


const GlobalContextProvider = ({ children }) => {
  const reducer = (globalState, action) => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        return { ...globalState, sidebarIsOpen: !globalState.sidebarIsOpen };
      case 'TOGGLE_MENU':
        return { ...globalState, menuIsOpen: !globalState.menuIsOpen };
      default:
        return globalState
    }
  }

  const [globalState, dispatch] = useReducer(reducer, defaultState);

  const value = { globalState, actions: actions(dispatch) };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;


