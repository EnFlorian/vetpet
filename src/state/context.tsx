import { createContext, useContext, useReducer } from "react";
import { IProbs, IUIContext, IUIState } from "../types/general";
import reducer from "./reducer";

const initialState: IUIState = {
  isAppointmentModalOpen: false,
  isNotificationModalOpen: false,
  isMobileMenuOpen: false,
};

const UIContext = createContext<IUIContext>({
  ...initialState,
  setIsAppointmentModalOpen: () => {},
  setIsMobileMenuOpen: () => {},
  setIsNotificationModalOpen: () => {},
});

export const UIProvider = ({ children }: IProbs) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsAppointmentModalOpen = (isAppointmentModalOpen: boolean) => {
    dispatch({
      type: "SET_IS_APPOINTMENT_MODAL_OPEN",
      payload: isAppointmentModalOpen,
    });
  };

  const setIsNotificationModalOpen = (isNotificationModalOpen: boolean) => {
    dispatch({
      type: "SET_IS_NOTIFICATION_MODAL_OPEN",
      payload: isNotificationModalOpen,
    });
  };

  const setIsMobileMenuOpen = (isMobileMenuOpen: boolean) => {
    dispatch({
      type: "SET_IS_MOBILE_MENU_OPEN",
      payload: isMobileMenuOpen,
    });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        setIsAppointmentModalOpen,
        setIsMobileMenuOpen,
        setIsNotificationModalOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  return useContext(UIContext);
};
