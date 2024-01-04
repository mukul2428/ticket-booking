import { useState } from "react";
import Ticketdetail from "./ticketdetail";

const EventDetail = () => {
  const [isTicketDetail, setTicketDetail] = useState(false);
  const handleContinue = () => {
    setTicketDetail(!isTicketDetail);
  };
  return (
    <>
      {!isTicketDetail && (
        <div className="flex flex-col p-10 m-10 w-3/5">
          <div className="flex flex-row">
            <span className="text-3xl font-bold">Event</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Name
            </span>
          </div>
          <input
            type="text"
            className="common-input"
            placeholder="Event Name"
          ></input>
          <div className="flex flex-row mt-8">
            <span className="text-3xl font-bold">Event</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Location
            </span>
          </div>
          <input
            type="text"
            className="common-input"
            placeholder="Event Location"
          ></input>
          <div className="flex flex-row mt-8">
            <span className="text-3xl font-bold">Event</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Date & Time
            </span>
          </div>
          <div className="flex-row">
            <input
              type="date"
              className="common-input"
              placeholder="Event Name"
            ></input>
            <input
              type="time"
              className="common-input mx-4"
              placeholder="Event Name"
            ></input>
          </div>
          <div className="flex flex-row mt-8">
            <span className="text-3xl font-bold">Event</span>
            <span className="text-3xl font-bold text-orange-600 mx-2">
              Catagory
            </span>
          </div>
          <div className="mt-4">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="football"
            ></input>
            <label htmlFor="football">Football</label>
          </div>
          <div className="mt-2">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="basketball"
            ></input>
            <label htmlFor="basketball">Basketball</label>
          </div>
          <div className="mt-2">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="=concert"
            ></input>
            <label htmlFor="=concert">Concert</label>
          </div>
          <div className="mt-2">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="other"
            ></input>
            <label htmlFor="other">Other</label>
          </div>
          <button
            className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      )}
      {isTicketDetail && <Ticketdetail />}
    </>
  );
};

export default EventDetail;
