import { createContext } from "react";
import { eventsData, teamsData } from "../types";

export const EventContext = createContext<eventsData>({
  id: 0,
  imageType: "",
  eventName: "",
  eventLocation: "",
  eventTime: "",
  eventDay: "",
  eventTickets: "",
  eventPrice: "",
  eventCategory: "",
});

export const TeamContext = createContext<teamsData>({
  id: 0,
  imageType: "",
  teamName: "",
});
