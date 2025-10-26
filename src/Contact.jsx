import React, { useState } from "react";
import "./App.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("https://formspree.io/f/xgvpewan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus("✅ Sent — thank you!");
        setName(""); setEmail(""); setMessage("");
      } else {
        setStatus("❌ Send failed.");
      }
    } catch (err) {
      setStatus("❌ Send error.");
    }
  };

  return (
    <div className="contactform-container">
      <h2>📬 Contact Us</h2>
      <form onSubmit={handleSubmit} className="contactform-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send</button>
        {status && <p className="status">{status}</p>}
      </form>
    </div>
  );
}
