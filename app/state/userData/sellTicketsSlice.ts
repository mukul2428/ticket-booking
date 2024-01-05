import {
  SellTicketsInputs,
  bankInfoInputs,
  eventDataInputs,
  personalInfoInputs,
  priceInputs,
  ticketDataInputs,
} from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: SellTicketsInputs = {
  eventsData: {
    imageType: "",
    eventName: "",
    eventLocation: "",
    eventDate: "",
    eventTime: "",
    eventCategory: "",
  },
  ticketData: {
    noOfTickets: 0,
    ticketFormat: "",
    ticketLocation: "",
    ticketQueue: "",
    restrictions: [],
    advantages: [],
    readyTicket: false,
  },
  salePrice: {
    price: "",
  },
  personalInformation: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    address: "",
    country: "",
    province: "",
    postalCode: "",
  },
  bankInformation: {
    cardOwner: "",
    cardType: "",
    cardNumber: 0,
    month: 0,
    year: 0,
    cvv: 0,
    accountOwner: "",
    iban: "",
    bic: "",
    myApporval: false,
  },
};

const userSlice = createSlice({
  name: "sellTickets",
  initialState,
  reducers: {
    setEventData: (state, action: PayloadAction<eventDataInputs>) => {
      state.eventsData.imageType = action.payload.eventImage;
      state.eventsData.eventName = action.payload.eventName;
      state.eventsData.eventLocation = action.payload.eventLocation;
      state.eventsData.eventDate = action.payload.eventDate;
      state.eventsData.eventTime = action.payload.eventTime;
      state.eventsData.eventCategory = action.payload.eventCategory;
    },
    setTicketData: (state, action: PayloadAction<ticketDataInputs>) => {
      state.ticketData.noOfTickets = action.payload.noOfTickets;
      state.ticketData.ticketFormat = action.payload.ticketFormat;
      state.ticketData.ticketLocation = action.payload.ticketLocation;
      state.ticketData.ticketQueue = action.payload.ticketQueue;
      state.ticketData.restrictions = action.payload.restrictions;
      state.ticketData.advantages = action.payload.advantages;
      state.ticketData.readyTicket = action.payload.readyTicket;
    },
    setPrice: (state, action: PayloadAction<priceInputs>) => {
      state.salePrice.price = action.payload.price;
    },
    setPersonalInfo: (state, action: PayloadAction<personalInfoInputs>) => {
      state.personalInformation.firstName = action.payload.firstName;
      state.personalInformation.lastName = action.payload.lastName;
      state.personalInformation.email = action.payload.email;
      state.personalInformation.phoneNumber = action.payload.phoneNumber;
      state.personalInformation.address = action.payload.address;
      state.personalInformation.country = action.payload.country;
      state.personalInformation.province = action.payload.province;
      state.personalInformation.postalCode = action.payload.postalCode;
    },
    setBankInfo: (state, action: PayloadAction<bankInfoInputs>): void => {
      state.bankInformation.cardOwner = action.payload.cardOwner;
      state.bankInformation.cardType = action.payload.cardType;
      state.bankInformation.cardNumber = action.payload.cardNumber;
      state.bankInformation.month = action.payload.month;
      state.bankInformation.year = action.payload.year;
      state.bankInformation.cvv = action.payload.cvv;
      state.bankInformation.accountOwner = action.payload.accountOwner;
      state.bankInformation.iban = action.payload.iban;
      state.bankInformation.bic = action.payload.bic;
      state.bankInformation.myApporval = action.payload.myApporval;
    },
  },
});

//we can now directly access the actions
export const {
  setEventData,
  setTicketData,
  setPrice,
  setPersonalInfo,
  setBankInfo,
} = userSlice.actions;

export default userSlice.reducer;
