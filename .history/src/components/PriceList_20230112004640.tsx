import React from "react";

type Props = {};

const PriceList = (props: Props) => {
  return (
    <div className="bg-primary2 flex flex-col items-center justify-center py-16">
      <h1 className="uppercase text-7xl font-raleway text-white">cennik</h1>
      <div className="mt-20text-white text-xl">
        <label htmlFor="pricetag">Lorem1</label>
        <span>10</span>
      </div>
    </div>
  );
};

export default PriceList;
