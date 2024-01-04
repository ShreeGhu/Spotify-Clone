import show2 from "../Image/show2.png";
import show3 from "../Image/show3.png";
import show11 from "../Image/show11.png";
import show12 from "../Image/show12.png";
import show13 from "../Image/show13.png";
import show14 from "../Image/show14.png";

// Daily mix
import discoverweekly from "../Image/discoverweekly.png";
import dailymix1 from "../Image/dailymix1.png";
import dailymix2 from "../Image/dailymix2.png";
import dailymix3 from "../Image/dailymix3.png";
import dailymix4 from "../Image/dailymix4.png";
import dailymix5 from "../Image/dailymix5.png";
import dailymix6 from "../Image/dailymix6.png";

// pop
import viralhits from "../Image/viralhits.png";
import taylor from "../Image/taylor.png";
import popfavorites from "../Image/popfavorites.png";
import hothitscanada from "../Image/hothitscanada.png";
import moodbooster from "../Image/moodbooster.png";
import punjabi101 from "../Image/punjabi101.png";
import popallday from "../Image/popallday.png";

// Recently played
import show41 from "../Image/show41.png";
import show42 from "../Image/show42.png";
import show43 from "../Image/show43.png";
import show44 from "../Image/show44.png";
import show45 from "../Image/show45.png";
import show46 from "../Image/show46.png";
import show47 from "../Image/show47.png";

//jump back in
import s51 from "../Image/s51.png";
import s52 from "../Image/s52.png";
import s53 from "../Image/s53.png";
import s54 from "../Image/s54.png";
import s55 from "../Image/s55.png";
import s56 from "../Image/s56.png";
import s57 from "../Image/s57.png";

// favorite artists
import s61 from "../Image/s61.png";
import mood from "../Image/mood.png";
import s63 from "../Image/s63.png";
import s64 from "../Image/s64.png";
import s65 from "../Image/s65.png";
import s66 from "../Image/s66.png";
import s67 from "../Image/s67.png";

import React, { useState } from "react";
import { IoIosPlay } from "react-icons/io";

const yourShow1 = [
  { src: show11, text: "liked songs", subtext: "liked songs of all..." },
  { src: show2, text: "Sushant Pardhan", subtext: "Sushant Pardhan" },
  { src: show3, text: "the positive mind...", subtext: "henry g" },
  { src: s57, text: "alapatra", subtext: "shreekant gumanju" },
  { src: show13, text: "reggae mix", subtext: "sanjay devkota, mot..." },
  { src: show14, text: "rock mix", subtext: "rock and roll, yoyos...." },
];

const yourShow2 = [
  {
    src: discoverweekly,
    text: "discover weekly",
    subtext: "your weekly mixta...",
  },
  {
    src: dailymix1,
    text: "daily mix 1",
    subtext: "pritam, vishal-shekhar...",
  },
  {
    src: dailymix2,
    text: "daily mix 2",
    subtext: "post malone, drake, TE...",
  },
  {
    src: dailymix3,
    text: "daily mix 3",
    subtext: "yabesh thapa, brijesh....",
  },
  {
    src: dailymix4,
    text: "daily mix 4",
    subtext: "doja cat, pitbull, west..",
  },
  {
    src: dailymix5,
    text: "daily mix 5",
    subtext: "sajjan raj vaidhya,sus...",
  },
  {
    src: dailymix6,
    text: "daily mix 6",
    subtext: "the weekend, shwan men...",
  },
];

const yourShow3 = [
  { src: show46, text: "viral hits", subtext: "viral, trending and.." },
  { src: taylor, text: "today's top hits", subtext: "taylor swift is on to.." },
  {
    src: popfavorites,
    text: "pop favorites",
    subtext: "nicki minaj, cover by...",
  },
  {
    src: hothitscanada,
    text: "hots hits canada",
    subtext: "the hottest tracks in...",
  },
  {
    src: moodbooster,
    text: "mood booster",
    subtext: "get happy with today's...",
  },
  { src: punjabi101, text: "punjabi 101", subtext: "ultimate 101 punjabi..." },
  { src: popallday, text: "pop all day", subtext: "the latest pop hits of..." },
];

const yourShow4 = [
  { src: show41, text: "Walikums", subtext: "a blend of music for..." },
  { src: show42, text: "mood", subtext: "i'ill get there" },
  { src: s63, text: "hindi mix", subtext: "Sanjay Silwal Gupta, ra..." },
  {
    src: show44,
    text: "south indian mix",
    subtext: "Silwal Gupta, hari narayan..",
  },
  { src: show45, text: "moody mix", subtext: "rio romer, taylor swift..." },
  {
    src: show46,
    text: "billie eilish mix",
    subtext: "conan gray, SGA and david",
  },
  {
    src: show47,
    text: "reggae mix",
    subtext: "tribal rain, brijesh shres....",
  },
];

const yourShow5 = [
  { src: s51, text: "release radar", subtext: "catch all the latest..." },
  { src: s52, text: "lofi nepali songs", subtext: "get lost with this w... " },
  { src: s53, text: "OH DARLING ALL...", subtext: "thinking hard" },
  { src: s54, text: "ANIMAL", subtext: "Manan bhardwaj, vishal g..." },
  { src: s55, text: "gym", subtext: "by shreekant" },
  { src: s56, text: "jeene ke liye, soc..", subtext: "jeene ke liye, soc.." },
  {
    src: s57,
    text: "songs to sing in t...",
    subtext: "Splash and sing-along...",
  },
];

const yourShow6 = [
  { src: s61, text: "rahat fateh ali kh...", subtext: "Artist" },
  { src: mood, text: "shreekant gumanju", subtext: "Artist" },
  { src: s63, text: "prateek kuhad", subtext: "Artist" },
  { src: s64, text: "atif aslam", subtext: "Artist" },
  { src: s65, text: "GXSOUL", subtext: "Artist" },
  { src: s66, text: "arjit singh", subtext: "Artist" },
  { src: s67, text: "pritam", subtext: "Artist" },
];

const YourShowButtons = () => {
  const [hoveredButtons, setHoveredButtons] = useState(Array(7).fill(null));

  const handleMouseEnter = (index, setIndex) => {
    setHoveredButtons((prev) => {
      const newHoveredButtons = [...prev];
      newHoveredButtons[setIndex] = index;
      return newHoveredButtons;
    });
  };

  const handleMouseLeave = (setIndex) => {
    setHoveredButtons((prev) => {
      const newHoveredButtons = [...prev];
      newHoveredButtons[setIndex] = null;
      return newHoveredButtons;
    });
  };

  const renderButtons = (buttons, setIndex) => {
    return buttons.map((button, index) => (
      <button
        key={index}
        className={`text-lg mt-4 text-white h-[28vh] bg-light bg-opacity-70 hover:bg-opacity-100 rounded-lg overflow-hidden w-[21vh]  ${
          hoveredButtons[setIndex] === index ? "opacity-100" : "opacity-90"
        }`}
        onMouseEnter={() => handleMouseEnter(index, setIndex)}
        onMouseLeave={() => handleMouseLeave(setIndex)}
      >
        <img
          src={button.src}
          className="h-[24vh] w-full rounded-lg object-cover scale-75 -mb-8 -mt-8"
          alt={button.text}
        />
        <div className="relative items-center justify-center flex -mr-16 mt-3">
          {hoveredButtons[setIndex] === index && (
            <IoIosPlay className="text-black rounded-full bg-green h-14 w-14 p-3 border-green -mt-24" />
          )}
        </div>

        <p className="text-lg font-semibold capitalize mt-2 text-white flex ml-5">
          {button.text}
        </p>

        <p className="text-sm opacity-75 capitalize flex ml-5">
          {button.subtext}
        </p>
      </button>
    ));
  };

  return (
    <div>
      {/* Your Shows */}

      <div className="justify-between flex mt-8 text-white cursor-pointer ">
        <h1 className="text-2xl font-bold hover:underline capitalize ">
          Your Shows
        </h1>
        <h4 className="hover:underline font-semibold opacity-75">Show all</h4>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {renderButtons(yourShow1, 0)}
      </div>

      {/* Made for You */}
      <div className="justify-between flex mt-8 text-white cursor-pointer ">
        <h1 className="text-2xl font-bold hover:underline capitalize ">
          Made For You
        </h1>
        <h4 className="hover:underline font-semibold opacity-75">Show all</h4>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {renderButtons(yourShow2, 1)}
      </div>

      {/*  POP*/}
      <div className="justify-between flex mt-8 text-white cursor-pointer ">
        <h1 className="text-2xl font-bold hover:underline capitalize ">pop</h1>
        <h4 className="hover:underline font-semibold opacity-75">Show all</h4>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {renderButtons(yourShow3, 2)}
      </div>

      {/* Recently played */}
      <div className="justify-between flex mt-8 text-white cursor-pointer ">
        <h1 className="text-2xl font-bold hover:underline  capitalize">
          Recently played{" "}
        </h1>
        <h4 className="hover:underline font-semibold opacity-75">Show all</h4>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {renderButtons(yourShow4, 3)}
      </div>

      {/* jump back in */}
      <div className="justify-between flex mt-8 text-white cursor-pointer ">
        <h1 className="text-2xl font-bold hover:underline capitalize ">
          jump back in
        </h1>
        <h4 className="hover:underline font-semibold opacity-75">Show all</h4>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {renderButtons(yourShow5, 5)}
      </div>

      {/* your favorite artists */}
      <div className="justify-between flex mt-8 text-white cursor-pointer ">
        <h1 className="text-2xl font-bold hover:underline capitalize ">
          your favorite artists
        </h1>
        <h4 className="hover:underline font-semibold opacity-75">Show all</h4>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {renderButtons(yourShow6, 6)}
      </div>
    </div>
  );
};

export default YourShowButtons;
