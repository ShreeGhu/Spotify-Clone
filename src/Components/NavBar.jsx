import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { VscLibrary } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import { MdOutlineFormatListBulleted, MdFavorite } from "react-icons/md";

import { TiArrowShuffle } from "react-icons/ti";
import { IoIosSkipBackward } from "react-icons/io";
import { IoMdPlay } from "react-icons/io";
import { IoIosSkipForward } from "react-icons/io";
import { FiRepeat } from "react-icons/fi";
import { HiOutlineQueueList } from "react-icons/hi2";
import { LuMonitorSpeaker } from "react-icons/lu";
import { LuVolume1 } from "react-icons/lu";
import { CgMiniPlayer } from "react-icons/cg";
import { BsArrowsFullscreen } from "react-icons/bs";

import logo from "../Image/logo.png";
import playlist from "../Image/playlist.png";
import SidebarButtons from "./SidebarButtons";
import MainPage from "./MainPage";

function NavBar() {
  return (
    <div className="bg-black h-screen  ">
      <div className="flex bg-black h-[88vh] ">
        <div className="w-64 bg-dark h-full flex flex-none rounded-md m-2 text-white">
          <div>
            <img
              src={logo}
              className=" h-10 justify-start m-3 transition"
              alt=""
            />
            <button className="flex px-4 mt-4 opacity-75 hover:opacity-100 transition ">
              <MdHomeFilled className="text-2xl " />
              <p className="text-md ml-2 font-semibold ">Home</p>
            </button>
            <button className="flex px-4 mt-3 opacity-75 hover:opacity-100 transition ">
              <CiSearch className="text-2xl " />
              <p className="text-md ml-2 font-semibold ">Search</p>
            </button>
            <p className="bg-black w-96  mt-2 -ms-3.5 h-2 rounded-lg "></p>
            <button className="flex px-4 mt-2 opacity-75 hover:opacity-100 transition ">
              <VscLibrary className="text-2xl " />
              <p className="text-md ml-2 font-semibold capitalize">
                your library
              </p>
              <GoPlus className="ml-20 text-2xl opacity-75 transition hover:rounded-full hover:bg-zinc-700" />
            </button>
            <div className="p-3 mt-2 ml-1">
              <button className="rounded-full bg-zinc-700 text-sm p-1.5 items-center opacity-90 hover:opacity-100">
                Playlists
              </button>
              <button className="rounded-full bg-zinc-700 opacity-90 hover:opacity-100 text-sm p-1.5 items-center ml-3">
                Artists
              </button>
            </div>
            <button className="flex px-4 mt-2 opacity-75 hover:opacity-100 transition ">
              <CiSearch className="text-xl  ml-3 mt-1 hover:rounded-2xl hover:bg-zinc-700 " />
              <p className="text-sm ml-28 font-semibold capitalize opacity-75 transition hover:scale-105 hover:opacity-100">
                recents
              </p>
              <MdOutlineFormatListBulleted className=" text-xl ml-1 opacity-75 transition hover:scale-105 hover:opacity-100" />
            </button>
            <div className=" w-64 h-[58vh] overflow-hidden hover:overflow-y-scroll grid grid-flow-col relative mt-2 z-10">
              <div>
                <SidebarButtons />
              </div>
            </div>
          </div>
        </div>

        {/* Main Page */}
        <div className="w-full h-full relative bg-dark mt-2 rounded-md mr-2">
          <MainPage />
        </div>
      </div>

      {/* PlayBar */}
      <div className="w-full flex items-center justify-between px-5 bg-black relative h-[11vh] z-30 border-t-[1vh] border-black rounded-xl">
        <div className="flex text-white items-center opacity-90 ">
          <img src={playlist} className="h-12 cursor-pointer" />
          <div className="ml-5">
            <h1 className="text-sm font-semibold tracking-wide cursor-pointer hover:underline">
              Malai Chaana Na
            </h1>
            <h2 className="text-xs tracking-wide cursor-pointer hover:underline">
              Sajjan Raj Vaidya
            </h2>
          </div>
          <MdFavorite className="text-xl mx-4 mt-2 text-green cursor-pointer" />
        </div>
        <div className="flex flex-col justify-center w-2/6 items-center">
          <div className="flex items-center ">
            <button className="mx-3 opacity-90 text-white">
              <TiArrowShuffle className="text-xl" />
            </button>
            <button className="mx-3 opacity-90 text-white">
              <IoIosSkipBackward className="text-xl" />
            </button>
            <button className="mx-3 opacity-90 text-white rounded-full bg-white h-10 w-10 items-center justify-center flex">
              <IoMdPlay className="text-xl text-black" />
            </button>
            <button className="mx-3 opacity-90 text-white">
              <IoIosSkipForward className="text-xl" />
            </button>
            <button className="mx-3 opacity-90 text-white">
              <FiRepeat className="text-xl" />
            </button>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="text-xs text-lightest mr-1 mt-3">0:28</p>
            <div className="w-full h-1 bg-lightest opacity-90 rounded-full mt-4 flex items-center">
              <div
                className=" w-1/3 h-1 rounded-full bg-green"
                style={{ width: 98 }}
              ></div>
              <div className="h-3 w-3 bg-white rounded-full shadow -ml-1"></div>
            </div>
            <p className="text-xs text-lightest ml-1 mt-3">3:28</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 justify-end right-5">
            <IoMdPlay className="text-lg text-white opacity-90 hover:opacity-100 border items-center flex p-0.5" />
            <HiOutlineQueueList className=" text-xl text-white opacity-90 hover:opacity-100" />
            <LuMonitorSpeaker className="text-xl text-white opacity-90 hover:opacity-100" />
            <LuVolume1 className="text-xl text-white opacity-90 hover:opacity-100" />

            <div className="w-20 -ml-2 rounded-full h-1 bg-lightest">
              <div
                className=" w-1/3 h-1 rounded-full bg-green"
                style={{ width: 18 }}
              ></div>
              <div className="h-3 w-3 bg-white rounded-full shadow ml-4 -mt-2"></div>
            </div>
            <CgMiniPlayer className=" text-xl text-white opacity-90 hover:opacity-100" />
            <BsArrowsFullscreen className="text-sm text-white opacity-90 hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
