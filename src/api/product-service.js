import axios from "axios";
import authHeader from "./auth-header";

const api_url = process.env.API_URL;

export const createProduct = (product) => {
  console.log("comp ", product);
  return axios.post(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/product/add`,
    product,
    {
      Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk1MDU4MzQwLCJleHAiOjE2OTUxNDQ3NDB9.bJ9DUpxLLLTuiH1ljp6ONGca1pmzgjTmVdM_J2SPyQWzj0oDLtURj8GmCzB3ls8gw1jTgu5vH9_fx7J9igszXA`,
    }
    /*  { headers: authHeader() } */
  );
};
