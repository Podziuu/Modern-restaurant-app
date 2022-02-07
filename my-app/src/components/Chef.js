import React from "react";

import Container from "./Layout/Container";
import chef from "../assets/chef.png";
import quote from "../assets/quote.png";
import sign from "../assets/sign.png";

const Chef = () => {
  return (
    <Container className="bg-bg-pattern bg-center bg-cover bg-fixed h-full sm:h-screen flex flex-col-reverse sm:flex-row py-12 sm:py-0 justify-between items-center">
      <div className="sm:w-2/5 w-4/5">
        <img src={chef} className="mt-8" />
      </div>
      <div className="sm:w-1/2 w-4/5">
        <h4 className="text-white text-lg">Chef's Word</h4>
        <svg
          width="30"
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
        <h2 className="text-[#DCCA87] text-5xl font-semibold my-4">
          What We Believe In
        </h2>
        <div className="my-12">
          <img className="inline w-8 mr-2" src={quote} />
          <p className='text-[#AAAAAA] inline'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <h3 className="text-[#DCCA87] text-2xl">Kevin Luo</h3>
        <p className="text-[#AAAAAA] mb-8">Chef & Founder</p>
        <img className="w-48" src={sign} />
      </div>
    </Container>
  );
};

export default Chef;
