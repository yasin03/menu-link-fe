import axios from "axios";

import authHeader from "./auth-header";
import { settings } from "../utils/settings";

const API_URL = settings.apiURL;

export const login = (values) => {
  console.log(API_URL);
  return axios.post(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/login`,
    values
  );
};

export const getUser = () => {
  return axios.get(`https://menu-project-1c3dcd8eae29.herokuapp.com/users`, {
    headers: authHeader(),
  });
};
