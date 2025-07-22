import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const destinations = [
  {
    title: "Green Safari",
    location: "Green Mountain",
    rating: 4.8,
    image: "/public/image.png",
  },
  {
    title: "Night camping",
    location: "Lightning lake",
    rating: 4.8,
    image: "/public/image1.png",
  },
  {
    title: "Mount climbing",
    location: "Green Mountain",
    rating: 4.8,
    image: "/public/image2.png",
  },
];

const bestDestinations = [
  {
    title: "Green wood forest",
    location: "Telangana",
    rating: 4.8,
    price: "₹999",
    image: "/public/image6.png",
  },
  {
    title: "Green forest Camp",
    location: "Channai",
    rating: 4.8,
    price: "₹999",
    image: "/public/image7.png",
  },
  {
    title: "Desert Festival",
    location: "Gujarat",
    rating: 4.8,
    price: "₹999",
    image: "/public/image9.png",
  },
];

function MiddlePane() {
  return (
    <div className="flex-[8] bg-white">
      <div className="bg-gray-200 p-5 mt-4 rounded-3xl mr-2 ml-2 h-full ">
        <div className="flex justify-between items-center">
          <div className="">
            <span className="text-3xl font-bold">Hello,Jemmy👋</span>
            <p className="mt-1">Welcome back and explore the world</p>
          </div>
          <div className="flex-row flex items-center gap-2 relative">
            <IoSearch className="text-2xl text-gray-400 absolute left-2 " />
            <input
              type="text"
              className="pl-10 pr-4 py-1.5 rounded-full bg-white shadow-sm focus:outline-none"
              placeholder="Search direction"
            />
            <div className="flex relative">
              <IoMdNotifications className="text-4xl rounded-full bg-white p-2 text-gray-400" />
              <span className="bg-red-600 w-[11px] h-[11px] rounded-full  absolute left-5 flex items-center justify-center text-[8px] mt-1  ">
                4
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-8 mt-10 ml-2">
          {destinations.map((item, id) => (
            <div
              key={id}
              className="rounded-2xl overflow-hidden shadow-lg relative h-80 w-60 bg-cover bg-center "
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <div className="flex items-center text-sm">
                  <IoLocationSharp className="mr-1" />
                  {item.location} &nbsp; <FaStar className="ml-4 mr-1 text-gray-400" />{" "}
                  {item.rating}
                </div>
              </div>
            </div>
          ))}
        </div>

<div className="flex gap-10">
        <div className="w-[calc(100%-35%)] bg-white rounded-xl">
            <div className="p-5">
                  <div className="flex  justify-between">
                      <h2 className="font-semibold text-lg">Best Destination 🌈
                <br/>
                <span className="text-[12px] text-gray-400">100 Destination Found</span>

                      </h2>
                      
                      <div className="flex flex-col">
                         <button className="flex items-center  gap-2  border-1 rounded-xl py-1 px-2 text-gray-400 cursor-pointer"><IoFilter />Filter</button>
                      </div>
                  </div> 
              <div className="space-y-4 mt-5">
            {bestDestinations.map((item, idx) => (
              <div key={idx} className="flex items-center bg-white p-4 rounded-xl shadow">
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded-xl mr-4 object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="text-sm text-gray-500 flex items-center">
                    <IoLocationSharp className="mr-1" /> {item.location}
                    <FaStar className="ml-4 mr-1 text-gray-400" /> {item.rating}
                  </div>
                </div>
                <p className="text-black font-bold whitespace-nowrap">{item.price}<span className="text-gray-400 text-sm">/night</span></p>
              </div>
            ))}
          </div>
          
        </div>
    </div>
    <div className="">
        <div className="bg-indigo-950 text-white p-6 rounded-2xl flex flex-col items-center justify-between h-full w-[110%]">
          
          <div className="flex relative">
            <img src="/public/Rectangle13.png" alt="dce" className="w-30 mt-20" />
          <img
            src="/public/view-3d-videographer-with-camera 1.png"
            alt="explorer"
            className="h-40 object-contain absolute"
          />
          </div>
          <h3 className="font-bold  mt-4 text-center text-3xl">Let's Explore<br/><span>the beauty</span> </h3>
          <p className="text-sm text-center mb-4">Get special offers & news</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">Join now</button>
        </div>
    </div>
        </div>    
        </div>
      </div>
    
  );
}

export default MiddlePane;
