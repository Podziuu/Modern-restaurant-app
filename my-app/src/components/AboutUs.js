import React from "react";
import Button from "./Layout/Button";
import Container from "./Layout/Container";

import knife from "../assets/knife.png";
import G from "../assets/G.png";

const AboutUs = () => {
  return (
    <Container className="bg-bg-pattern bg-center bg-cover bg-fixed h-screen flex flex-row items-center justify-center" id="about">
      <div className="w-2/5 flex flex-col items-end z-10">
        <h2 className="text-[#DCCA87] text-4xl mb-4">About Us</h2>
        <svg
          className="rotate-180"
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
        <p className="text-right text-[#AAAAAA] my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <Button text="Know More" />
      </div>
      <div className="w-1/5 h-full flex justify-center items-center z-10">
        <img className="h-4/6" src={knife} />
      </div>
      <div className="w-2/5 flex flex-col items-start z-10">
        <h2 className="text-[#DCCA87] text-4xl mb-4">Our History</h2>
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
        <p className="text-left text-[#AAAAAA] my-6">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <Button text="Know More" />
      </div>
      <img className="absolute w-72 z-0" src={G} />
    </Container>
  );
};

export default AboutUs;
