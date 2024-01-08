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
    eventImage: "",
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

const sellTicketSlice = createSlice({
  name: "sellTickets",
  initialState,
  reducers: {
    setEventData: (state, action: PayloadAction<eventDataInputs>) => {
      state.eventsData = action.payload;
    },
    setTicketData: (state, action: PayloadAction<ticketDataInputs>) => {
      state.ticketData = action.payload;
    },
    setPrice: (state, action: PayloadAction<priceInputs>) => {
      state.salePrice = action.payload;
    },
    setPersonalInfo: (state, action: PayloadAction<personalInfoInputs>) => {
      state.personalInformation = action.payload;
    },
    setBankInfo: (state, action: PayloadAction<bankInfoInputs>) => {
      state.bankInformation = action.payload;
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
} = sellTicketSlice.actions;

export default sellTicketSlice.reducer;
