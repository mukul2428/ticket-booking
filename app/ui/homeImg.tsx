"use client";

import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Events from "./events";
import { useState } from "react";

const HomeImg = () => {
  const userData = useSelector((state: RootState) => state.user);
  const [noOfEvents, setnoOfEvents] = useState([
    "football",
    "basketball",
    "basketball",
  ]);
  return (
    <>
      <div className="">
        <img
          src="/CrowedImage.png"
          className="w-screen h-screen"
          alt="Home Page Image"
        />
      </div>
      ;
      {userData.loggedIn ? (
        <>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="font-poppins-bold text-white font-helvetica text-4xl font-bold ">
              <div className="text-center">Buy and sell tickets</div>
              <div className="text-center">for thousands of events!</div>
            </div>
            <div className="p-2 rounded-md bg-white mt-4 flex flex-row">
              <div className="ml-3 flex items-center">
                <img className="w-4" src="/EventSearch.png" alt="werwer" />
                <input
                  className="p-4 mr-2 rounded-md border-none outline-none"
                  placeholder="Look for an Event"
                  type="text"
                />
              </div>
              <div className="left-1/2 -ml-0.5 w-0.5 bg-gray-200"></div>
              <div className="ml-3 flex items-center">
                <img className="w-4" src="/Location.png" alt="werwer" />
                <input
                  className="p-4 ml-2 rounded-md border-none outline-none"
                  type="text"
                  placeholder="Location"
                />
              </div>
              <button className="ml-4 px-4 text-white  bg-orange-600 text-sm rounded-md">
                Search Now
              </button>
            </div>
          </div>

          <div className="flex">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {noOfEvents.map((event) => {
                return <Events imageType={event + ".jpg"} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default HomeImg;
