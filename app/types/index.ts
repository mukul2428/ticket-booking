export type userLogged = boolean;
export type loginInputs = {
  email: string;
  password: string;
  rememberMe: string;
};
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
};
