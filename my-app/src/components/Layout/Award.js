import React from "react";

const Award = (props) => {
  return (
    <div className="flex items-center">
      <div className="h-16 w-1/3">
        <img className="h-full" src={props.photo} />
      </div>
      <div className='w-1/2'>
        <h4 className="text-[#DCCA87] text-lg">{props.text}</h4>
        <p className="text-[#AAAAAA]">Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
    </div>
  );
};

export default Award;
