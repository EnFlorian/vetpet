const reducer = (state: IUIState, action: UIActions) => {
  switch (action.type) {
    case "SET_IS_APPOINTMENT_MODAL_OPEN":
      return { ...state, isAppointmentModalOpen: action.payload };
    default:
      return state;
  }
};

export default reducer;
