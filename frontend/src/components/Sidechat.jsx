import React from 'react'
import l9 from "../assets/Line 9 (1).png";
import "../Custom.css";
import people from '../assets/Ellipse 7.png'
import story from "../assets/Ellipse 7 (1).png";

function Sidechat() {
  return (
    <div>
        <div className=" flex  ">
        <div className=" flex  pt-[28px] pl-[33px] md:pt-[48px] md:pl-[34px]  ">
          <img className=" w-[59px] h-[59px]    md:w-[83px] md:h-[83px]" src={people} />
        </div>
        <div className=" flex">
          <div>
            <p className=" flex mtx  pl-[14px] pt-[39px] text-[20px]    md:pl-[30px] md:pt-[54px] md:text-[20px]">
              HIMANSHU SHUKLA
            </p>
            <p className=" flex pl-[14px]     md:pl-[30px]">hope you doing well</p>
          </div>
        </div>
        <div className=" mt-[42px]  ml-[110px]    md:pt-[9px] md:pl-[34px]  ">
          <p>5:00</p>
        </div>
      </div>
      <div className=" flex justify-center pt-[17px]">
        <img className=" md:mt-[14px]" src={l9} />
      </div>

    </div>
  )
}

export default Sidechat