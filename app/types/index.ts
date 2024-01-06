export type userLogged = boolean;
export type loginClicked = boolean;
export type loginInputs = {
  email: string;
  password: string;
  rememberMe: string;
};
export type signUpInputs = {
  fname: string;
  sname: string;
  email: string;
  password: string;
  phoneNo: number;
  becomeMember: boolean;
  sendMail: boolean;
  shareData: boolean;
};
export type priceInputs = {
  price: string;
};
export type eventDataInputs = {
  eventImage: string;
  eventName: string;
  eventLocation: string;
  eventDate: string;
  eventTime: string;
  eventCategory: string;
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
export type personalInfoInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber:number;
  address: string;
  country: string;
  province: string;
  postalCode: string;
};
export type bankInfoInputs = {
  cardOwner: string;
  cardType: string;
  cardNumber:number;
  month:number;
  year:number;
  cvv:number;
  accountOwner: string;
  iban: string;
  bic: string;
  myApporval: boolean;
};
export type SellTicketsInputs = {
  eventsData : {
    imageType: string;
    eventName: string;
    eventLocation: string;
    eventDate: string;
    eventTime: string;
    eventCategory: string;
  }
  ticketData : {
    noOfTickets: number;
    ticketFormat: string;
    ticketLocation: string;
    ticketQueue: string;
    restrictions: string[];
    advantages: string[];
    readyTicket: boolean;
  },
  salePrice: {
    price: string;
  };
  personalInformation:{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    address: string;
    country: string;
    province: string;
    postalCode: string;
  }
  bankInformation:{
    cardOwner: string;
    cardType: string;
    cardNumber: number;
    month: number;
    year: number;
    cvv: number;
    accountOwner: string;
    iban: string;
    bic: string;
    myApporval: boolean;
  }
}
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
