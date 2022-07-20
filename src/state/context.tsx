import { createContext, useContext, useReducer } from "react";
import { IProbs, IUIContext, IUIState } from "../types/general";
import reducer from "./reducer";

const initialState: IUIState = {
  isAppointmentModalOpen: false,
  isMobileMenuOpen: false,
};

const UIContext = createContext<IUIContext>({
  ...initialState,
  setIsAppointmentModalOpen: () => {},
  setIsMobileMenuOpen: () => {},
});

export const UIProvider = ({ children }: IProbs) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsAppointmentModalOpen = (isAppointmentModalOpen: boolean) => {
    dispatch({
      type: "SET_IS_APPOINTMENT_MODAL_OPEN",
      payload: isAppointmentModalOpen,
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
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  return useContext(UIContext);
};
