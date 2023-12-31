import Sidebar from "@/component/components/admin/layout/Sidebar"
import "../globals.css"
import Header from "@/component/components/admin/layout/Header"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex ">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
