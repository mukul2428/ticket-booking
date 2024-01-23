import React, { useContext } from "react";
import { TeamContext } from "../hooks/context";
import Link from "next/link";
import Image from "next/image";
const Teamcards = () => {
  const teamsData = useContext(TeamContext);
  return (
    <>
      <Link href={"/seller/sell-tickets/ticket-details"}>
        <div className="max-w-sm shadow-custom rounded-lg shadow ">
          <Image
            className="rounded-t-lg object-cover h-48 w-96"
            src={teamsData.imageType}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
          />
          <div className="m-1 p-4 text-center text-lg font-bold">
            {teamsData.teamName}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Teamcards;
