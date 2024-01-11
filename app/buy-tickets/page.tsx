"use client";

import BuyticketCard from "../ui/buyticketCard";

const BuyTicket = () => {
  return (
    <>
      <div className="w-screen m-10 p-4 flex flex-row justify-around">
        <div className="border border-gray-300 rounded-xl w-2/5 m-4">
          <p className="px-2 mx-2">Under development</p>
          <img src="/stadium-select.png" alt="Home Page Image" />
        </div>
        <div className="border border-gray-300 rounded-xl items-center p-10 m-4">
          Information Regarding The Stadium
        </div>
      </div>
      <div className="w-screen m-10 p-4 flex flex-row flex-wrap">
        <BuyticketCard />
        <BuyticketCard />
        <BuyticketCard />
        <BuyticketCard />
        <BuyticketCard />
        <BuyticketCard />
        <BuyticketCard />
        <BuyticketCard />
      </div>
    </>
  );
};

export default BuyTicket;
