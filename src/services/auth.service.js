import { useMutation } from "react-query";
import axios from "axios";

export const createUser = (user) => {
  return axios.post("http://localhost:5000/users/register", user);
};
