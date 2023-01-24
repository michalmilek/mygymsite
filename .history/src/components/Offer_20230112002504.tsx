import React from "react";

const Offer = () => {
  return (
    <div className="bg-primary2 flex flex-col py-32 w-screen px-14 items-center">
      <div className="flex gap-16">
        <div className=" relative border-4 border-white w-[1000px]">
          <img
            src="https://www.strongfitnessmag.com/wp-content/uploads/2022/04/TarunPowerlifting.jpg"
            alt="powerlifting"
            className="opacity-60"
          />
          <h1 className="text-white stroke-black absolute text-7xl font-raleway top-[20%] left-[50%] translate-x-[-50%]">
            POWERLIFTING
          </h1>
        </div>

        <div className=" relative border-4 object-fill border-white w-[1000px]">
          <img
            src="https://media.4rgos.it/i/Argos/3420-m0014-m007-m050-asym-m008-m022-boxingequipment-as206690028?maxW=768&qlt=75&fmt.jpeg.interlaced=true"
            alt="powerlifting"
            className="opacity-60"
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
