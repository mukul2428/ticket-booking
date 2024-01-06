import React, { useContext } from "react";
import { TeamContext } from "../hooks/context";
import Link from "next/link";
const Teamcards = () => {
  const teamsData = useContext(TeamContext);
  return (
    <>
      <Link href={"/sell-tickets/ticket-details"}>
        <div className="max-w-sm shadow-custom rounded-lg shadow ">
          <img
            className="rounded-t-lg object-cover h-48 w-96"
            src={teamsData.imageType}
            alt=""
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
