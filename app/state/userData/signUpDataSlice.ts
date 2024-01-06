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
    },
  },
});

//we can now directly access the actions
export const { signUp } = userSlice.actions;

export default userSlice.reducer;
