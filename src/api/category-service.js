import axios from "axios";
import authHeader from "./auth-header";
import { useSession } from "next-auth/react";

const api_url = process.env.API_URL;

export const createCategory = (category) => {
  let header = {
    Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk2MTg3NjkyLCJleHAiOjE2OTYyNzQwOTJ9.OTakGyXlJ0drbr-3sI0EO-_TDA16oegj4cXfSknRbRnm50ODUXlqz_e6H__4osOJKfq6juLcHw8OIw69JnOOcw`,
  };

  console.log("categ ", category);
  return axios.post(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/category/add`,
    category,
    {
      headers: header
    }
  );
};

export const getCategoriesAll = () => {
  return axios.get(
    `https://menu-project-1c3dcd8eae29.herokuapp.com/category/all`,
    {
      headers: header,
    }
  );
};
