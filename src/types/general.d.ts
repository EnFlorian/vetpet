interface IProbs {
  children: React.ReactNode;
}

interface IUIState {
  isAppointmentModalOpen: boolean;
  isMobileMenuOpen: boolean;
}

interface IUIContext extends IUIState {
  setIsAppointmentModalOpen: (isOpen: boolean) => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

type UIActions =
  | { type: "SET_IS_APPOINTMENT_MODAL_OPEN"; payload: boolean }
  | { type: "SET_IS_MOBILE_MENU_OPEN"; payload: boolean };
