// models/SentMail.js
import mongoose from "mongoose";

const sentMailSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  to: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("SentMail", sentMailSchema);
