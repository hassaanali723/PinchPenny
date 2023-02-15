import { registerUser } from "../../services/auth.service";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./actions";

export const registerRequest = (firstName, lastName, email, password) => ({
  type: REGISTER_REQUEST,
  firstName,
  lastName,
  email,
  password,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  user,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  error,
});
