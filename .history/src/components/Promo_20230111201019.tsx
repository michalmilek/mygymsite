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

      <div className="absolute left-[25%] top-[30%] font-raleway">
        <h1 className="text-5xl text-white">Promocje!</h1>
        <p className="text-white text-xl">Zapoznaj się z naszymi promocjami!</p>
      </div>
    </section>
  );
};

export default Promo;
