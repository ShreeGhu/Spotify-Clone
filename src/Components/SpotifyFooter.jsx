import { BiLogoInstagram } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function SpotifyFooter() {
    return (
      <div className="mt-28 flex  ">
        {/* First grid */}
        <div className="grid-container flex">
          <div className="grid grid-rows-4 grid-flow-col text-white opacity-90 gap-4">
            <p className="text-lg font-bold">Company</p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-7">
              About
            </p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-16">
              Jobs
            </p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-24">
              For the Record
            </p>
          </div>
        </div>

        {/* Second grid */}
        <div className="grid-container flex">
          <div className="grid grid-rows-6 grid-flow-col text-white gap-4 mr-28 ml-28">
            <p className="text-lg font-bold opacity-90">Communities</p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-2">
              For Artists
            </p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-5">
              Developers
            </p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-8">
              Advertising
            </p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-11">
              Investors
            </p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-14">
              Vendors
            </p>
          </div>
        </div>

        {/* Third grid */}
        <div className="grid-container flex">
          <div className="grid grid-rows-3 grid-flow-col text-white opacity-90 gap-4">
            <p className="text-lg font-bold">Company</p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-[5.5vh]">
              Support
            </p>
            <p className="cursor-pointer hover:underline hover:opacity-100 opacity-75 -mt-28">
              Free Mobile App
            </p>
          </div>
        </div>

        <div className="flex right-3 absolute text-white gap-3 text-4xl opacity-90 ">
          <BiLogoInstagram className="rounded-full bg-light p-2 hover:bg-lightest" />
          <FaTwitter className="rounded-full bg-light p-2 hover:bg-lightest" />
          <FaFacebook className="rounded-full bg-light p-2 hover:bg-lightest" />
        </div>
      </div>
    );
}
export default SpotifyFooter;
