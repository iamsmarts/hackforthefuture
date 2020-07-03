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
            <p>July 27 - 30th</p>
          </div>
        </div>
        <div className="row">
          <div className="content_apply col align-self-center">
            <p>Student Applications Are Now Open</p>
            <button>Apply Now</button>
          </div>
        </div>
        <div className="row">
          <div className="content_email-collection col align-self-center">
            <p>Stay Up to Date on this Event</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
