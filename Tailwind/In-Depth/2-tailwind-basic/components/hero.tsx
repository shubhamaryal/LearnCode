import React from "react";

export const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full my-20">
      <button className="border px-4 py-1 rounded-full border-gray-200 hover:bg-gray-200 bg-gray-100 text-black font-medium transition cursor-pointer duration-200">
        What are early stage tax requirements?
      </button>

      <div>
        <h1 className="font-medium mt-10 text-7xl text-black tracking-tighter text-center">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="max-w-2xl text-neutral-600 text-lg text-center mt-4 mx-auto ">
          Automated bookkeeping. Effortless tax filing. Financial clarity.{" "}
          <br /> Set up in 10 mins. Back to building by 2:54pm.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-10">
        <button className="cursor-pointer bg-[#2579F4] px-4 py-2 text-white font-bold rounded-lg shadow-lg text-shadow-md tracking-wide">
          Get started
        </button>
        <button className="cursor-pointer px-4 py-2 text-black font-bold tracking-wide">
          Pricing &rarr;
        </button>
      </div>
    </div>
  );
};
