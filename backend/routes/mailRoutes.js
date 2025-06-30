import express from 'express';
import SentMail from '../models/SentMail.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/sent', verifyToken, async (req, res) => {
  try {
    const mails = await SentMail.find({ userId: req.userId }).sort({ date: -1 });
    res.json(mails);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to load sent mails' });
  }
});

export default router;
