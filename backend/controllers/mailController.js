import User from '../models/User.js';
import SentMail from '../models/SentMail.js';
import nodemailer from 'nodemailer';

export const sendMail = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const { to, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: user.smtp.host,
      port: user.smtp.port,
      secure: user.smtp.port === 465, // true for SSL, false for TLS
      auth: {
        user: user.smtp.user,
        pass: user.smtp.pass
      }
    });

    await transporter.sendMail({
      from: user.smtp.user,
      to,
      subject,
      text: message
    });

    // Save sent mail to DB
    await SentMail.create({
      userId: user._id,
      to,
      subject,
      message
    });

    res.status(200).json({ msg: 'Email sent successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Email sending failed', error: err.message });
  }
};
