import { loginUserService } from "../services/userService";
import { types } from "./actionTypes";

export const loginUser =
  ({email,password}) =>
  async (dispatch) => {
    let loginResponse = await loginUserService(email,password);
    dispatch({
      type: types.LOGIN_USER,
      payload: loginResponse,
    });
    return { error: false, errorData: null, responseData: null };
  };