import React from "react";

type Props = {};

const Promo = (props: Props) => {
  return (
    <section className="w-screen bg-primary2">
      <div>
        <img
          className="w-screen h-[700px] object-cover mix-blend-darken"
          src="https://d3h9ln6psucegz.cloudfront.net/wp-content/uploads/2017/11/6-Reasons-You-Should-Never-Open-a-Gym.jpg"
          alt="gym-photo"
        />
      </div>
    </section>
  );
};

export default Promo;
