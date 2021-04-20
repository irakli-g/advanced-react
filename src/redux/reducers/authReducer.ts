import { AuthActions } from "../actions/actionTypes";

interface DefaultState {
  authenticated: boolean;
}

const defaultState: DefaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action: AuthActions): DefaultState => {
  if (action.type === "SWITCH_AUTH") {
    return {
      ...state,
      authenticated: action.payload,
    };
  }
  return {
    ...state,
  };
};

export default authReducer;
