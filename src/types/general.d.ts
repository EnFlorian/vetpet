interface IProbs {
  children: React.ReactNode;
}

interface IUIState {
  isAppointmentModalOpen: boolean;
}

interface IUIContext extends IUIState {
  setIsAppointmentModalOpen: (isOpen: boolean) => void;
}

type UIActions = { type: "SET_IS_APPOINTMENT_MODAL_OPEN"; payload: boolean };
