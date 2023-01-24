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
    if (selected === 0) setSelected(1);
    else setSelected(0);
  };

  const nextImg = () => {
    if (selected === 1) setSelected(0);
    else setSelected(1);
  };

  return (
    <section
      className="w-screen flex
     bg-primary2 relative h-[700px] mix-blend-normal">
      <m.div
        className={`${
          selected === 0 ? "translate-x-[0vw]" : "translate-x-[100vw]"
        } w-screen absolute mix-blend-multiply`}>
        <div className="mix-blend-multiply">
          <img
            className="w-screen h-[700px] object-cover mix-blend-multiply"
            src="https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/11/6-Reasons-You-Should-Never-Open-a-Gym.jpg"
            alt="gym-photo"
          />
        </div>

        <div className="absolute mix-blend-normal flex flex-col items-start gap-1 text-white left-[25%] top-[30%] font-raleway">
          <h1 className="text-7xl">Promocje!</h1>
          <p className="text-3xl">Zapoznaj się z naszymi promocjami!</p>
          <button className="px-6 mt-5 mix-blend-lighten hover:opacity-75 transition-all duration-350 bg-transparent text-xl ml-[25%] py-4 border-[2px] border-white rounded-lg">
            Przekierowanie
          </button>
        </div>
      </m.div>

      <m.div
        className={`w-screen ${
          selected === 1 ? "translate-x-[0vw]" : "translate-x-[100vw]"
        } absolute transition-all`}>
        <div className="">
          <img
            className="w-screen h-[700px] object-cover object-top mix-blend-multiply"
            src="https://storage.googleapis.com/afs-prod/media/7d75115786c8479bb615563cd3b7e359/3000.jpeg"
            alt="gym-photo"
          />
        </div>

        <div className="absolute flex flex-col items-start gap-1 text-white left-[25%] top-[30%] font-raleway">
          <h1 className="text-7xl">Promocje!</h1>
          <p className="text-3xl">Zapoznaj się z naszymi promocjami!</p>
          <button className="px-6 mt-5 mix-blend-lighten hover:opacity-75 transition-all duration-350 bg-transparent text-xl ml-[25%] py-4 border-[2px] border-white rounded-lg">
            Przekierowanie
          </button>
        </div>
      </m.div>

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
