import { getSession } from "next-auth/react"
import LoginPage from "./components/Login"
import { getServerSession } from "next-auth"
import { authOptions } from "@/component/lib/authOptions"

const page = async () => {
  return <LoginPage />
}

export default page
