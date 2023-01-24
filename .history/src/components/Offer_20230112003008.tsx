import React from "react";

const Offer = () => {
  return (
    <div className="bg-primary2 box-border flex flex-col py-32 w-screen px-14 items-center gap-16">
      <div className="flex overflow-hidden gap-16">
        <div className=" relative overflow-hidden border-4 h-[500px] border-white w-[1000px]">
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

      <div className="flex overflow-hidden gap-16">
        <div className=" relative overflow-hidden border-4 h-[500px] border-white w-[1000px]">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            alt="powerlifting"
            className="opacity-60"
          />
          <h1 className="text-white stroke-black absolute text-7xl font-raleway top-[20%] left-[50%] translate-x-[-50%]">
            YOGA
          </h1>
        </div>

        <div className=" relative border-4 h-[500px] overflow-hidden object-fill border-white w-[1000px]">
          <img
            src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y3Jvc3NmaXR8ZW58MHx8MHx8&w=1000&q=80"
            alt="powerlifting"
            className="opacity-60 object-fill"
          />
          <h1 className="text-white stroke-black absolute text-7xl font-raleway top-[20%] left-[50%] translate-x-[-50%]">
            CROSSFIT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Offer;
