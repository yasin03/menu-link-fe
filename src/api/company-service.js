import axios from "axios";
import authHeader from "./auth-header";

const api_url = process.env.API_URL;

export const createCompany = (company) => {
  console.log("comp ", company);
  return axios.post(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/company/add`,
    company,
    { headers: authHeader() }
  );
};
