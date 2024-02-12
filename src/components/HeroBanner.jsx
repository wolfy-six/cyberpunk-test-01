import React from "react";
import { HeroBg } from "../assets";
import Navbar from "./Navbar";

const HeroBanner = () => {
  return (
    <section className=" flex flex-col md:flex-row ">
      <div className=" w-full  flex flex-col items-center">
        <Navbar />

        <div className="relative flex h-full flex-col justify-center item-start">
          <div className="-ml-8 top-0 left-0 absolute -z-40 w-[30%] h-[30%] rounded-full yello__gradient" />

          <span className="flex gap-6 uppercase text-7xl font-bold">
            <h1 className="md:text-[150px] text-[30px] ">make</h1>
            <h1 className="md:text-[150px] text-[30px] text-[#fab802]">your</h1>
          </span>
          <span className="flex gap-6 uppercase text-7xl font-bold">
            <h1 className="md:text-[150px] text-[30px] ">future</h1>
            <h1 className="md:text-[150px] text-[30px] ">now</h1>
          </span>

          <div
            className="flex gap-5 justify-start
            py-6
          "
          >
            <p className="md:w-[450px] h-[70px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
              odio? Rem illo.
            </p>

            <p className="md:h-[70px] flex justify-center items-center  md:text-3xl font-bold px-4 bg-gradient-to-r rounded-3xl  from-purple-600  to-black ">
              LET'S GOOO!
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-1/2   bg-[#fab802] flex justify-end h-auto items-end">
        test
      </div>
      <img
        loading="lazy"
        src={HeroBg}
        alt=""
        className="w-[800px] aspect-auto  absolute z-50 right-0 bottom-0"
      />
    </section>
  );
};

export default HeroBanner;
