import { constants } from "../utils/constants";
import { apiCall } from "./methods";

export const loginUserService = async (email, password) => {
  return await apiCall(
    `${constants.BACKEND_URL}/v1/auth/login`,
    "POST",
    {},
    { email, password }
  );
};

export const signupService = async (email, password, confirmPassword, name) => {
  return await apiCall(
    `${constants.BACKEND_URL}/v1/auth/signup`,
    "POST",
    {},
    { email, password, confirmPassword, name }
  );
};

export const forgotService = async (email) => {
  return await apiCall(
    `${constants.BACKEND_URL}/v1/auth/forgotpassword`,
    "POST",
    {},
    { email }
  );
};

export const resetPasswordService = async (
  password,
  confirmPassword,
  token
) => {
  return await apiCall(
    `${constants.BACKEND_URL}/v1/auth/resetPassword/${token}`,
    "PATCH",
    {},
    { password, confirmPassword }
  );
};

export const editProfileService = async (name, mobileNumber, address, token) => {
  return await apiCall(
    `${constants.BACKEND_URL}/v1/auth/updateUser`,
    "PATCH",
    { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    { name, mobileNumber, address }
  );
};
