import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wro64or", "template_jfzpyol", form.current, {
        publicKey: "N_Y03DkjfJseq_0pG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
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
      </div>
    </div>
  );
};

export default Form;
