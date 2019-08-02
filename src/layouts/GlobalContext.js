import React, { createContext, useState, useReducer } from 'react';

const initialState = {
  sidebarIsOpen: true,
  currentPage: null,
  showCanvas: true,
};

export const GlobalContext = React.createContext(initialState);


const GlobalContextProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initialState);

  const toggleSidebar = () => {
    return { ...globalState, sidebarIsOpen: !globalState.sidebarIsOpen }
  }


  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        return toggleSidebar();
      default:
        return globalState
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider value={{ globalState: state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;


