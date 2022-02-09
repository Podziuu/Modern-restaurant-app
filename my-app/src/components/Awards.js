import React from "react";

import Container from "../components/Layout/Container";
import laurels from "../assets/laurels.png";
import Award from '../components/Layout/Award'
import award01 from '../assets/award01.png'
import award02 from '../assets/award02.png'
import award03 from '../assets/award03.png'
import award05 from '../assets/award05.png'
import logo from '../assets/logo.png'

const Awards = () => {
  return (
    <Container className="relative bg-bg-pattern bg-center bg-cover bg-fixed h-full py-8 md:py-0 md:h-screen flex flex-col md:flex-row justify-between items-center">
      <div>
        <h3 className="text-white text-lg">Awards & Recognition</h3>
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
        <h2 className="text-[#DCCA87] text-5xl font-semibold my-4">Our Laurels</h2>
        <div className="w-full flex flex-col items-center sm:grid sm:grid-rows-2 sm:grid-cols-2 gap-y-8">
            <Award photo={award02} text="Bib Gourmond" />
            <Award photo={award01} text="Rising Star" />
            <Award photo={award05} text="AA Hospitality" />
            <Award photo={award03} text="Oustanding Chef" />
        </div>
      </div>
      <div className="w-3/5 md:w-2/5 mt-16 md:mt-0">
        <img src={laurels} />
      </div>
      <img className="hidden md:block absolute top-10 left-10 w-36" src={logo} />
    </Container>
  );
};

export default Awards;
