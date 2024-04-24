import React from "react";
import DisplayData from "./DisplayData";
import ResetBtn from "./ResetBtn";
import AddButton from "./AddButton";
import SubButton from "./SubButton";

const ContainerBox = (props) => {
  console.log(props.isHot);
  const date = new Date();
  const currentDate = date.toDateString();

  return (
    <div className={`md:w-[350px] ${props.isHot} w-screen md:h-auto h-full  md:rounded-lg rounded-none flex flex-col items-center md:gap-3 gap-28 justify-center overflow-hidden relative md:p-0 p-28`}>
      
      <ResetBtn resetBtn={props.resetBtn}/>

      <DisplayData currentDate={props.currentDate} state={props.state}/>

      <div className="flex gap-5 md:w-full w-auto backdrop-blur-sm bg-opacity-40 bg-gray-300 md:justify-center justify-between md:px-7 md:py-7 px-5 py-5 md:rounded-se-[30px] rounded-se-full md:rounded-ss-[30px] rounded-ss-full md:rounded-es-[0px] rounded-es-full md:rounded-ee-[0px] rounded-ee-full">
       
       <AddButton addBtn={props.addBtn} state={props.state}/>
        <SubButton subBtn={props.subBtn} state={props.state}/>
        
      </div>
    </div>
  );
};

export default ContainerBox;
