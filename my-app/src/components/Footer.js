import React from "react";
import Button from "./Layout/Button";
import { GrFacebookOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#0C0B08]">
      <div className="border border-[#DCCA87]/20 border-t-0 flex flex-col items-center py-6 px-6 sm:px-12 md:px-28 shadow-2xl shadow-black">
        <h3 className="text-white">Newsletter</h3>
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
        <h2 className="text-[#DCCA87] text-5xl font-semibold my-4 text-center">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-white">And never miss latest Updates!</p>
        <form className="w-full flex justify-center mt-4 flex-col sm:flex-row items-center">
          <input
            className="w-full mr-4 bg-[#0C0B08] border p-2 text-white"
            placeholder="Enter Adress"
          />
          <Button text="Subscribe" className="mt-4 sm:mt-0" />
        </form>
      </div>
      <div className="mt-20 flex justify-between w-full md:w-4/5 lg:w-1/2 flex-col sm:flex-row items-center">
        <div className="text-[#AAAAAA] flex flex-col items-center text-sm w-56 text-center mb-8 sm:mb-0">
          <h3 className="text-[#F5EFDB] text-xl mb-4">Contact Us</h3>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <p>+1 212-344-1230</p>
          <p>+1 212-344-1230</p>
        </div>
        <div className="flex flex-col items-center text-white -translate-y-3 text-sm w-56 mb-8 sm:mb-0">
          <h3 className="text-[#DCCA87] text-4xl font-semibold mb-4 ">
            GERICHT
          </h3>
          <p className="text-center mb-1">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
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
          <div className="flex justify-around w-1/3 mt-2">
            <GrFacebookOption />
            <FiTwitter />
            <BsInstagram />
          </div>
        </div>
        <div className="text-[#AAAAAA] flex flex-col items-center text-center text-sm w-56 mb-8 sm:mb-0">
          <h3 className="text-[#F5EFDB] text-xl mb-4">Working Hours</h3>
          <div className="mb-2">
            <p>Monday-Friday:</p>
            <p>08:00 am - 12:00 am</p>
          </div>
          <div>
            <p>Saturday-Sunday:</p>
            <p>07:00 am - 11:00 am</p>
          </div>
        </div>
      </div>
      <p className="text-[#AAAAAA] mt-16">2022 Gerich. All Rights reserved.</p>
    </div>
  );
};

export default Footer;
