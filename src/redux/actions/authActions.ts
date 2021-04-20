import { switchAuthAction } from "./actionTypes";

export const authenticateUser = (value: boolean): switchAuthAction => {
  return {
    type: "SWITCH_AUTH",
    payload: value,
  };
};
