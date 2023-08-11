"use client"
import { SessionProvider } from "next-auth/react"
import React from "react"

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Document</title>
      </head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout
