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
          <div className="flex flex-row my-6 justify-center">
            <div className="font-bold text-3xl">Upcoming</div>
            <div className=" mx-4 font-extrabold text-3xl text-orange-600">
              Events
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                viewBox="0 0 33 30"
                fill="none"
              >
                <path
                  d="M29.4231 2.30769H25.3846V0.576923C25.3846 0.230769 25.1538 0 24.8077 0C24.4615 0 24.2308 0.230769 24.2308 0.576923V2.30769H19.6154V0.576923C19.6154 0.230769 19.3846 0 19.0385 0C18.6923 0 18.4615 0.230769 18.4615 0.576923V2.30769H13.8462V0.576923C13.8462 0.230769 13.6154 0 13.2692 0C12.9231 0 12.6923 0.230769 12.6923 0.576923V2.30769H8.07692V0.576923C8.07692 0.230769 7.84615 0 7.5 0C7.15385 0 6.92308 0.230769 6.92308 0.576923V2.30769H2.88462C1.26923 2.30769 0 3.57692 0 5.19231V27.1154C0 28.7308 1.26923 30 2.88462 30H29.4231C31.0385 30 32.3077 28.7308 32.3077 27.1154V5.19231C32.3077 3.57692 31.0385 2.30769 29.4231 2.30769ZM2.88462 3.46154H6.92308V5.19231C6.92308 5.53846 7.15385 5.76923 7.5 5.76923C7.84615 5.76923 8.07692 5.53846 8.07692 5.19231V3.46154H12.6923V5.19231C12.6923 5.53846 12.9231 5.76923 13.2692 5.76923C13.6154 5.76923 13.8462 5.53846 13.8462 5.19231V3.46154H18.4615V5.19231C18.4615 5.53846 18.6923 5.76923 19.0385 5.76923C19.3846 5.76923 19.6154 5.53846 19.6154 5.19231V3.46154H24.2308V5.19231C24.2308 5.53846 24.4615 5.76923 24.8077 5.76923C25.1538 5.76923 25.3846 5.53846 25.3846 5.19231V3.46154H29.4231C30.4038 3.46154 31.1538 4.21154 31.1538 5.19231V9.23077H1.15385V5.19231C1.15385 4.21154 1.90385 3.46154 2.88462 3.46154ZM29.4231 28.8462H2.88462C1.90385 28.8462 1.15385 28.0962 1.15385 27.1154V10.3846H31.1538V27.1154C31.1538 28.0962 30.4038 28.8462 29.4231 28.8462Z"
                  fill="#A3A3A3"
                />
              </svg>
            </span>

            <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
          </div>
          <div className="flex justify-around my-6 py-4 mx-8">
            {noOfEvents.map((event) => {
              return <Events className="m-4" imageType={event + ".jpg"} />;
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default HomeImg;
