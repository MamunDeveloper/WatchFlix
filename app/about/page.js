import React from "react";
import Herosection from "../components/herosection";


const page = async () => {

  return (
    <>
      <Herosection title={"About Us"} imageUrl={"/about.svg"} />
    </>
  );
};

export default page;
