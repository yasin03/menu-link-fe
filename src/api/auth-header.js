import { useSession } from "next-auth/react";

const authHeader = () => {
  const { data: session } = useSession();

  const token = session?.user?.key;
  console.log("tokwn ", token);
  let header = {};
  if (token) {
    header = { Authorization: `Bearer ${token}` };
  }

  return header;
};

export default authHeader;
