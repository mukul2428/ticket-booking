import { Dispatch, SetStateAction} from 'react';
export type userLogged = boolean;
export type loginClicked = boolean;
export type loginInputs = {
  email: string;
  password: string;
  rememberMe: string;
};
export type eventDataInputs = {
  eventName: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  selectedCategory: string;
}
export type ticketDataInputs = {
  noOfTickets: number;
  ticketFormat: string;
  ticketLocation: string;
  ticketQueue: string;
  restrictions: string[];
  advantages: string[];
  readyTicket: boolean;
}
export type userState = {
  loggedIn: boolean;
  email: string;
  password: string;
  rememberMe: boolean;
};
export type eventsData = {
  id: number;
  imageType: string;
  eventName: string;
  eventLocation: string;
  eventTime: string;
  eventDay: string;
  eventTickets: string;
  eventPrice: string;
  eventCategory: string;
};
