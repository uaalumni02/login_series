import { useReducer } from "react";
import reducer from "./reducer";

import initalState from "./initialState";

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, initalState);

  return {
    globalState,
    globalDispatch,
  };
};

export default useGlobalState;
