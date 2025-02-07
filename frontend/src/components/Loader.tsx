import React, { useState } from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;