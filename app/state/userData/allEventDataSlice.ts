import { allEventsInputs } from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

type allEventTicketsType = allEventsInputs[];

const initialState: allEventTicketsType = [
  {
    id: uuidv4(),
    eventsData: {
      eventImage: null,
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
  },
];

const allEventsSlice = createSlice({
  name: "allEvents",
  initialState,
  reducers: {
    setAllEventData: (state, action: PayloadAction<allEventsInputs>) => {
      const newEvent = {
        ...action.payload,
      };
      if (state[0].eventsData.eventImage === null) {
        state[0] = newEvent;
      } else {
        return [newEvent, ...state];
      }
    },
  },
});

//we can now directly access the actions
export const { setAllEventData } = allEventsSlice.actions;

export default allEventsSlice.reducer;
