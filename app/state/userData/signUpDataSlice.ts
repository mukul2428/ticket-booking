import { signUpInputs } from "@/app/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: signUpInputs = {
  fname: "",
  sname: "",
  email: "",
  password: "",
  phoneNo: 0,
  becomeMember: false,
  sendMail: false,
  shareData: false,
  userType: "Seller",
};

const userSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signUp: (state, action: PayloadAction<signUpInputs>) => {
      state.fname = action.payload.fname;
      state.sname = action.payload.sname;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.phoneNo = action.payload.phoneNo;
      state.becomeMember = action.payload.becomeMember;
      state.sendMail = action.payload.sendMail;
      state.shareData = action.payload.shareData;
      state.userType = action.payload.userType;
    },
    clearSignUp: (state) => {
      state.fname = "";
      state.sname = "";
      state.email = "";
      state.password = "";
      state.phoneNo = 0;
      state.becomeMember = false;
      state.sendMail = false;
      state.shareData = false;
      state.userType = "Seller";
    }
  },
});

//we can now directly access the actions
export const { signUp, clearSignUp } = userSlice.actions;

export default userSlice.reducer;
