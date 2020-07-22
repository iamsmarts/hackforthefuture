import React from "react";

import "./partners.styles.scss";
const Partners = () => {
  return (
    <div className="container-full partners">
      <div className="row partnersHero-wrap heros">
        <div className="col partnersHeroContent">
          <img
            className="hero-rocket"
            src="./images/partners/rocket.png"
            alt=""
          />
          <p>
            Your support today <br />
            changes the world of tomorrow
          </p>
        </div>
      </div>
      <div className="row partnersLogo-wrap">
        <div className="row partner-copy">
          <p>
            <strong>
              Our program would not be possible without the support and
              collaboration with these organizations and many others
            </strong>
          </p>
        </div>
        <div className="partners-logos row justify-content-md-center">
          <div className="col-6 col-md-4 partner">
            <img
              src="./images/partners/ct-partner-logo.png"
              alt="Partners Logo"
            />
          </div>
          <div className="col-6 col-md-4 partner">
            <img
              src="./images/partners/cs4-philly-partner-logo.png"
              alt="Partners Logo"
            />
          </div>
          <div className="col-6 col-md-4 partner">
            <img
              src="./images/partners/ed-partner-logo.png"
              alt="Partners Logo"
            />
          </div>
          <div className="col-6 col-md-4 partner">
            <img
              src="./images/partners/latinx-partner-logo.png"
              alt="Partners Logo"
            />
          </div>
        </div>
      </div>
      <div className="row partnersStatment-wrap">
        <div className="row partnersStatment">
          <p>
            The world is now a very different place than it was a few months
            ago. Students have been greatly impacted from their education to
            their day-to-day lives. Many students are indoors and with limited
            chances to better themselves. With your support we will give
            students a break from their Covid routines and take a step in a new
            direction.
          </p>

          <p>
            Hack To The Future is a pop-up virtual code camp. For three hours
            each day over a four day period, students will be introduced to
            programming, in small groups through project-based learning. Each
            group will be connected through video and chat. There will also be
            guest speakers to help students understand the world of technology
            and what coding can allow them to do. Resources will be provided to
            students at the end of the program to help them continue on their
            journey afterward. We are on a mission to introduce students to the
            possibilities in tech, and empower the creators of the future!
          </p>
        </div>
      </div>
      <div className="row partners-footer">
        <p>
          If you are interested in supporting our program or partnering with us
          please email <br />
          <strong>
            <a href="mailto:info@hacktothefuture.org">
              info@hacktothefuture.org
            </a>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Partners;
