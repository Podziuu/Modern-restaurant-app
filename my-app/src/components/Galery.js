import React, { useEffect, useRef } from "react";
import Button from "./Layout/Button";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import gallery01 from "../assets/gallery01.png";
import gallery02 from "../assets/gallery02.png";
import gallery03 from "../assets/gallery03.png";
import gallery04 from "../assets/gallery04.png";
import Container from "./Layout/Container";
import ImageGallery from "./Layout/ImageGallery";

const Galery = () => {
  const galleryRef = useRef();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // console.log("This will run every second!");
  //     // galleryRef.current.scrollLeft -= 0.3;
  //     // galleryRef.current.scrollLeft += 100;
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const clickHandler = (direction) => {
    if (direction === "left") {
      galleryRef.current.scrollLeft -= 150;
    } else if (direction === "right") {
      galleryRef.current.scrollLeft += 150;
    }
  };

  console.log(galleryRef);

  return (
    <Container className="bg-[#0C0B08] flex items-center justify-between py-16 flex-col md:flex-row">
      <div className="w-3/4 md:w-1/3 md:mr-6">
        <h3 className="text-white text-lg">Instagram</h3>
        <svg
          width="40"
          height="10"
          viewBox="0 0 40 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.5014 9.5C37.0847 9.5 39.9998 7.48129 39.9998 4.99995C39.9998 2.51861 37.0847 0.5 33.5014 0.5C30.112 0.5 27.3219 2.30637 27.0298 4.6018H22.3527V3.6552L-0.000213623 3.6552V6.34446L22.3528 6.34446V5.39798H27.0299C27.3221 7.69352 30.112 9.5 33.5014 9.5ZM21.4896 5.54839L0.863079 5.54839V4.45161H21.4896V5.54839ZM27.866 4.99995C27.866 2.95778 30.3942 1.2964 33.5015 1.2964C36.6088 1.2964 39.137 2.95778 39.137 4.99995C39.137 7.04222 36.6088 8.7037 33.5015 8.7037C30.3942 8.7037 27.866 7.04222 27.866 4.99995Z"
            fill="#DCCA87"
          />
        </svg>
        <h2 className="text-[#DCCA87] text-5xl my-6 font-semibold">
          Photo Gallery
        </h2>
        <p className="text-[#AAAAAA] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <Button text="View More" />
      </div>
      <div className="w-3/4 mt-8 md:mt-0 md:w-2/3 relative">
        <div
          className="flex flex-row overflow-x-hidden relative z-10"
          ref={galleryRef}
        >
          {[gallery01, gallery02, gallery03, gallery04].map((image, index) => {
            return <ImageGallery image={image} key={index} />;
          })}
        </div>
        <div className="absolute inset-0">
          <BsArrowLeftShort
            className="absolute bottom-2 left-2 bg-[#0C0B08] text-[#DCCA87] rounded-full text-2xl cursor-pointer z-20"
            onClick={() => clickHandler("left")}
          />
          <BsArrowRightShort
            className="absolute bottom-2 right-2 bg-[#0C0B08] text-[#DCCA87] rounded-full text-2xl cursor-pointer z-20"
            onClick={() => clickHandler("right")}
          />
        </div>
      </div>
    </Container>
  );
};

export default Galery;

{
  /* <div className="w-1/2">
        <div className="flex flex-row overflow-x-hidden" ref={galleryRef}>
          {[gallery01, gallery02, gallery03, gallery04].map((image, index) => {
            return <ImageGallery image={image} key={index} />;
          })}
          <div className="absolute">
          <BsArrowLeftShort className="absolute"/>
          <BsArrowRightShort/>
        </div>
        </div>
      </div> */
}
