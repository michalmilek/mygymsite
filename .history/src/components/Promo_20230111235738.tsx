import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion as m, AnimatePresence } from "framer-motion";

type selectState = {
  selected: number;
  setSelected: (value: number) => void;
};

type Props = {};

const Promo = (props: Props) => {
  const [selected, setSelected] = useState(0);
  const [timeoutStop, setTimeoutStop] = useState(false);

  const prevImg = () => {
    if (selected === 0) setSelected(3);
    else setSelected((prev) => prev - 1);
  };

  const nextImg = () => {
    if (selected === 3) setSelected(0);
    else setSelected((prev) => prev + 1);
  };

  useEffect(() => {
    if (timeoutStop === false) {
      const timeout = setTimeout(() => nextImg(), 3000);

      return () => clearTimeout(timeout);
    }
  }, [selected]);

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
            src="data:image/jpeg;base64,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"
            alt="gym-photo"
          />
        </div>

        <div
          className={`${
            selected === 3
              ? "translate-x-[0vw] opacity-1"
              : "translate-x-[-35vw] opacity-0"
          } transition-all duration-200 absolute flex flex-col items-start gap-1 mix-blend-normal opacity-1 text-white left-[25%] top-[30%] font-raleway`}>
          <h1 className="text-7xl">Oferta!</h1>
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
            src="https://i0.wp.com/thebodylockmma.com/wp-content/uploads/2018/01/Diaz-brothers.jpg"
            alt="gym-photo"
          />
        </div>

        <div
          className={` ${
            selected === 1
              ? "translate-x-[0vw] opacity-1"
              : "translate-x-[-35vw] opacity-0"
          } transition-all duration-200 absolute flex flex-col items-start gap-1 mix-blend-normal opacity-1 text-white left-[25%] top-[30%] font-raleway`}>
          <h1 className="text-7xl">Promocje!</h1>
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

        <div
          className={`${
            selected === 2
              ? "translate-x-[0vw] opacity-1"
              : "translate-x-[-35vw] opacity-0"
          } transition-all duration-200 absolute flex flex-col items-start gap-1 mix-blend-normal opacity-1 text-white left-[25%] top-[30%] font-raleway`}>
          <h1 className="text-7xl">Cennik!</h1>
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
          selected === 3 ? "translate-x-[0vw]" : "translate-x-[100vw]"
        } absolute transition-all duration-500`}>
        <div className="mix-blend-multiply z-30 bg-primary2">
          <img
            className="w-screen h-[700px] object-cover object-top mix-blend-multiply"
            src="https://www.footballaustralia.com.au/sites/ffa/files/2020-08/Warm%20Up.jpg"
            alt="gym-photo"
          />
        </div>

        <div
          className={`${
            selected === 3
              ? "translate-x-[0vw] opacity-1"
              : "translate-x-[-35vw] opacity-0"
          } transition-all duration-200 absolute flex flex-col items-start gap-1 mix-blend-normal opacity-1 text-white left-[25%] top-[30%] font-raleway`}>
          <h1 className="text-7xl">Kontakt!</h1>
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
        onClick={() => {
          prevImg();
          setTimeoutStop(true);
        }}>
        <ArrowLeftIcon className="text-white opacity-30 font-bold opacity-1 mix-blend-darken h-[200px] w-[200px]" />
      </button>

      <button
        className="absolute top-[50%] translate-y-[-50%] right-[5%] cursor-pointer"
        onClick={() => {
          nextImg();
          setTimeoutStop(true);
        }}>
        <ArrowRightIcon className="text-white opacity-30 font-bold opacity-1 mix-blend-darken h-[200px] w-[200px]" />
      </button>
    </section>
  );
};

export default Promo;
