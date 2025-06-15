import React from "react";

const Btnw = ({ name }) => {
  return (
    <button className="bg-white rounded-4xl py-1 lg:py-3 px-6 lg:px-10 text-[10px] uppercase font-bold border-2 border-[#DEDEDE]">
      {name}
    </button>
  );
};

export default Btnw;
