"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DaySvg, EventCardLineSvg, LocationSvg, TimeSvg } from "./svgIcons";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
const Cards: any = ({ items }: any) => {
  const userLoginData = useSelector((state: RootState) => state.login);
  const userSignUpData = useSelector((state: RootState) => state.signup);

  if (items.eventsData === undefined) return;
  return (
    <>
      <Link
        href={
          userLoginData.userType === "Seller"
            ? "/seller/sell-tickets/ticket-details"
            : "/buyer/buy-tickets"
        }
      >
        <div className="relative max-w-sm shadow-custom rounded-lg shadow ">
          <Image
            className="rounded-t-lg object-cover h-48 w-96"
            src={items.eventsData.eventImage as string}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />
          <div>
            <span className="rounded-md bg-red-500 text-white p-2 absolute translate-x-[25%] translate-y-[-50%] left-15%">
              {items.eventsData.eventCategory}
            </span>
            <div className="px-5 pt-10 py-5">
              <div className="dark:text-black mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {items.eventsData.eventName}
              </div>
              <div className="text-gray-400 tracking-tight">
                <div className="flex gap-2">
                  <LocationSvg />
                  <span>{items.eventsData.eventLocation}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div>
                  <div className="flex gap-2">
                    <TimeSvg />
                    <span>{items.eventsData.eventTime}</span>
                  </div>
                  <div className="flex gap-2">
                    <DaySvg />
                    <span>{items.eventsData.eventDate}</span>
                  </div>
                  <div>
                    <span className="text-orange-600">
                      +{items.ticketData.noOfTickets} tickets left
                    </span>
                  </div>
                </div>
                <EventCardLineSvg />
                <div>
                  <span>Lowest Price</span>
                  <div className="text-orange-600 font-bold text-2xl">
                    ${items.salePrice.price} USD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
