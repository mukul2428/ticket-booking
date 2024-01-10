import React from "react";
import Link from "next/link";
import Image from "next/image";
const Cards: any = ({ items }: any) => {
  return (
    <>
      <Link href={"/sell-tickets/ticket-details"}>
        <div className="relative max-w-sm shadow-custom rounded-lg shadow ">
          <Image
            className="rounded-t-lg object-cover h-48 w-96"
            src={items?.eventImage as string}
            alt=""
            width="0"
            height="0"
            sizes="100vw"
          />

          <div className="p-5">
            <span className="p-2 rounded-md text-white bg-orange-600">
              {items?.eventCategory}
            </span>
            <h5 className="dark:text-black mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {items?.eventName}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
