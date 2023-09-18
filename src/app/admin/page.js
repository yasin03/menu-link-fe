"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

const page = () => {
  const { data: session } = useSession();

/*   useEffect(() => {
     secureLocalStorage.setItem("token", session?.user.key);
  }, []) */
  
 
  const router = useRouter();
  return (
    <div className="p-4">
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default page;
