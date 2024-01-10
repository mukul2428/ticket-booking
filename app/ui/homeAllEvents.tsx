"use client";
import { useState } from "react";
import { TeamContext } from "../hooks/context";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Image from "next/image";
import { CalenderSvg, NextSvg, PreviousSvg, TeamsSvg } from "../ui/svgIcons";
import Cards from "../ui/cards";
import Teams from "../ui/teams";

const HomeAllEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;
  const allEvents = useSelector((state: RootState) => state.allEvents);
  const teamsData = [
    {
      id: 0,
      imageType: "football.jpg",
      teamName: "CSK",
    },
  ];
  const displayEvents = allEvents.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );
  const handleNext = () => {
    const lastIndex = allEvents.length - 1;
    const nextIndex = (currentIndex + cardsPerPage) % (lastIndex + 1);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const lastIndex = allEvents.length - 1;
    const prevIndex =
      (currentIndex - cardsPerPage + lastIndex + 1) % (lastIndex + 1);
    setCurrentIndex(prevIndex);
  };
  return (
    <>
      <div className="">
        <Image
          src="/CrowedImage.png"
          className="w-screen h-screen"
          alt="Home Page Image"
          width="0"
          height="0"
          sizes="100vw"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="font-poppins-bold text-white font-helvetica text-4xl font-bold ">
          <div className="text-center">Buy and sell tickets</div>
          <div className="text-center">for thousands of events!</div>
        </div>
        <div className="p-2 rounded-md bg-white mt-4 flex flex-row">
          <div className="ml-3 flex items-center">
            <Image
              className="w-4 h-auto"
              src="/EventSearch.png"
              alt="werwer"
              width="0"
              height="0"
              sizes="100vw"
            />
            <input
              className="p-4 mr-2 rounded-md border-none outline-none"
              placeholder="Look for an Event"
              type="text"
            />
          </div>
          <div className="left-1/2 -ml-0.5 w-0.5 bg-gray-200"></div>
          <div className="ml-3 flex items-center">
            <Image
              className="w-4 h-auto"
              src="/Location.png"
              alt="werwer"
              width="0"
              height="0"
              sizes="100vw"
            />
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
        <div className="text-3xl">
          <span className="font-bold">Upcoming</span>&nbsp;
          <span className="font-extrabold text-orange-600">Events</span>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
        <span>
          <CalenderSvg />
        </span>

        <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
      </div>
      <div className="flex justify-around my-6 py-4 mx-8">
        {displayEvents[0].eventsData.eventName ? (
          displayEvents.map((event) => (
            <span key={event.id}>
              <Cards items={event.eventsData} />
            </span>
          ))
        ) : (
          <span className="text-orange-600">No Events Available</span>
        )}
      </div>
      {displayEvents[0].eventsData.eventName ? (
        <div className="flex flex-row justify-center">
          <button
            className="m-4 p-4 border-2 border-orange-600 rounded-lg"
            onClick={handlePrev}
          >
            <PreviousSvg />
          </button>
          <button className="text-sm m-4 p-4 border-2 border-orange-600 rounded-lg">
            View More Events
          </button>
          <button
            className="m-4 p-4 border-2 border-orange-600 rounded-lg"
            onClick={handleNext}
          >
            <NextSvg />
          </button>
        </div>
      ) : null}

      <div className="flex flex-row my-6 justify-center mt-10">
        <div className="text-3xl">
          <span className="font-bold">Follow Your</span>&nbsp;
          <span className="font-extrabold text-orange-600">Team</span>&nbsp;
          <span className="font-bold">Closely</span>&nbsp;
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
        <span>
          <TeamsSvg />
        </span>

        <hr className="h-px my-4 bg-gray-300 border-0 w-24"></hr>
      </div>
      <div className="flex justify-around my-6 py-4 mx-8">
        {teamsData.map((event) => {
          return (
            <TeamContext.Provider value={event} key={event.id}>
              <Teams key={event.id} />
            </TeamContext.Provider>
          );
        })}
      </div>
      <div className="flex flex-row justify-center">
        <button className="m-4 p-4 border-2 border-orange-600 rounded-lg">
          <PreviousSvg />
        </button>
        <button className="text-sm m-4 p-4 border-2 border-orange-600 rounded-lg">
          View More Teams
        </button>
        <button className="m-4 p-4 border-2 border-orange-600 rounded-lg">
          <NextSvg />
        </button>
      </div>
    </>
  );
};
export default HomeAllEvents;
