import React from "react";

type Props = {};

const Promo = (props: Props) => {
  return (
    <section className="w-screen bg-primary2 relative">
      <div>
        <img
          className="w-screen h-[700px] object-cover mix-blend-multiply"
          src="https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/11/6-Reasons-You-Should-Never-Open-a-Gym.jpg"
          alt="gym-photo"
        />
      </div>

      <div className="absolute flex flex-col items-start gap-2 text-white left-[25%] top-[30%] font-raleway">
        <h1 className="text-7xl">Promocje!</h1>
        <p className="text-3xl">Zapoznaj się z naszymi promocjami!</p>
        <button className="px-6 mx-auto py-4 border-[2px] border-white rounded-lg">
          Przekierowanie
        </button>
      </div>
    </section>
  );
};

export default Promo;
