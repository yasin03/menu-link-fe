"use client";
import { Modal, Spinner } from "@nextui-org/react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/20">
      <div className="flex w-full h-full justify-center items-center ">
        <Spinner size="lg" />
      </div>{" "}
    </div>
  );
}
