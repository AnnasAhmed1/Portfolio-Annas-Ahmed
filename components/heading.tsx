import React from "react";

const Heading = ({ text = "", subText = "", className = "" }) => {
  return (
    <div className="relative flex justify-center items-center  text-center mb-[30px]">
      <h1 className="text-9xl max-md:text-[80px] max-sm:text-[56px] text-[#dee3e4] opacity-40 font-medium">
        {subText}
      </h1>
      <p
        className={`text-customSemiDark absolute text-4xl max-md:text-3xl max-sm:text-2xl font-bold ${className}`}
      >
        {text}
      </p>
    </div>
  );
};

export default Heading;
