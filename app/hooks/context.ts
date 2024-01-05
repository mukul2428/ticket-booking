import { createContext } from "react";
import { eventsData } from "../types";

export const EventContext = createContext<eventsData>({
    id: 0,
    imageType: "",
    eventName: "",
    eventLocation: "",
    eventTime: "",
    eventDay: "",
    eventTickets: "",
    eventPrice: "",
});
