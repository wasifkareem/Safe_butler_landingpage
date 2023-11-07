import React from "react";

const FourthComp = () => {
  return (
    <div>
      <div>
        <div className=" flex justify-between rounded-t-xl p-16 bg-[#9bbc16] mx-2">
          <div className=" flex flex-col gap-3">
            <h1 className=" text-white font-bold text-4xl">
              Want Joinedapp Demo?
            </h1>
            <p className=" text-gray-100">
              Signup to our Substack for early access
            </p>
          </div>
          <div className=" flex items-center gap-3">
            <input
              className=" w-[30vw] h-12 focus:outline-none font-font-heading p-3 pl-6 rounded-lg"
              placeholder="Enter your Email"
            ></input>
            <button className=" p-2 px-6 rounded-lg  bg-inherit shadow-xl border-2 text-white font-semibold  ">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthComp;
