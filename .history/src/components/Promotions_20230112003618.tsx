import React from "react";

type Props = {};

const Promotions = (props: Props) => {
  return (
    <div className="bg-secondary2 flex-col flex justify-center items-center py-8 font-poppins">
      <h1 className="text-7xl text-black">PROMOCJE</h1>
      <div className="border-8 p-10 border-black rounded-2xl shadow-2xl shadow-black">
        <h2>Lorem, ipsum.</h2>
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          possimus.
        </p>
      </div>
    </div>
  );
};

export default Promotions;
