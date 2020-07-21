import React from "react";

import EmailForm from "../../components/email-form/email-form.component";
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
            Our program would not be possible without the support and
            collaboration with these organizations and many others
          </p>
        </div>
        <div className="col partner">
          <img src="./images/partners/ct-partner-logo.png" />
        </div>
        <div className="col partner">
          <img src="./images/partners/cs4-philly-partner-logo.png" />
        </div>
        <div className="col partner">
          <img src="./images/partners/ed-partner-logo.png" />
        </div>
        <div className="col partner">
          <img src="./images/partners/latinx-partner-logo.png" />
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
            Hack To The Future is a pop-up coding bootcamp, but our team has
            years of programming and teaching experience. Our volunteers have
            come together because they all understand the impact tech education
            and coding has had on their lives and they want to do the same for
            others. We are on a mission and, together, we can introduce students
            to the possibilities in tech, and empower the creators of the
            future!
          </p>
        </div>
      </div>
      <div className="row partners-footer">
        <p>
          If you are interested in supporting our program or partnering with us
          please email <br />
          <strong>
            <a href="mailto:info@hactothefuture.org">info@hactothefuture.org</a>
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Partners;
