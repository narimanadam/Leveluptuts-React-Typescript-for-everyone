import React, { createContext, useReducer } from "react";

type Action = {
  type: string;
};

type State = {
  rValue: boolean;
};

export const initialValues = {
  rValue: true,
  turnOn: () => {},
  turnOff: () => {}
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "one":
      return { ...state, rValue: true };
    case "two":
      return { ...state, rValue: false };
    default:
      return state;
  }
}

export const GlobalContext = createContext(initialValues);

const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <GlobalContext.Provider
      value={{
        rValue: state.rValue,
        turnOn: () => dispatch({ type: "one" }),
        turnOff: () => dispatch({ type: "two" })
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
