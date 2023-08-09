import { Image } from "@nextui-org/react";
import React from "react";

const ImageSection = () => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-16 md:justify-center py-12 ">
      <Image
        src="./assets/img/about/about1.jpg"
        width="250"
        height="700"
        className="shadow-md"
      />
      <Image
        src="./assets/img/about/about4.jpg"
        width="250"
        height="700"
        className="shadow-md "
      />
      <Image
        src="./assets/img/about/about3.jpg"
        width="250"
        height="700"
        className="shadow-md"
      />
    </div>
  );
};

export default ImageSection;
