import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import UserTemplate from "../templates/UserTemplate";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<UserTemplate><HomePage /></UserTemplate>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contact" element={<UserTemplate><ContactPage /></UserTemplate>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
