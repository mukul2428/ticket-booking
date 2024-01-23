import Image from "next/image";
import { eventDataInputs } from "../types";

type eventDataTypes = {
  eventData: eventDataInputs;
};

const DisplayEventImage: React.FC<eventDataTypes> = ({ eventData }) => {
  if (!eventData.eventImage) {
    // Handle the case when eventImage is null
    return <div>No Image</div>;
  }
  return (
    <>
      <div className="flex items-center justify-center w-screen h-72 relative">
        <Image
          src={eventData.eventImage as string}
          alt="Uploaded"
          className="object-cover w-full h-full"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="absolute bottom-0 left-16 p-6 shadow-sm">
          <div className="flex flex-row">
            <p className="text-white text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {eventData.eventName} -
            </p>
            <p className="text-white text-4xl font-bold mx-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {eventData.eventLocation}
            </p>
          </div>
          <div className="flex flex-row mt-4">
            <p className="text-white text-xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {eventData.eventDate} -
            </p>
            <p className="text-white text-xl font-bold mx-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {eventData.eventTime}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayEventImage;
