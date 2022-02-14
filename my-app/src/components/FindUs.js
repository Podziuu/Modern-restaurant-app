import React from "react";
import Container from "./Layout/Container";
import findus from "../assets/findus.png";
import Button from "./Layout/Button";

const FindUs = () => {
  return (
    <Container id="contact" className="bg-bg-pattern bg-center bg-cover bg-fixed h-full sm:h-screen flex items-center justify-between flex-col sm:flex-row py-8 sm:py-0">
      <div className="sm-4/5 sm:w-1/2">
        <h3 className="text-white">Contact</h3>
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
        <h2 className="text-[#DCCA87] text-5xl font-bold my-4">Find Us</h2>
        <p className="text-[#AAAAAA] my-6">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <h4 className="text-[#DCCA87] my-2">Opening Hours</h4>
        <p className="text-white">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="text-white">Sat - Sun: 10:00 am - 03:00 am</p>
        <Button text="Visit Us" className="mt-12" />
      </div>
      <div className="w-4/5 sm:w-1/2 mt-12 sm:mt-0">
        <img className="w-4/5" src={findus} />
      </div>
    </Container>
  );
};

export default FindUs;
