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
  if (action.type === "WARN_USER") {
    window.alert(action.payload);
    return {
      ...state,
    };
  }
  return {
    ...state,
  };
};

export default authReducer;
