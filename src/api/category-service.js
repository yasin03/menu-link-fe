import axios from "axios";

const api_url = process.env.API_URL;

export const createCategory = (category) => {
  return axios.post(`${api_url}/category/add`, category);
};
