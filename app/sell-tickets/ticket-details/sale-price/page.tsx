"use client";

import { useRouter } from "next/navigation";

const SalePrice = () => {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/sell-tickets/ticket-details/sale-price/my-ads", { scroll: false });
  };
  return (
    <>
      {
        <div className="flex flex-col p-10 m-10 w-3/5">
          <div className="flex flex-row">
            <span className="text-3xl font-bold">Sale</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Price
            </span>
          </div>
          <input type="text" className="common-input" placeholder="$"></input>
          <input
            type="range"
            min="100"
            max="1500"
            className="mt-4 bg-gray-200 cursor-pointer"
          ></input>
          <div className="p-6 m-4 rounded-lg bg-blue-950 text-white text-xs">
            You are unlikly to sell the ticket at this price
          </div>
          <button
            className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      }
    </>
  );
};

export default SalePrice;
