import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bqnabgj", "template_mmkqbbo", form.current, {
        publicKey: "SQBgJ-BGYb3EtOVWk",
      })
      .then(
        () => {
          setMessage("Your message has been sent successfully!");
          form.current.reset(); 
        },
        (error) => {
          setMessage("Failed to send the message, please try again."); 
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <div className="form-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" name="from_name" placeholder="Full Name" required/>
          </div>
          <div className="form-group">
            <input type="email" name="from_email" placeholder="Email Address" required/>
          </div>
          <div className="form-group">
            <input type="tel" name="from_number"  placeholder="Phone Number" required/>
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" required/>
          </div>
          <div className="form-group send-group">
            <input type="submit" value="Send" />
          </div>
        </form>
        {message && <p className="form-message">{message}</p>}
      </div>
    </div>
  );
};

export default Form;
