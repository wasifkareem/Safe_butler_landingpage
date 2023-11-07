import sbimg from "../assets/sbimg.png";
import matrix from "../assets/maatrix.svg";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { SlMustache } from "react-icons/sl";
import { GiSandsOfTime, GiPiggyBank } from "react-icons/gi";
import { motion } from "framer-motion";

const SecComp = () => {
  return (
    <div className=" bg-slate-950 flex justify-center h-[120vh] relative">
      <div className=" w-fit flex items-center flex-col pt-20">
        <img width="100px" src={sbimg} alt="" />
        <h1 className=" text-5xl font-semibold text-white">Why Safe Butler?</h1>
        <div className=" flex  mt-20  gap-6 mx-28 ">
          <div className=" text-white  hover:border-pink-400 border border-slate-950 p-5 rounded-lg  ">
            <BsFillChatLeftTextFill className=" text-[#dcff50] text-6xl bg-[#dcff505e] p-4 rounded-full " />
            <p className=" font-bold text-lg mt-6 mb-3">Clear Comminucation</p>
            <p>
              I ask you enough questions to understand your situation — and no
              more.
            </p>
          </div>{" "}
          <div className=" text-white  hover:border-pink-400 border border-slate-950 p-5 rounded-lg ">
            <GiSandsOfTime className=" text-[#dcff50] text-6xl bg-[#dcff505e] p-4 rounded-full " />
            <p className=" font-bold text-lg mt-6 mb-3">Curated Companies</p>
            <p>
              {" "}
              I negotiate with insurance companies on the spot to get you the
              best
            </p>
            prices.
          </div>{" "}
          <div className=" text-white  hover:border-pink-400 border border-slate-950 p-5 rounded-lg z-20 ">
            <GiPiggyBank className="  text-[#dcff50] text-6xl bg-[#dcff505e] p-4 rounded-full  " />
            <p className=" font-bold text-lg mt-6 mb-3">Personalised Reports</p>
            I show you instant quotes from trusted brands. Money (and time) in
            the bank!
          </div>
        </div>
        <button className=" flex items-center gap-2 bg-white rounded-3xl px-3 py-2 font-font-heading mt-24">
          Meet the Butler
          <SlMustache className=" text-xl rounded-3xl bg-pink-600 w-11 h-11 p-2 text-white" />
        </button>

        <motion.div className=" absolute bottom-0 right-0">
          <img className=" grayscale h-[98vh]" src={matrix} />
        </motion.div>
      </div>
    </div>
  );
};

export default SecComp;
