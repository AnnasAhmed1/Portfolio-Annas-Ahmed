import React from "react";

const SkillComp = ({ title = "", percentage = "" }) => {
  return (
    <div>
      <h1 className="mb-2">
        {title}
        <span className="ml-auto">{percentage}%</span>
      </h1>
      <div className="bg-[#e9ecef] w-full h-2 rounded-lg">
        <div className={`w-[20%] bg-customPrimary h-2 rounded-l-lg`}></div>
      </div>
    </div>
  );
};

export default SkillComp;
