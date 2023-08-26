import React from "react";
import person from "../assets/Ellipse 7.png";
import Search from "../assets/search icon.png";
import "../Custom.css";
import option from "../assets/options vector.png";
import img from "../assets/IMG_9898 1.png";
import emoji from "../assets/emoji vector.png";
import attach from "../assets/Vector (3).png";
import voice from "../assets/Vector (4).png";
import { Link } from "react-router-dom";
import "../Custom.css";

function Chatbox1() {
  return (
    <div className=" flex flex-col h-screen  ">
      <div className="    element flex  h-[137px]  ">
        <div className=" flex">
          <Link to="/profile">
            <img className=" w-auto h-[75px]  md:w-[85px]  md:h-[85px] m-[25px]" src={person} />
          </Link>
        </div>

        <div>
          <div className=" flex mt-[31px] ml-[34px]">
            <p className=" font2  "> Himanshu </p>{" "}
          </div>
          <div className=" flex ml-[38px] ">online</div>
        </div>

        <div className=" flex  mt-[55px] ml-[500px] ">
          <img className=" w-[30px] h-[30px] " src={Search} />
          <img className=" ml-[41px] w-[8px] h-[30px]" src={option} />
        </div>
      </div>

      {/* user chats*/}
      <div className=" flex-grow overflow-y-auto w-[400px] md:w-[900px] overflow-x-hidden ">
        <div className="relative">
          <div className="  md:h-[109px] md:w-[271px] md:mt-[62px] md:ml-[81px] md:mr-[722px] rec ">
            <p className=" md:pt-[20px] md:pl-[31px] md:pr-[24px] text-white text-sm font-bold p-4">
              Hey can you help me <br></br> with my code please?
            </p>
          </div>

          <div className=" relative">
            <div className="  md:mt-[22px]  md:mr-[72px]  md:ml-[550px]  brec ">
              <p className="  pt-[24px] pl-[30px] text-white text-sm font-bold p-4 ">
                Yea sure ! Send the code for <br></br> me i’ll check it{" "}
              </p>
            </div>
          </div>
        </div>
        
       
        <div className=" relative">
          <div className="  md:ml-[89px]  md:mt-[24px]  srec ">
            <p className=" pt-[21px] pl-[19px] text-white text-sm font-bold p-4 ">
              {" "}
              Thank youuuu{" "}
            </p>
          </div>
        </div>
        <div>
          <img className=" mt-[24px]  md:ml-[83px] w-[377px] h-[379px]" src={img} />
        </div>
        
      </div>
      {/**footer of chat */}
      <div className=" relative flex items-center justify-center  md:gap-[30px]  bottom-0 border-r-[45px] backdrop-blur-[10px] gap-6 h-24 bg-slate-200   md:mt-[36px]   md:h-[150px]  md:w-[930px]  ">
        <img className=" pl-3 h-[35px] w-[37px]" src={emoji} />
        <img className=" h-[40px] w-[20px] " src={attach} />
        <input
          type="text"
          placeholder="Type a message"
          className="w-full bg-transparent focus:outline-none"
        />
        <img src={voice} />
      </div>
    </div>
  );
}

export default Chatbox1;
