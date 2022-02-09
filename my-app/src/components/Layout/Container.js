import React from "react";

const Container = (props) => {
  return <section id={props.id} className={`px-8 sm:px-8 md:px-12 lg:px-12 xl:px-48 ${props.className}`}>{props.children}</section>;
};

export default Container;
