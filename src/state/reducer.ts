const reducer = (state: IUIState, action: UIActions) => {
  switch (action.type) {
    case "SET_IS_AUTH_MODAL_OPEN":
      return { ...state, isAuthModalOpen: action.payload };
    default:
      return state;
  }
};

export default reducer;
