import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="main container-fluid">
      <div className="container-fluid header">
        <div className="header_logo">
          <img src="./images/httf-logo-icon.png" alt="" />
        </div>
        <div className="header_title">
          <h1>Hack To The Future</h1>
        </div>
      </div>

      <div className="container-fluid content">
        <div className="row">
          <div className="content_info col align-self-center">
            <h2>Hack To The Future</h2>
            <p>A Virtual Coding Bootcamp</p>
            <p className="date">July 27 - 30th</p>
          </div>
        </div>
        <div className="row">
          <div className="content_apply col align-self-center">
            <p>Student Applications Are Now Open</p>
            <a
              href="https://httf2020.typeform.com/to/Bmp1dvII"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        </div>
        <div className="row">
          <div className="content_email-collection col align-self-center">
            <p>Stay Up to Date on this Event</p>
            <form>
              <input type="email" placeholder="Please Enter Email" />
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row social-wrap">
          <div className="col social align-self-end">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/twt-icon.png" alt="" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./images/ig-icon.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="rocket">
        <img
          src="./images/httf-logo.png"
          alt="Hack To The Future Rocket Logo"
        />
      </div>
      <div className="container-fluid footer">
        <p>&copy; Copyright Hack To The Future 2020</p>
      </div>
    </div>
  );
}

export default App;
