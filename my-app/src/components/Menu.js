import React from "react";
import Container from "./Layout/Container";
import Button from './Layout/Button'

import menu from "../assets/menu.png";
import MenuItem from "./Layout/MenuItem";

const Menu = () => {
  return (
    <Container
      className="h-full lg:h-screen bg-[#0C0B08] flex flex-col items-center py-12"
      id="menu"
    >
      <h3 className="text-white text-xl mb-2">Menu that fits you palatte</h3>
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

      <h2 className="text-[#DCCA87] text-5xl mt-4 font-bold">
        Today's Special
      </h2>
      <div className="flex text-white w-full h-full justify-center items-center flex-col lg:flex-row">
        <div className="w-full md:w-3/5 lg:w-1/3 h-4/6 flex justify-start items-center flex-col px-8">
          <h3 className="text-4xl">Wine & Beer</h3>
          <MenuItem name="Chapel Hill Shiraz" country="AU" type="Bottle" price="56" />
          <MenuItem name="Catena Malbee" country="AR" type="Bottle" price="59" />
          <MenuItem name="La Vieille Rosé" country="FR" type="750 ml" price="44" />
          <MenuItem name="Rhino Pale Ale" country="CA" type="750 ml" price="31" />
          <MenuItem name="Irish Guinness" country="IE" type="750ml" price="26" />
        </div>
        <div className="w-1/4 h-fit py-6 hidden lg:block">
          <img className="h-4/5" src={menu} alt="menu" />
        </div>
        <div className="w-full md:w-3/5 lg:w-1/3 h-4/6 flex justify-start items-center flex-col px-8">
          <h3 className="text-4xl">Cocktails</h3>
          <MenuItem name="Aperol Spritz" price="20" country="Aperol" type="Villa Marchesi prosecco" add="soda" add2="30ml" />
          <MenuItem name="Dark 'N' Stormy" price="16" country="Dark Rum" type="Ginger beer" add="Slice of lime" />
          <MenuItem name="Daiquiri" price="10" country="Rum" type="Citrus juice" add="Sugar" />
          <MenuItem name="Old Fashioned" price="31" country="Bourbon" type="Brown sugar" add="Angostura Biters" />
          <MenuItem name="Negroni" price="26" country="Gin" type="Sweet Vermouth" add="Campari" add2="Orange garnish" />
        </div>
      </div>
      <Button text="View More" />
    </Container>
  );
};

export default Menu;
