"use client";

import { RootState } from "@/app/state/store";
import BuyticketCard from "@/app/ui/buy-tickets/buyticketCard";
import Image from "next/image";
import { useSelector } from "react-redux";

const BuyTicket = () => {
  const allEvents = useSelector((state: RootState) => state.allEvents);
  return (
    <>
      <div className="w-screen m-10 p-4 flex flex-row justify-around">
        <div className="border border-gray-300 rounded-xl w-2/5 m-4">
          <p className="px-2 mx-2">Under development</p>
          <Image
            className="w-auto h-auto"
            src="/stadium-select.png"
            width="0"
            height="0"
            sizes="100vw"
            alt="Home Page Image"
          />
        </div>
        <div className="border border-gray-300 rounded-xl items-center p-10 m-4">
          Information Regarding The Stadium
        </div>
      </div>
      <div className="w-screen m-10 p-4 flex flex-row flex-wrap">
        {allEvents.map((data) => {
          return (
            <span key={data.id}>
              <BuyticketCard data={data} />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default BuyTicket;
