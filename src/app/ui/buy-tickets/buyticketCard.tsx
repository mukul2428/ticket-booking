"use client";

import { useRouter } from "next/navigation";
import {
  BackstagePassSvg,
  ComfortSeatSvg,
  ETicketSvg,
  FreeFoodSvg,
} from "../svgIcons";

const BuyticketCard: React.FC<any> = ({data}) => {
  const router = useRouter();
  return (
    <div className="max-w-sm bg-white rounded-xl border border-gray-300 m-4">
      <div className="px-6 py-6">
        <div className="font-semibold text-xl mb-2">Row 0</div>
        <p className="text-base">
          <span className="font-semibold text-3xl text-orange-600">${data.salePrice.price}</span> /
          ticket
        </p>
        <div className="border-t border-dashed my-3"></div>
        <div className="flex items-center justify-between flex-col">
          <div className="flex items-center">
            <div className="mr-2 flex">
              <ETicketSvg />
              <span className="p-2 text-xs mx-2 justify-end">E-Tickets</span>
            </div>
            <div className="mr-2 flex">
              <FreeFoodSvg />
              <span className="text-xs p-2">Free Food</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="mr-2 flex">
              <ComfortSeatSvg />
              <span className="text-xs mx-2 p-2">Comfort Seat</span>
            </div>
            <div className="mr-2 flex">
              <BackstagePassSvg />
              <span className="text-xs p-2">Backstage Pass</span>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 p-2 text-orange-600 bg-white border border-orange-600 rounded-lg w-full"
          >
            10 Tickets Available
          </button>
          <button
            type="submit"
            onClick={() => router.push("/buyer/buyer-info")}
            className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg w-full"
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyticketCard;
