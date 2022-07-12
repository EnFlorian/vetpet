import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState: IUIState = {
  isAppointmentModalOpen: false,
};

const UIContext = createContext<IUIContext>({
  ...initialState,
  setIsAppointmentModalOpen: () => {},
});

export const UIProvider = ({ children }: IProbs) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsAppointmentModalOpen = (isAppointmentModalOpen: boolean) => {
    console.log("fired");
    dispatch({
      type: "SET_IS_APPOINTMENT_MODAL_OPEN",
      payload: isAppointmentModalOpen,
    });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        setIsAppointmentModalOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  return useContext(UIContext);
};
