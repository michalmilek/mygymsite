import { createRef, useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion as m, AnimatePresence } from "framer-motion";

type selectState = {
  selected: number;
  setSelected: (value: number) => void;
};

type Props = {};

const Promo = (props: Props) => {
  const [selected, setSelected] = useState(0);

  const prevImg = () => {
    if (selected === 0) setSelected(2);
    else setSelected((prev) => prev - 1);
  };

  const nextImg = () => {
    if (selected === 2) setSelected(0);
    else setSelected((prev) => prev + 1);
  };

  return (
    <section
      className="w-screen flex
     bg-primary2 relative h-[700px]">
      <div
        className={`w-screen ${
          selected === 0 ? "translate-x-[0vw]" : "translate-x-[-100vw]"
        } absolute transition-all duration-500`}>
        <div className="mix-blend-multiply z-30 bg-primary2">
          <img
            className="w-screen h-[700px] object-cover object-top mix-blend-multiply"
            src="https://storage.googleapis.com/afs-prod/media/7d75115786c8479bb615563cd3b7e359/3000.jpeg"
            alt="gym-photo"
          />
        </div>

        <div className="absolute flex flex-col items-start gap-1 mix-blend-normal opacity-1 text-white left-[25%] top-[30%] font-raleway">
          <h1 className="text-7xl">Lorem Ipsum 4!</h1>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quasi?
          </p>
          <button className="px-6 mt-5 mix-blend-lighten hover:opacity-75 transition-all duration-350 bg-transparent text-xl ml-[25%] py-4 border-[2px] border-white rounded-lg">
            Przekierowanie
          </button>
        </div>
      </div>

      <div
        className={`w-screen ${
          selected === 1 ? "translate-x-[0vw]" : "translate-x-[100vw]"
        } absolute transition-all duration-500`}>
        <div className="mix-blend-multiply z-30 bg-primary2">
          <img
            className="w-screen h-[700px] object-cover object-top mix-blend-multiply"
            src="https://storage.googleapis.com/afs-prod/media/7d75115786c8479bb615563cd3b7e359/3000.jpeg"
            alt="gym-photo"
          />
        </div>

        <div className="absolute flex flex-col items-start gap-1 mix-blend-normal opacity-1 text-white left-[25%] top-[30%] font-raleway">
          <h1 className="text-7xl">Lorem Ipsum!</h1>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quasi?
          </p>
          <button className="px-6 mt-5 mix-blend-lighten hover:opacity-75 transition-all duration-350 bg-transparent text-xl ml-[25%] py-4 border-[2px] border-white rounded-lg">
            Przekierowanie
          </button>
        </div>
      </div>

      <div
        className={`w-screen ${
          selected === 2 ? "translate-x-[0vw]" : "translate-x-[-100vw]"
        } absolute transition-all duration-500`}>
        <div className="mix-blend-multiply z-30 bg-primary2">
          <img
            className="w-screen h-[700px] object-cover object-top mix-blend-multiply"
            src="https://storage.googleapis.com/afs-prod/media/7d75115786c8479bb615563cd3b7e359/3000.jpeg"
            alt="gym-photo"
          />
        </div>

        <div className="absolute flex flex-col items-start gap-1 mix-blend-normal opacity-1 text-white left-[25%] top-[30%] font-raleway">
          <h1 className="text-7xl">Lorem Ipsum 4!</h1>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quasi?
          </p>
          <button className="px-6 mt-5 mix-blend-lighten hover:opacity-75 transition-all duration-350 bg-transparent text-xl ml-[25%] py-4 border-[2px] border-white rounded-lg">
            Przekierowanie
          </button>
        </div>
      </div>

      <div
        className={`w-screen ${
          selected === 2 ? "translate-x-[0vw]" : "translate-x-[100vw]"
        } absolute transition-all duration-500`}>
        <div className="mix-blend-multiply z-30 bg-primary2">
          <img
            className="w-screen h-[700px] object-cover object-top mix-blend-multiply"
            src="https://storage.googleapis.com/afs-prod/media/7d75115786c8479bb615563cd3b7e359/3000.jpeg"
            alt="gym-photo"
          />
        </div>

        <div className="absolute flex flex-col items-start gap-1 mix-blend-normal opacity-1 text-white left-[25%] top-[30%] font-raleway">
          <h1 className="text-7xl">Lorem Ipsum 4!</h1>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quasi?
          </p>
          <button className="px-6 mt-5 mix-blend-lighten hover:opacity-75 transition-all duration-350 bg-transparent text-xl ml-[25%] py-4 border-[2px] border-white rounded-lg">
            Przekierowanie
          </button>
        </div>
      </div>

      <button
        className="absolute top-[50%] translate-y-[-50%] left-[5%] cursor-pointer"
        onClick={() => prevImg()}>
        <ArrowLeftIcon className="text-white opacity-30 font-bold opacity-1 mix-blend-darken h-[200px] w-[200px]" />
      </button>

      <button
        className="absolute top-[50%] translate-y-[-50%] right-[5%] cursor-pointer"
        onClick={() => nextImg()}>
        <ArrowRightIcon className="text-white opacity-30 font-bold opacity-1 mix-blend-darken h-[200px] w-[200px]" />
      </button>
    </section>
  );
};

export default Promo;
