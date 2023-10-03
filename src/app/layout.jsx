"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../store";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Document</title>
      </head>
      <body>
        <Provider store={store}>
          <SessionProvider>{children}</SessionProvider>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
