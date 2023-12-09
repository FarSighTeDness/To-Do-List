import React, { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
const Item = (props) => {
  const [Workdone, setWorkDone] = useState(false);
 
  return (
    <div
     
      className="flex items-center justify-between w-full p-3 border-b cursor-pointer select-none"
    >
      <div  onClick={() => setWorkDone(!Workdone)}>
        <span className="pr-2 text-[10px] text-slate-400">{props.time}</span>
        <span  className={`pr-2 text-[15px] ${
        Workdone === true ? "line-through" : ""
      }`}>{props.item}</span>
      
      </div>
      <div className="flex justify-between p-3">
        <button onClick={()=> props.removeHandler(props.id)} className="cursor-pointer w-[35px] text-[#e74c3c]">
          <IoTrashOutline />
        </button>
      </div>
    </div>
  );
};

export default Item;
