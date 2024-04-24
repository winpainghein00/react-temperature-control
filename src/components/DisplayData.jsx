import React from "react";

const DisplayData = (props) => {
  return (
    <div className="md:my-10 my-0 w-full flex flex-col justify-center items-center">
      <p className="text-slate-300 md:mb-10 mb-24 md:text-base text-lg">{props.currentDate}</p>
      <div className={`${props.state > 35 ? "bg-red-500":"bg-blue-400"}  w-[200px] h-[200px] rounded-full`}>
      <div className="flex justify-center translate-y-1/2">
      <h1 className="text-8xl font-semibold text-slate-300">{props.state}</h1>
      <p className="text-2xl text-slate-300">°C</p>
      </div>
      </div>
    </div>
  );
};

export default DisplayData;
