import React from "react";

const ResumeCard = ({
  time = "",
  title = "",
  institute = "",
  details = "",
}) => {
  return (
    <div className="p-4 w-full flex flex-col justify-center rounded-lg border border-[#dee2e6]">
      <p className="bg-customPrimary px-2 py-[2px] text-sm rounded-md text-customLight w-fit ">
        {time}
      </p>
      <h1 className="text-xl mb-1 font-[600]">{title}</h1>
      <p className="text-[#dc3545]">{institute}</p>
      <p className="m-0">{details}</p>
    </div>
  );
};

export default ResumeCard;
