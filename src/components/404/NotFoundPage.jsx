import React from "react";
import Button from "../button/Button";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div>
      <div className="not-found-page">
        <div className="not-found-wrapper">
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Button buttonLabel="Go back to home" buttonURL="/" isInverted />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
