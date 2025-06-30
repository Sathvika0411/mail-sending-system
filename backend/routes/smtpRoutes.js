import express from "express";
import { updateSMTP } from "../controllers/smtpController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.put("/update", verifyToken, updateSMTP);

export default router;
