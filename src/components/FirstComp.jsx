import { useRef } from "react";
import logo from "../assets/sbimg.png";
import rating from "../assets/rating.png";
import { useEffect } from "react";
import { FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
const FirstComp = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      heroRef.current.style.setProperty("--x", `${clientX}px`);
      heroRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div
      ref={heroRef}
      class="main"
      className=" bg-black h-[100vh] w-full flex  items-center flex-col  bg-radial-gradient"
    >
      <div className=" w-fit flex flex-col justify-center items-center">
        <div className=" flex items-center mt-16 w-fit">
          <img width="60px" src={logo} alt="" />
          <h1 className=" text-white font-bold text-3xl">
            SAFE <span className=" font-thin">BUTLER</span>
          </h1>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 1 }}
          whileInView={{ opacity: 1, y: 12 }}
          transition={{ delay: 0.5 }}
          className=" flex-wrap flex w-[700px] mt-10 text-5xl text-white font-font-heading leading-[70px] text-center"
        >
          Your chief servant for shopping insurance
        </motion.p>
        <div></div>
        <p className=" mt-20 mb-3 text-[#dcff50] font-font-heading">
          Compare insurance brands in minutes without long forms
        </p>

        <div className=" flex gap-7 w-fit">
          <div>
            <select className=" focus:outline-none gap-2 items-center px-4 bg-gray-900  text-gray-400 rounded  py-3 w-80  border border-gray-600 text-lg flex">
              <option className=" bg-gray-950">Select Insurance type...</option>
              <option className=" bg-gray-950">Select Insurance type...</option>
              <option className=" bg-gray-950">Select Insurance type...</option>
              <option className=" bg-gray-950">Select Insurance type...</option>
              <option className=" bg-gray-950">Select Insurance type...</option>
            </select>
          </div>
          <div className=" gap-2 items-center px-4 bg-gray-900   rounded p-2   border text-gray-300 border-gray-600 flex">
            <FiMapPin />
            <input
              className=" bg-inherit w-28 focus:outline-none "
              type="placeholder "
              placeholder="ZIP CODE"
            />
          </div>
        </div>
        <button className=" mt-5 ml-24 self-start  justify-center bg-blue-600 text-white text-lg font-semibold px-14  py-3 rounded-3xl">
          Get started{" "}
          <span className=" self-start font-thin text-sm">
            ( it's 100% free )
          </span>
        </button>
        <div className=" ml-24 mt-4 self-start flex gap-2 items-center text-white w-fit">
          <div className=" font-bold text-4xl">4.8</div>
          <div>
            <div>
              <img src={rating} alt="" />
            </div>
            <div>Google Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstComp;
