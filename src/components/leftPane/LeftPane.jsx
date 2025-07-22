import { IoHome, IoLogOut } from "react-icons/io5";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { RiUserSettingsFill } from "react-icons/ri";
import Frame8 from "../../../public/Frame 8.png";

function LeftPane() {
  return (
    <div className="flex-[2] w-20 md:w-64 bg-white shadow-xl flex flex-col items-center md:items-start py-10 px-3 md:px-10 gap-6 md:gap-10">
      
      
      <h1 className="text-xl md:text-3xl font-bold text-center md:text-left hidden md:block">
        Travelingo
      </h1>

      
      <div className="flex flex-col gap-3 md:gap-5 text-gray-500 w-full items-center md:items-start ml-5">
        
        
        <button className="flex items-center gap-3 px-3 py-2 w-[60%] rounded-2xl hover:bg-green-500 hover:text-white transition hover:shadow-md">
          <IoHome className="text-xl" />
          <span className="hidden md:inline">Dashboard</span>
        </button>

        
        <button className="flex items-center gap-3 px-3 py-2 w-[60%] rounded-2xl hover:bg-green-500 hover:text-white transition hover:shadow-md">
          <BsFillTicketPerforatedFill className="text-xl" />
          <span className="hidden md:inline">Ticket</span>
        </button>

        
        <button className="flex items-center gap-3 px-3 py-2 w-[60%] rounded-2xl hover:bg-green-500 hover:text-white transition hover:shadow-md">
          <FaStar className="text-xl" />
          <span className="hidden md:inline">Favourite</span>
        </button>

        
        <button className="flex items-center gap-3 px-3 py-2 w-[60%] rounded-2xl hover:bg-green-500 hover:text-white transition hover:shadow-md">
          <FaMessage className="text-xl" />
          <span className="hidden md:inline">Message</span>
        </button>

        
        <button className="flex items-center gap-3 px-3 py-2 w-[60%] rounded-2xl hover:bg-green-500 hover:text-white transition hover:shadow-md">
          <GrTransaction className="text-xl" />
          <span className="hidden md:inline">Transaction</span>
        </button>

        
        <button className="flex items-center gap-3 px-3 py-2 w-[60%] rounded-2xl hover:bg-green-500 hover:text-white transition hover:shadow-md">
          <RiUserSettingsFill className="text-xl" />
          <span className="hidden md:inline">Setting</span>
        </button>

        
        <div className="hidden md:block w-full mr-[-8]">
          <img
            src={Frame8}
            alt="Discount"
            className="w-full h-auto rounded-xl"
          />
        </div>

        
        <button className="flex items-center gap-3 px-3 py-2 w-[60%] rounded-2xl hover:bg-green-500 hover:text-white transition hover:shadow-md">
          <IoLogOut className="text-xl" />
          <span className="hidden md:inline">Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default LeftPane;
