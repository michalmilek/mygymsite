import React from "react";

const Offer = () => {
  return (
    <div className="bg-primary2 box-border flex flex-col py-32 w-screen px-14 items-center">
      <div className="flex overflow-hidden gap-16">
        <div className=" relative border-4 h-[500px] border-white w-[1000px]">
          <img
            src="https://www.strongfitnessmag.com/wp-content/uploads/2022/04/TarunPowerlifting.jpg"
            alt="powerlifting"
            className="opacity-60"
          />
          <h1 className="text-white stroke-black absolute text-7xl font-raleway top-[20%] left-[50%] translate-x-[-50%]">
            POWERLIFTING
          </h1>
        </div>

        <div className=" relative border-4 h-[500px] overflow-hidden object-fill border-white w-[1000px]">
          <img
            src="https://images7.alphacoders.com/575/575675.jpg"
            alt="powerlifting"
            className="opacity-60 object-fill"
          />
          <h1 className="text-white stroke-black absolute text-7xl font-raleway top-[20%] left-[50%] translate-x-[-50%]">
            BOXING
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Offer;
