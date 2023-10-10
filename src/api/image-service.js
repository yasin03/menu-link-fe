import axios from "axios";
import authHeader from "./auth-header";

const api_url = process.env.API_URL;

export const createImage = (image) => {
  return axios.post(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/files/pupload`,
    image,
    { headers: authHeader() }
  );
};

export const getImages = () => {
  return axios.get(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/files/download`,
    { headers: authHeader() }
  );
};