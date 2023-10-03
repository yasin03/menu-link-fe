import { useSession } from "next-auth/react";

const authHeader = async () => {
  const { data: session } = useSession();

  const token = await session?.user?.key;
  console.log("token ", token);
  let header = {};
  if (token) {
    header = { Authorization: `Bearer ${token}` };
  }

  return header;
};

export default authHeader; 
