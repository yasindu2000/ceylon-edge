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
    <div className='flex-[3] className="w-20 md:w-64 bg-white shadow-xl flex flex-col items-center md:items-start p-4 space-y-6'>
        <h1 className="text-xl font-bold text-center md:text-left">Travelingo</h1>
           <div className="flex flex-col gap-4 text-gray-500 w-full">
                <ul  className="flex items-center gap-3 px-3 py-2 bg-green-500 text-white rounded-lg shadow w-full">
                    <IoHome className="text-lg"/>
                    <span className="hidden md:inline">Dashboard</span>
                </ul >  
                <ul  className="flex items-center gap-3 px-3 py-2 w-full">
                    <BsFillTicketPerforatedFill className="text-lg" />
                    <span className="hidden md:inline">Ticket</span>
                </ul> 
                <ul  className="flex items-center gap-3 px-3 py-2 w-full">
                    <FaStar  className="text-lg"/>
                    <span className="hidden md:inline">Favourite</span>
                </ul> 
                <ul  className="flex items-center gap-3 px-3 py-2 w-full">
                    <FaMessage className="text-lg"/>
                    <span className="hidden md:inline">Message</span>
                </ul> 
                <ul  className="flex items-center gap-3 px-3 py-2 w-full">
                    <GrTransaction className="text-lg"/>
                    <span className="hidden md:inline">Transaction</span>
                </ul> 
                <ul  className="flex items-center gap-3 px-3 py-2 w-full">
                    <RiUserSettingsFill className="text-lg"/>
                    <span className="hidden md:inline">Setting</span>
                </ul> 
                <img src={Frame8} alt="Discount" className="w-full hidden md:block" />

                 <ul  className="flex items-center gap-3 px-3 py-2 w-full">
                    <IoLogOut className="text-lg"/>
                    <span className="hidden md:inline">Log Out</span>
                </ul>
                 
           </div>
    
    </div>
  )
}

export default LeftPane