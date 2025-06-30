import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";
import smtpRoutes from './routes/smtpRoutes.js';



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/smtp', smtpRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/mail", mailRoutes); // we'll define this next

app.listen(process.env.PORT || 8001, () => {
  console.log("Server running on port 8001");
});
