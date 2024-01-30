import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Please provide a first name"],
  },
  sname: {
    type: String,
    required: [true, "Please provide a last name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  phoneNo: {
    type: Number,
    required: [true, "Please provide a phone number"],
  },
  becomeMember: {
    type: Boolean,
    default: false,
  },
  sendMail: {
    type: Boolean,
    default: false,
  },
  shareData: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.model.users || mongoose.model("users", userSchema);

export default User;
