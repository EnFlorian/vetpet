export interface IProbs {
  children: React.ReactNode;
}

export interface IUIState {
  isAppointmentModalOpen: boolean;
  isNotificationModalOpen: boolean;
  isMobileMenuOpen: boolean;
}

export interface IUIContext extends IUIState {
  setIsAppointmentModalOpen: (isOpen: boolean) => void;
  setIsNotificationModalOpen: (isOpen: boolean) => void;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export type UIActions =
  | { type: "SET_IS_APPOINTMENT_MODAL_OPEN"; payload: boolean }
  | { type: "SET_IS_MOBILE_MENU_OPEN"; payload: boolean }
  | { type: "SET_IS_NOTIFICATION_MODAL_OPEN"; payload: boolean };
