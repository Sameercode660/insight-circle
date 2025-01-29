import React from "react";

const SectionHeading = ({ title }: {title: string}) => {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}
      </h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mt-2 rounded"></div>
    </div>
  );
};

export default SectionHeading;
