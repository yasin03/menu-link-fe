import React from "react";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 flex justify-center items-center">
      <div className="m-auto z-50 ">
        <Spinner color="danger" size="lg"/>
      </div>
    </div>
  );
};

export default Loading;
