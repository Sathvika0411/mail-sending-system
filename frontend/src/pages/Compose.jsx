import { useState } from "react";
import axios from "../utils/axiosInstance";
import "./Compose.css";

const Compose = () => {
  const [mail, setMail] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/mail/send", mail, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      alert("Email sent successfully");
      setMail({ to: "", subject: "", message: "" });
    } catch (err) {
      alert(err.response?.data?.msg || "Failed to send mail");
    }
  };

  return (
    <div className="compose-container">
      <h2>Compose Mail</h2>
      <form onSubmit={handleSend} className="compose-form">
        <input
          type="email"
          placeholder="To"
          value={mail.to}
          onChange={(e) => setMail({ ...mail, to: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          value={mail.subject}
          onChange={(e) => setMail({ ...mail, subject: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          value={mail.message}
          onChange={(e) => setMail({ ...mail, message: e.target.value })}
          rows={6}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Compose;
