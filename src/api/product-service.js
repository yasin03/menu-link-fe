import axios from "axios";
import authHeader from "./auth-header";

const api_url = process.env.API_URL;

export const createProduct = (product) => {
  console.log("comp ", product);
  return axios.post(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/product/add`,
    product,
    { headers: authHeader() }
  );
};

export const getProductsAll = () => {
  return axios.get(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/product/all`,
    { headers: authHeader() }
  );
};

export const deleteProduct = (id) => {
  return axios.delete(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/product/${id}`,
    { headers: authHeader() }
  );
};

export const updateProduct = (id, product) => {
  return axios.put(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/product/${id}`,
    product,
    {
      headers: authHeader(),
    }
  );
};
