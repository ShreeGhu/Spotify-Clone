import { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import {
  IoIosNotificationsOutline,
  IoIosPlay,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

import image1 from "../Image/1.png";
import image2 from "../Image/2.png";
import image3 from "../Image/3.png";
import image4 from "../Image/4.png";
import image5 from "../Image/5.png";
import image6 from "../Image/6.png";
import malli from "../Image/malli.png";
import YourShows from "./YourShows";
import SpotifyFooter from "./SpotifyFooter";
import SpecialFooter from "./SpecialFooter";


const date = new Date();
const currentTime = date.getHours();

let greeting;

if (currentTime >= 0 && currentTime <= 12) {
  greeting = "Good morning";
} else if (currentTime > 12 && currentTime <= 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

function MainPage() {
  const [accountVisible, setAccountVisible] = useState(false);

  const toggleButton = () => {
    setAccountVisible((prev) => !prev);
  };

  const [hoveredButton, setHoveredButton] = useState(null);
  const handleMouseEnter = (buttonIndex) => {
    setHoveredButton(buttonIndex);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const buttons = [
    { image: image1, label: "Hindi Mix" },
    { image: image2, label: "Mood" },
    { image: image3, label: "Rahat Ali Khan" },
    { image: image4, label: "Christmas Hits" },
    { image: image5, label: "Pop Mix" },
    { image: image6, label: "Walikums" },
  ];

  return (
    <div className="w-full h-full relative overflow-y-scroll">
      <div className=" w-full sticky bg-light top-0 py-4 px-6 justify-between z-30">
        <div className="flex items-center ">
          <button className="rounded-full bg-black w-8 h-8 text-white mr-3">
            <IoIosArrowBack className="text-3xl" />
          </button>
          <button className="rounded-full bg-black w-8 h-8 text-white">
            <IoIosArrowForward className=" text-3xl" />
          </button>
        </div>
        <div>
          <button className="cursor-pointer hover:scale-105 invisible lg:visible md:visible w-28 absolute top-4 right-32 p-1 flex items-center justify-center rounded-full bg-darkest text-white font-semibold text-sm">
            <BsArrowDownCircle /> &nbsp; Install App
          </button>
        </div>

        <div>
          <IoIosNotificationsOutline className="cursor-pointer invisible lg:visible md:visible hover:scale-105  flex text-3xl top-4 right-20 absolute rounded-full bg-dark text-white p-1 " />
          <div>
            <img src={malli}
              onClick={toggleButton}
              className=" cursor-pointer hover:scale-105 flex  invisible lg:visible md:visible h-8 top-4 right-10 absolute rounded-full bg-dark text-white p-1"
            />
          </div>
          {accountVisible && (
            <div className="absolute bg-light rounded top-14 w-54 right-10 shadow p-1 cursor-pointer z-20">
              <button className="flex justify-center items-center text-white opacity-80 hover:bg-lightest p-2">
                Account
                <CiShare1 className="text-lg ml-24 items-center justify-center" />
              </button>
              <div className="text-white opacity-80 ">
                <p className=" hover:bg-lightest p-2">Profile</p>
                <p className=" hover:bg-lightest p-2">Settings</p>
                <p className=" h-px bg-lightest w-full mt-1"></p>
                <p className=" hover:bg-lightest p-2">Log out</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/*  Good evening part*/}
      <div className="px-6 py-3  ">
        <div className="text-white text-4xl font-bold">{greeting}</div>

        <div className="grid grid-rows-2 grid-flow-col gap-4 mt-6 text-lg font-semibold ml-2 text-white relative z-10 ">
          <>
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`bg-light rounded-lg flex items-center  ${
                  hoveredButton === index ? "opacity-100" : "opacity-75"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={button.image} className="mr-4" alt="" />
                <p>{button.label}</p>
                {hoveredButton === index && (
                  <IoIosPlay className="text-black p-2 ml-auto mr-4 rounded-full bg-green text-5xl" />
                )}
              </button>
            ))}
          </>
        </div>

        {/* Your Shows Starts here */}
        <div className="relative z-10">
          <YourShows />
          <SpotifyFooter />
          <SpecialFooter/>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
