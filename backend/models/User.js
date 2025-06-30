// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  smtp: {
    host: String,
    port: Number,
    user: String,
    pass: String
  }
});

export default mongoose.model("User", userSchema);
