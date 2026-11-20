import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TbSend } from "react-icons/tb";
import "./Form.css";

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    emailjs
      .sendForm("service_bqnabgj", "template_mmkqbbo", form.current, {
        publicKey: "SQBgJ-BGYb3EtOVWk",
      })
      .then(
        () => {
          setStatus({ type: "success", message: "Thanks! Your request has been sent. We'll get back to you shortly." });
          form.current.reset();
        },
        (error) => {
          setStatus({ type: "error", message: "Failed to send the message, please try again." });
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <div className="form-wrapper">
      <form ref={form} onSubmit={sendEmail} className="quote-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="from_name">Full Name</label>
            <input id="from_name" type="text" name="from_name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label htmlFor="from_number">Phone Number</label>
            <input id="from_number" type="tel" name="from_number" placeholder="+1 234 567 890" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="from_email">Email Address</label>
          <input id="from_email" type="email" name="from_email" placeholder="you@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Tell us about your project</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Property type, monthly bill, roof size, what you'd like to power..."
            required
          />
        </div>
        <button type="submit" className="form-submit" disabled={sending}>
          {sending ? "Sending..." : "Request My Free Quote"} <TbSend />
        </button>
      </form>
      {status.message && (
        <p className={`form-message ${status.type}`}>{status.message}</p>
      )}
    </div>
  );
};

export default Form;
