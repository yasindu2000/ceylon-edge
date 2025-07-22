import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const scheduleItems = [
  {
    title: "Crocked Forest",
    date: "20 may - 23 may",
    image: "/public/image3.png",
  },
  {
    title: "Fem Waterfall",
    date: "20 may - 23 may",
    image: "/public/image4.png",
  },
  {
    title: "Night Camping",
    date: "20 may - 23 may",
    image: "/public/image5.png",
  },
];


function RightPane() {
  return (
    <div className='flex-[3] '>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3 p-5">
          <img src="/public/man.png" alt="" className="transition-transform duration-300 hover:scale-110  cursor-pointer" />
          <p className="font-semibold">Jemmy Max<br/><span className='text-[14px]'>Traveler Enthuslast</span></p>
        </div>
          <div className="w-10 h-10 mr-5 items-center justify-center ">
            <IoIosArrowDown className="bg-gray-300 rounded-full text-4xl p-2"/>
          </div>
      </div>

      <div className="mt-6 p-3 w-75 ml-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">May <span className="text-gray-500">2025</span></h3>
            <div className="flex gap-2">
              <button className="p-1 border-1 rounded-full text-gray-500 cursor-pointer"><FaArrowLeft className="p-2 text-3xl"/></button>
              <button className="p-1 border-1 rounded-full text-gray-500 cursor-pointer"><FaArrowRight className="p-2 text-3xl"/></button>
            </div>
          </div>
          <div className="grid grid-cols-7 text-center text-sm text-gray-600 mb-1">
            {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d, i) => <div key={i}>{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const isSelected = [21,24].includes(day);
              const isSelectedMiddle = [22,23].includes(day);
              const isSelectedMiddleAll = [[21,22,23,24]].includes(day);
              const isToday = day === 4;
              return (
                <div
                  key={day}
                  className={`rounded-full w-8 h-8 flex items-center justify-center text-sm
                    ${isSelected ? 'bg-green-500 text-white ' : ''}
                    ${isSelectedMiddle ? 'text-green-500' : ''}
                    
                    ${isSelectedMiddleAll ? 'border-5' : ''}
                    ${isToday ? 'border border-green-500' : ''}`}
                >
                  {day <= 31 ? day : ""}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-2 flex flex-row items-center justify-between p-5">
          <span className="font-bold text-xl">My Schedule</span>
          <p className="text-3xl text-gray-400 mb-3">...</p>
        </div>

         <div className="space-y-3">
            {scheduleItems.map((item, idx) => (
              <div key={idx} className=" p-3 rounded-3xl flex items-center border-2 border-gray-300 py-5 px-4 w-[90%] ml-3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg mr-3 object-cover " />
                <div>
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.date}</p>
                  <div className="flex items-center mt-1 relative">
                    <img src="/public/unsplash_YUu9UAcOKZ4.png" className="w-5 h-5 rounded-full" alt="user1" />
                    
                    <img src="/public/unsplash_AJIqZDAUD7A.png" className="w-5 h-5 rounded-full ml-3 absolute" alt="user2" />
                    <img src="/public/unsplash_TSZo17r3m0s.png" className="w-5 h-5 rounded-full ml-6 absolute " alt="user3"/>
                    <span className="ml-7 text-xs text-green-600">+2</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        

    </div>
  )
}

export default RightPane