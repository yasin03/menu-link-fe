import axios from "axios";

import authHeader from "./auth-header";
import { settings } from "../utils/settings";

const API_URL = settings.apiURL;

export const login = (values) => {
  console.log(API_URL);
  return axios.post(`${API_URL}/login`, values);
};

export const getUser = () => {
  return axios.get(`${API_URL}/users`, { headers: authHeader() });
};
