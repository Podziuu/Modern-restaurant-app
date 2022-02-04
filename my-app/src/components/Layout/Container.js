import React from "react";

const Container = (props) => {
  return <section id={props.id} className={`px-8 sm:px-12 md:px-16 lg:px-28 ${props.className}`}>{props.children}</section>;
};

export default Container;
