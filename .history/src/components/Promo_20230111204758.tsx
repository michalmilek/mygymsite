import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {};

const Promo = (props: Props) => {
  return (
    <section className="w-screen bg-primary2 relative">
      <div className="absolute cursor-pointer top-[50%] translate-y-[-50%] left-[5%]">
        <ArrowLeftIcon className="text-white border-[10px] font-bold opacity-1 mix-blend-plus-lighter h-[200px] w-[200px]" />
      </div>
      <ArrowRightIcon className="absolute cursor-pointer text-white border-[10px] font-bold opacity-1 mix-blend-plus-lighter top-[50%] translate-y-[-50%] right-[5%] h-[200px] w-[200px]" />
      <div>
        <img
          className="w-screen h-[700px] object-cover mix-blend-multiply"
          src="https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/11/6-Reasons-You-Should-Never-Open-a-Gym.jpg"
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
    </section>
  );
};

export default Promo;
