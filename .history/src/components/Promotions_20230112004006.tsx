import React from "react";

type Props = {};

const Promotions = (props: Props) => {
  return (
    <div className="bg-secondary2 flex-col flex justify-center items-center py-8 font-poppins">
      <h1 className="text-7xl text-black">PROMOCJE</h1>
      <div className="border-8 p-10 w-[450px] flex flex-col items-center justify-center border-black rounded-2xl shadow-2xl shadow-black">
        <h2 className="text-3xl font-bold mb-8">Lorem, ipsum.</h2>
        <h3 className="text-2xl italic mb-6 text-justify">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
        <p className="text-lg text-justify">
          <span className="underline">Lorem ipsum dolor,</span>
          &nbsp sit amet consectetur adipisicing elit. Accusantium, possimus.
          Lorem Lorem Lorem.
        </p>
      </div>
    </div>
  );
};

export default Promotions;
