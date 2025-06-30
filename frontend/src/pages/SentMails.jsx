import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import "./SentMails.css";

const SentMails = () => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const res = await axios.get("/mail/sent", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setMails(res.data);
      } catch (err) {
        alert("Failed to load sent mails");
      }
    };

    fetchMails();
  }, []);

  return (
    <div className="sent-container">
      <h2>Sent Mails</h2>
      {mails.length === 0 ? (
        <p className="no-mails">No mails found</p>
      ) : (
        <div className="mail-list">
          {mails.map((mail) => (
            <div className="mail-card" key={mail._id}>
              <p><strong>To:</strong> {mail.to}</p>
              <p><strong>Subject:</strong> {mail.subject}</p>
              <p><strong>Date:</strong> {new Date(mail.date).toLocaleString()}</p>
              <p className="mail-message">{mail.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SentMails;
