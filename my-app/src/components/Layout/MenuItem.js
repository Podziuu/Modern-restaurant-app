import React from "react";

const MenuItem = (props) => {
  console.log(props);

  return (
    <div className="flex items-start justify-around w-full my-4 flex-col">
      <div className="flex flex-row w-full justify-between">
        <h4 className="text-[#DCCA87] text-xl font-semibold w-36">{props.name}</h4>
        <div className="w-[90px] h-[1px] mt-3 bg-white" />
        <p className="text-lg">${props.price}</p>
      </div>
      <p className="text-[#AAAAAA]">
        {props.country} <span>|</span> {props.type}{" "}
        {props.add && <span> | {props.add}</span>}
        {props.add2 && <span> | {props.add2}</span>}
      </p>
    </div>
  );
};

export default MenuItem;
