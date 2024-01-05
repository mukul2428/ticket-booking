"use client"
import { EventContext } from "@/app/hooks/context";
import { useContext } from "react";
const Myads = () => {
  const eventContext = useContext(EventContext);
  console.log(eventContext);
  return (
    <>
      <div className="flex flex-col p-10 m-10 w-3/5">
        <div className="flex flex-row">
          <span className="text-3xl font-bold">My</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">Ads</span>
        </div>
        <div className="m-4 p-4 border-2 border-orange-700 rounded-xl">
          <div className="m-4 p-4 flex flex-row">
            <img
              className="m-2 p-4 w-50 h-40 rounded-lg"
              src="football.jpg"
              alt="image"
            ></img>
            <div className="m-2 p-4 flex flex-col">
              <div className="m-1 p-1 font-bold text-xl">
                {eventContext.eventName}
              </div>
              <div className="m-1 p-1 font-semibold">
                {eventContext.eventCategory}
              </div>
              <div className="m-1 p-1 font-semibold">
                {eventContext.eventTime}
              </div>
              <div className="m-1 p-1 font-semibold">
                {eventContext.eventLocation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myads;
