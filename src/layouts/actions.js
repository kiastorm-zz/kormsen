

export const actions = (dispatch) => {
  const toggleSidebar = (invalidate) => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    })
  };

  const toggleMenu = (invalidate) => {
    dispatch({
      type: 'TOGGLE_MENU',
    })
  };

  return {
    toggleSidebar,
    toggleMenu
  };
};

export default actions;
