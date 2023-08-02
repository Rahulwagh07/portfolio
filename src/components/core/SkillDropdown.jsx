import React from "react";

export const SkillDropdown = ({ name, logo }) => {
  return (
    <div className="flex flex-col gap-y-6 mb-2 mt-1">
      <div className="flex items-center justify-between">
        <div className="w-6 h-6 mr-2">{logo}</div>
        <p className="font-semibold">{name}</p>
      </div>
      <div className="bg-[#1d4ed8] w-full h-1.5 rounded-md"></div>
    </div>
  );
};