import { IUIState, UIActions } from "../types/general";

const reducer = (state: IUIState, action: UIActions) => {
  switch (action.type) {
    case "SET_IS_APPOINTMENT_MODAL_OPEN":
      return { ...state, isAppointmentModalOpen: action.payload };
    case "SET_IS_MOBILE_MENU_OPEN":
      return { ...state, isMobileMenuOpen: action.payload };
    case "SET_IS_NOTIFICATION_MODAL_OPEN":
      return { ...state, isNotificationModalOpen: action.payload };
    default:
      return state;
  }
};

export default reducer;
