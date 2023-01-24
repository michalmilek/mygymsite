import React from "react";

type Props = {};

const PriceList = (props: Props) => {
  return (
    <div className="bg-primary2 flex flex-col items-center justify-center py-16">
      <h1 className="uppercase text-7xl font-raleway text-white">cennik</h1>
      <ul className="mt-20 w-[800px] text-white text-xl flex justify-start gap-10">
        <li className="flex flex-col gap-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit:
          <span className="font-bold">$10</span>
        </li>
        <li className="flex gap-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit:
          <span className="font-bold">$10</span>
        </li>
        <li className="flex gap-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit:
          <span className="font-bold">$10</span>
        </li>
        <li className="flex gap-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit:
          <span className="font-bold">$10</span>
        </li>
        <li className="flex gap-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit:
          <span className="font-bold">$10</span>
        </li>
        <li className="flex gap-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit:
          <span className="font-bold">$10</span>
        </li>
        <li className="flex gap-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit:
          <span className="font-bold">$10</span>
        </li>
        <li className="flex gap-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit:
          <span className="font-bold">$10</span>
        </li>
      </ul>
    </div>
  );
};

export default PriceList;
