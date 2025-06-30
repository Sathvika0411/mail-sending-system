import { useState } from "react";
import axios from "../utils/axiosInstance";
import "./SMTPSettings.css";

const SMTPSettings = () => {
  const [smtp, setSmtp] = useState({
    host: "",
    port: "",
    user: "",
    pass: "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/smtp/update", smtp, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      alert("SMTP settings updated successfully");
    } catch (err) {
      alert(err.response?.data?.msg || "Update failed");
    }
  };

  return (
    <div className="smtp-container">
      <h2>SMTP Settings</h2>
      <form onSubmit={handleUpdate} className="smtp-form">
        <input
          placeholder="SMTP Host"
          onChange={(e) => setSmtp({ ...smtp, host: e.target.value })}
          required
        />
        <input
          placeholder="SMTP Port"
          type="number"
          onChange={(e) => setSmtp({ ...smtp, port: e.target.value })}
          required
        />
        <input
          placeholder="SMTP Email"
          onChange={(e) => setSmtp({ ...smtp, user: e.target.value })}
          required
        />
        <input
          placeholder="SMTP Password"
          type="password"
          onChange={(e) => setSmtp({ ...smtp, pass: e.target.value })}
          required
        />
        <button type="submit">Update SMTP</button>
      </form>
    </div>
  );
};

export default SMTPSettings;
