import React from "react";
import { BsInstagram } from "react-icons/bs";

const ImageGallery = (props) => {
  return (
    <div className="min-w-[80%] sm:min-w-[50%] md:min-w-[30%] mr-10 last:mr-0 select-none relative cursor-pointer group">
      <img
        className="h-full group-hover:opacity-40 transition-opacity"
        src={props.image}
      />
      <BsInstagram className="text-white absolute inset-full top-2/4 left-2/4 opacity-0 group-hover:opacity-100 transition-opacity "/>
    </div>
  );
};

export default ImageGallery;
