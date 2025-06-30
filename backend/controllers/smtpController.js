import User from "../models/User.js";

export const updateSMTP = async (req, res) => {
  const { host, port, user, pass } = req.body;
  try {
    await User.findByIdAndUpdate(req.userId, {
      smtp: { host, port, user, pass }
    });
    res.json({ msg: "SMTP settings updated" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
