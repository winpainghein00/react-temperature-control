import React, { useState } from "react";
import ContainerBox from "./components/ContainerBox";

const App = () => {
  const date = new Date();
  const currentDate = date.toDateString();
  const [state, setState] = useState(32);
  const [isHot,setIsHot] = useState("bg-gradient-to-b from-slate-500  to-blue-400"); 

  const addBtn = () => {
    const newState = state + 1;
    setState(newState);
    newState > 35 && setIsHot("bg-gradient-to-b from-orange-500  to-red-400");
  };
  const subBtn = () => {
    const newState = state - 1;
    state > 0 && setState(newState);
    newState <= 35 && setIsHot("bg-gradient-to-b from-slate-500  to-blue-400");
  };
  const resetBtn = () => {
    setState(32);
    setIsHot("bg-gradient-to-b from-slate-500  to-blue-400")
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-2xl font-semibold text-white mb-8 md:block hidden">
        React Weather Control
      </h1>
      <ContainerBox
        currentDate={currentDate}
        state={state}
        addBtn={addBtn}
        subBtn={subBtn}
        resetBtn={resetBtn}
        isHot={isHot}
      />
    </div>
  );
};

export default App;
