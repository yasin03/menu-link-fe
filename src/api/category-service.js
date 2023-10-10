import axios from "axios";
import authHeader from "./auth-header";
import { settings } from "../utils/settings";

const api_url = settings.apiURL;

export const createCategory = (category) => {
  return axios.post(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/category/add`,
    category,
    {
      headers: authHeader(),
    }
  );
};

export const getCategoriesAll = () => {
  return axios.get(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/category/all`,
    {
      headers: authHeader(),
    }
  );
};
export const deleteCategory = (id) => {
  return axios.delete(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/category/${id}`,
    {
      headers: authHeader(),
    }
  );
};
export const updateCategory = (id, category) => {
  return axios.put(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/category/${id}`,
    category,
    {
      headers: authHeader(),
    }
  );
};
