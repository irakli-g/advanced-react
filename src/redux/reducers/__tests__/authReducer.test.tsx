import { authReducer } from "../";
import { switchAuthAction } from "../../actions/actionTypes";

describe("authReducer", () => {
  test("should switch on auth", () => {
    const action: switchAuthAction = {
      type: "SWITCH_AUTH",
      payload: true,
    };
    const state = authReducer({ authenticated: false }, action);
    expect(state.authenticated).toBeTruthy();
  });
  test("should switch off auth", () => {
    const action: switchAuthAction = {
      type: "SWITCH_AUTH",
      payload: false,
    };
    const state = authReducer({ authenticated: true }, action);
    expect(state.authenticated).toBeFalsy();
  });
});
