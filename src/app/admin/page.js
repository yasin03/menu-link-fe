"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const { data: session } = useSession();
  console.log(session?.user);
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
