"use client";
import DisplayEventImage from "@/app/ui/displayEventImage";
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";
import { useRouter } from "next/navigation";
import { GeneratedSvg, QrCodeSvg } from "@/app/ui/svgIcons";
import Image from "next/image";

const DisplayTicket = () => {
  const router = useRouter();
  const handleMyAds = () => {
    router.push("/seller/my-ads");
  };
  const sellTicketsData = useSelector((state: RootState) => state.sellTickets);
  const eventData = useSelector(
    (state: RootState) => state.sellTickets.eventsData
  );
  return (
    <>
      <DisplayEventImage eventData={eventData} />
      <div className="flex flex-row justify-center items-center m-10">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <Image
                  className="w-10 h-auto"
                  src="/siteLogo.png"
                  width="0"
                  height="0"
                  sizes="100vw"
                  alt="logo"
                />
                <h3 className="font-semibold">E V E N T</h3>
              </div>
              <div className="text-bold">
                {sellTicketsData.eventsData.eventName}
              </div>
              <div className="text-bold">
                {sellTicketsData.eventsData.eventDate}{" "}
                {sellTicketsData.eventsData.eventTime}
              </div>
              <div className="text-bold">
                {sellTicketsData.eventsData.eventLocation}
              </div>
            </div>
            <div className="ml-20">
              <QrCodeSvg />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="bg-gray-100 m-2 p-4 rounded-lg font-bold">
              <p className="text-xs font-light">Catagory</p>
              {sellTicketsData.eventsData.eventCategory}
            </div>
            <div className="bg-gray-100 m-2 p-4 rounded-lg font-bold">
              <p className="text-xs font-light">Section</p>
              34
            </div>
            <div className="bg-gray-100 m-2 p-4 rounded-lg font-bold">
              <p className="text-xs font-light">Price</p>$
              {sellTicketsData.salePrice.price}
            </div>
          </div>
          <button
            className="mt-4 p-2 text-white bg-orange-600 hover:bg-orange-800 rounded-lg"
            onClick={handleMyAds}
          >
            My Ads
          </button>
        </div>
        <div className="bg-gray-100 flex flex-col p-4 m-4 items-center w-60">
          <GeneratedSvg />
          <div>
            Your ad will be published after it is reviewed by our moderators.
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayTicket;
