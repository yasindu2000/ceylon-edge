import React from 'react'
import { IoHome } from "react-icons/io5";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { RiUserSettingsFill } from "react-icons/ri";
import Frame8 from '../../../public/Frame 8.png'
import { IoLogOut } from "react-icons/io5";


function LeftPane() {
  return (
    <div className='flex-[3] w-20 md:w-64 bg-white shadow-xl flex flex-col items-center md:items-start p-10 space-y-6 justify-center gap-10 '>
        <h1 className="text-3xl font-bold text-center md:text-left ml-8">Travelingo</h1>
           <div className="flex flex-col gap-5 text-gray-500 w-full items-center justify-center ">
            
                <button  className="flex items-center gap-3 px-3 py-2  border-none rounded-2xl cursor-pointer hover:bg-green-500 hover:text-white transition ">
                    <IoHome className="text-lg"/>
                    <span className="hidden md:inline">Dashboard</span>
                </button >  
                <button  className="flex items-center gap-3 px-3 py-2 mr-8 border-none rounded-2xl cursor-pointer  hover:bg-green-500 hover:text-white transition ">
                    <BsFillTicketPerforatedFill className="text-lg" />
                    <span className="hidden md:inline">Ticket</span>
                </button> 
                <button  className="flex items-center gap-3 px-3 py-2 mr-3 border-none  rounded-2xl cursor-pointer  hover:bg-green-500 hover:text-white transition ">
                    <FaStar  className="text-lg"/>
                    <span className="hidden md:inline">Favourite</span>
                </button> 
                <button  className="flex items-center gap-3 px-3 py-2 mr-3  border-none cursor-pointer rounded-2xl  hover:bg-green-500 hover:text-white transition ">
                    <FaMessage className="text-lg"/>
                    <span className="hidden md:inline">Message</span>
                </button> 
                <button  className="flex items-center gap-3 px-3 py-2 mr-[-4] border-none cursor-pointer rounded-2xl  hover:bg-green-500 hover:text-white transition ">
                    <GrTransaction className="text-lg"/>
                    <span className="hidden md:inline">Transaction</span>
                </button> 
                <button  className="flex items-center gap-3 px-3 py-2 mr-7  border-none cursor-pointer rounded-2xl  hover:bg-green-500 hover:text-white transition ">
                    <RiUserSettingsFill className="text-lg"/>
                    <span className="hidden md:inline">Setting</span>
                </button> 
                
                <div className="">
                      <img src={Frame8} alt="Discount" className="w-full hidden md:block ml-[-5] pr-20" />

                </div>
                

                 <button  className="flex items-center gap-3 px-3 py-2 mr-6 border-none cursor-pointer rounded-2xl  hover:bg-green-500 hover:text-white transition ">
                    <IoLogOut className="text-lg"/>
                    <span className="hidden md:inline">Log Out</span>
                </button>
                 
           </div>
    
    </div>
  )
}

export default LeftPane