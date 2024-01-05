import { useState } from "react";
import Tickrectangle from "./tickrectangle";
import Saleprice from "./saleprice";

const Ticketdetail = () => {
  const [isSalePrice, setIsSalePrice] = useState(false);
  const handleContinue = () => {
    setIsSalePrice(!isSalePrice);
  };
  return (
    <>
      {!isSalePrice && (
        <div className="flex flex-col p-10 m-10 w-3/5">
          <div className="flex flex-row">
            <span className="text-3xl font-bold">Number of</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Tickets
            </span>
          </div>
          <input
            type="text"
            className="common-input"
            placeholder="No of tickets"
          ></input>
          <div className="flex flex-row mt-4">
            <span className="text-3xl font-bold">Ticket</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Format
            </span>
          </div>
          <div className="mt-4">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="football"
            ></input>
            <label htmlFor="football">Paper Ticket</label>
          </div>
          <div className="mt-2">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="basketball"
            ></input>
            <label htmlFor="basketball">Season Combination Tickets</label>
          </div>
          <div className="mt-2">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="=concert"
            ></input>
            <label htmlFor="=concert">E-Ticket</label>
          </div>
          <div className="flex flex-row mt-4">
            <span className="text-3xl font-bold">Ticket</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Location
            </span>
          </div>
          <input
            type="text"
            className="common-input"
            placeholder="Location"
          ></input>
          <div className="flex flex-row mt-4">
            <span className="text-3xl font-bold">Ticket</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Queue
            </span>
          </div>
          <input
            type="text"
            className="common-input"
            placeholder="Ticket queue"
          ></input>
          <span className="mt-2 flex flex-row">
            <svg
              width="15"
              height="15"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0C6.7155 0 0 6.7155 0 15C0 23.2845 6.7155 30 15 30C23.2845 30 30 23.2845 30 15C30 6.7155 23.2845 0 15 0ZM16.5 22.5H13.5V13.5H16.5V22.5ZM16.5 10.5H13.5V7.5H16.5V10.5Z"
                fill="#E54220"
              />
            </svg>
            <span className="text-xs text-gray-400 mx-1">
              If there is no sequence number, leave it blank.
            </span>
          </span>
          <div className="flex flex-row mt-8">
            <span className="text-3xl font-bold">Restrictions and </span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Requirements
            </span>
          </div>
          <div className="flex flex-row mt-8 flex-wrap">
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
          </div>
          <div className="flex flex-row mt-8">
            <span className="text-3xl font-bold">Advantages</span>
          </div>
          <div className="flex flex-row mt-8 flex-wrap">
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
            <Tickrectangle />
          </div>
          <div className="flex flex-row mt-8">
            <span className="text-3xl font-bold">Are Your Tickets </span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Ready for shipment?
            </span>
          </div>
          <div className="mt-4">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="football"
            ></input>
            <label htmlFor="football">Yes, my tickets are ready.</label>
          </div>
          <div className="mt-2">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="basketball"
            ></input>
            <label htmlFor="basketball">
              No, I don&apos;t have the tickets yet / I can&apos;t send it yet.
            </label>
          </div>
          <button
            className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      )}
      {isSalePrice && <Saleprice />}
    </>
  );
};

export default Ticketdetail;
