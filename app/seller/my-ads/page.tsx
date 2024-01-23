"use client";
import { RootState } from "@/app/state/store";
import { useSelector } from "react-redux";
import DisplayEventImage from "@/app/ui/displayEventImage";
import Image from "next/image";
const Myads = () => {
  const sellTicketsData = useSelector((state: RootState) => state.sellTickets);
  const eventTicketsData = useSelector((state: RootState) => state.allEvents);
  console.log(eventTicketsData);
  return (
    <>
      <DisplayEventImage />
      <div className="flex flex-col p-10 m-10 w-3/5">
        <div className="flex flex-row">
          <span className="text-3xl font-bold">My</span>
          <span className="text-3xl font-bold text-orange-600 mx-2">Ads</span>
        </div>
        <div className="m-4 p-4 border-2 border-orange-700 rounded-xl">
          <div className="m-4 p-4 flex flex-row">
            <Image
              className="m-2 p-4 w-50 h-40 rounded-lg"
              src={sellTicketsData.eventsData.eventImage as string}
              alt="image"
              width="0"
              height="0"
              sizes="100vw"
            />
            <div className="m-2 p-4 flex flex-col">
              <div className="m-1 p-1 font-bold text-xl">
                {sellTicketsData.eventsData.eventName}
              </div>
              <div className="m-1 p-1 font-semibold">
                {sellTicketsData.eventsData.eventCategory}
              </div>
              <div className="m-1 p-1 font-semibold">
                {sellTicketsData.eventsData.eventTime}
              </div>
              <div className="m-1 p-1 font-semibold">
                {sellTicketsData.eventsData.eventLocation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myads;
