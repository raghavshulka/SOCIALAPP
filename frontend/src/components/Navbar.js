import React from "react";
import "../Custom.css";
import {
  FaAlignJustify,
  FaSearch,
  FaCircleNotch,
  FaCommentAlt,
  FaViber,
  FaVideo,
  FaUserAlt,
} from "react-icons/fa";
import story from "../assets/Ellipse 7 (1).png";
import people from '../assets/Ellipse 7.png';
import l8 from "../assets/Line 8.png";
import l7 from "../assets/Line 7.png";
import { Link } from "react-router-dom";
import Sidechat from "./Sidechat";


function Navbar() {
  return (
    <div className=" md:w-[603px]   overflow-y-auto  overflow-x-hidden  ">
      <div className="  sticky top-0 element w-full m-0 p-0 h-[230px] md:w-[603px] md:h-[137px]  ">
        <div className="  text-[#5E5E5E] pt-[51px] flex gap-[130px]  md:gap-[200px]  ">
          <div>
            <button className=" ml-[24px] md:ml-[45px] md:text-lg">
              <FaAlignJustify />
            </button>
          </div>
          <p className="  font2 md:hidden-pw "> <Link to='/'>SocialBird</Link> <br></br>
 </p>
          <div>
            <button className=" md:text-lg text-[#5E5E5E] pr-[38px] w-[21px] h-[21px]">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-[20px] pt-[38px]  ">
          <button className=" w-[70px] h-[70px] md:hidden  ">
            {" "}
            <img src={story} /> <p>add</p>{" "}
          </button>
          <button className=" w-[77px] h-[77px] md:hidden ">
            <img src={people} />
            <p>shukla</p>
          </button>
          <button className=" w-[77px] h-[77px] md:hidden ">
            <img src={people} />
            <p>shukla</p>
          </button>
          <button className=" w-[77px] h-[77px] md:hidden ">
            <img src={people} />
            <p>shukla</p>
          </button>
        </div>
      </div>
        
      {/* from here option part began */}
      <div className="  flex gap-[154px] justify-center md:gap-[300px] md:text-lg">
        <div className=" flex md:hidden-font pt-[12px]   ">chats</div>

        <div className=" flex  pt-[12px]  ">Groups'</div>
      </div>

      

      <div className="  flex mt-[12px]">
        <img className=" w-[232px] md:w-[297px]" src={l7} />
        <img className=" w-[232px] md:w-[297px] " src={l8} />
      </div>
       
       {/* chat people */} 
      
      <Link to='/chatbox'><Sidechat/></Link>
      <Link to='/chatbox'><Sidechat/></Link>
      <Link to='/chatbox'><Sidechat/></Link>
      <Link to='/chatbox'><Sidechat/></Link>
      <Link to='/chatbox'><Sidechat/></Link>
      <Link to='/chatbox'><Sidechat/></Link>
      <Link to='/chatbox'><Sidechat/></Link>
      <Link to='/chatbox'><Sidechat/></Link>
      
    </div>
  );
}
export default Navbar;
