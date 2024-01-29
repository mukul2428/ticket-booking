import mongoose from "mongoose";

export async function connect() {
  // process.env.MONGODB_URI! , here "!" means MONGODB_URI will always be available
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const connection = await mongoose.connection;
    connection.on("connection", () => {
      console.log("MongoDB connected Successfully!");
    });
    connection.on("error", (err) => {
      console.log("MongoDB connection Error" + err);
      process.exit();
    });
  } catch (err) {
    console.log("Something went wrong");
    console.log(err);
  }
}
