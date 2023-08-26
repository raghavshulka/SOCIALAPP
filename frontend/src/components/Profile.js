import React from "react";
import person from "../assets/Ellipse 7.png";
import arrows from "../assets/arrows vector.png";
import star from "../assets/star icon.png";
import l9 from "../assets/Line 9 (1).png";

function Profile() {
  return (
    <div className=" element  md:w-[428px] ">
      <div className="  flex flex-col items-center pt-[115px]">
        <div className="  w-[100px] h-[100px] ">
          <img src={person} />
        </div>
        <p className=" font-semibold text-w-[64px] text-[29px]">Himanshu</p>
        <p className=" text-[24px] text-w-[138px]">9711948121</p>
        <div className=" ">
          <p className="  text-w-[270px] text-[24px]">
            Hey there ! I am using Whats app .
          </p>
        </div>
      </div>
      <div className="  setting  md:ml-[35px] flex-row mt-[30px] "> 
        <div className=" flex p-3">
          <button className=" text-w-[125px] text-[24px] flex items-center ">
            <img className="w-[25px] h-[23px]" src={star} /> 
            <p> Starred Messages</p>
          </button>
        </div>
        <img src={l9} />
        <div className=" ">
          <button className=" p-3 flex items-center text-[24px] ">
            <img className="w-[28px] h-[20px]" src={arrows} />
            <p> Calling</p>
          </button>
        </div>
      </div>


      <div className=" s2 md:ml-[35px] flex-row mt-[30px] "> 
        <div className=" flex p-3">
          <button className=" text-w-[125px] text-[24px] flex items-center ">
            <img className="w-[25px] h-[23px]" src={star} /> 
            <p> Starred Messages</p>
          </button>
        </div>
        <img src={l9} />
        <div className=" ">
          <button className=" p-3 flex items-center text-[24px] ">
            <img className="w-[28px] h-[20px]" src={arrows} />
            <p> Account</p>
          </button>
        </div>
        <img src={l9} />
        <button className=" p-3 flex items-center text-[24px] ">
            <img className="w-[28px] h-[20px]" src={arrows} />
            <p> Notiffications</p>
          </button>
          <img src={l9} />
        <button className=" p-3 flex items-center text-[24px] ">
            <img className="w-[28px] h-[20px]" src={arrows} />
            <p> Storage and Data</p>
          </button>
      </div>
      


    </div>
  );
}

export default Profile;
