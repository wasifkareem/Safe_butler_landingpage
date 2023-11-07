import Lenis from "@studio-freight/lenis";
import FirstComp from "./components/FirstComp";
import SecComp from "./components/SecComp";
import { useEffect } from "react";
import ThirdComp from "./components/ThirdComp";
import FourthComp from "./components/FourthComp";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <FirstComp />
      <SecComp />
      <ThirdComp />
      <FourthComp />
    </div>
  );
}
