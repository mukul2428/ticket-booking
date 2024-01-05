import { useState } from "react";
import Ticketdetail from "./ticketdetail";
import { useContext } from "react";
import { EventContext } from "../hooks/context";
const EventDetail = () => {
  const [isTicketDetail, setTicketDetail] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const eventContext = useContext(EventContext);
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  const handleContinue = () => {
    eventContext.id = 4;
    eventContext.imageType = "/";
    eventContext.eventName = eventName;
    eventContext.eventLocation = eventLocation;
    eventContext.eventTime = `${eventDate} ${eventTime}`;
    eventContext.eventDay = eventDate;
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
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
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
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
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
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            ></input>
            <input
              type="time"
              className="common-input mx-4"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
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
              checked={selectedCategory === "Football"}
              onChange={() => handleCategoryChange("Football")}
            ></input>
            <label htmlFor="football">Football</label>
          </div>
          <div className="mt-2">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="basketball"
              checked={selectedCategory === "Basketball"}
              onChange={() => handleCategoryChange("Basketball")}
            ></input>
            <label htmlFor="basketball">Basketball</label>
          </div>
          <div className="mt-2">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="=concert"
              checked={selectedCategory === "Concert"}
              onChange={() => handleCategoryChange("Concert")}
            ></input>
            <label htmlFor="=concert">Concert</label>
          </div>
          <div className="mt-2">
            <input
              className="mx-1 accent-orange-600"
              type="radio"
              id="other"
              checked={selectedCategory === "Other"}
              onChange={() => handleCategoryChange("Other")}
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
