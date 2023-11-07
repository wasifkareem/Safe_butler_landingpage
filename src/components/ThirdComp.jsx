import React from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { SlMustache } from "react-icons/sl";
const ThirdComp = () => {
  return (
    <div className=" bg-stone-950 relative h-[220vh] ">
      <h1 className=" text-white font-bold text-5xl py-5 pt-20 pl-20">
        Everybody Loves Us
      </h1>
      <hr className=" border border-pink-600 mx-20 w-1/4" />
      <span className=" w-[1px] absolute top-62 left-[50%] bg-gray-500 min-h-[170vh]">
        <SlMustache className=" absolute top-[11%] left-[-22px]  text-xl rounded-3xl bg-gray-600 w-11 h-11 p-2 text-white" />
        <SlMustache className=" absolute top-[43%] left-[-22px]  text-xl rounded-3xl bg-gray-600 w-11 h-11 p-2 text-white" />
        <SlMustache className=" absolute top-[75%] left-[-22px]  text-xl rounded-3xl bg-gray-600 w-11 h-11 p-2 text-white" />
      </span>
      <div className=" absolute  h-[60vh] top-[40%] left-10 flex flex-col gap-4 w-[40%] text-white border border-gray-600 rounded-xl p-10 bg-[url('https://assets-global.website-files.com/63717dfd25366f06c3ed64cc/63717dfd25366f6797ed65c2_inner-section-dark-bg-blur-codely-webflow-ecommerce-template.png')] bg-cover ">
        <VscTriangleRight className=" absolute right-[-55px] text-[80px] text-gray-500" />
        <div className=" flex items-center gap-3">
          <img
            className=" h-16 rounded-full"
            src="https://static.safebutler.com/common/images/testimonials/matt.jpeg"
            alt=""
          />
          <div>
            <p className=" font-bold text-lg font-mono">Matt</p>
            <p className=" font-mono">VicePrecident,VC</p>
          </div>
        </div>
        <hr className=" w-56 border border-slate-800  mt-12 mb-3" />

        <p className=" text-xl font-font-heading">
          "Five stars for this fantastic shopping experience and ease of use!"
        </p>
      </div>{" "}
      <div className=" absolute right-10 top-52 flex flex-col gap-4 w-[40%] text-white border border-gray-600 rounded-xl p-10 bg-[url('https://assets-global.website-files.com/63717dfd25366f06c3ed64cc/63717dfd25366f6797ed65c2_inner-section-dark-bg-blur-codely-webflow-ecommerce-template.png')] bg-cover h-[60vh] ">
        <VscTriangleLeft className=" absolute left-[-55px] text-[80px] text-gray-500" />
        <div className=" flex items-center gap-5 ">
          <img
            className=" h-16 rounded-full"
            src="https://static.safebutler.com/common/images/testimonials/carl200200.jpg"
            alt=""
          />
          <div>
            <p className=" font-bold text-lg font-mono">Carl</p>
            <p className=" font-mono w-48">Business Ops Manager, Facebook</p>
          </div>
        </div>
        <hr className=" w-56 border border-slate-800  mt-12 mb-3" />

        <p className=" text-xl font-font-heading">
          "Wow, great job! I have been complaining about switching my insurance
          for months and verbally stated I wished a company as yours existed."
        </p>
      </div>{" "}
      <div className="absolute right-10 top-[64%] flex flex-col gap-4 w-[40%] text-white border border-gray-600 rounded-xl p-10 bg-[url('https://assets-global.website-files.com/63717dfd25366f06c3ed64cc/63717dfd25366f6797ed65c2_inner-section-dark-bg-blur-codely-webflow-ecommerce-template.png')] bg-cover h-[60vh] ">
        <VscTriangleLeft className=" absolute left-[-55px] text-[80px] text-gray-500" />
        <div className=" flex items-center gap-3">
          <img
            className=" h-16 rounded-full"
            src="https://static.safebutler.com/common/images/testimonials/tim200200.jpg"
            alt=""
          />
          <div>
            <p className=" font-bold text-lg font-mono">Tim</p>
            <p className=" font-mono">Senior Engineer,Qualcomm</p>
          </div>
        </div>
        <hr className=" w-56 border border-slate-800  mt-12 mb-3" />

        <p className=" text-xl font-font-heading">
          "No lie guys. SafeButler just saved me $2k/year on insurance. From
          $3,400/year to $1,400/year. They got me better coverage for way less
          $$$."
        </p>
      </div>
    </div>
  );
};

export default ThirdComp;
