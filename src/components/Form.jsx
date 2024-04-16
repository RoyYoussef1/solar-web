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
            {/* <label>Name</label> */}
            <input type="text" name="from_name" placeholder="Full Name"/>
          </div>
          <div className="form-group">
            {/* <label>Email</label> */}
            <input type="email" name="from_email" placeholder="Email Address"/>
          </div>
          <div className="form-group">
            {/* <label>Phone Number</label> */}
            <input type="number" name="from_email" placeholder="Phone Number"/>
          </div>
          <div className="form-group">
            {/* <label>Message</label> */}
            <textarea name="message" placeholder="Message"/>
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
