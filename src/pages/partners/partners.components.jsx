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
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Volunteer
          </a>
        </div>
      </div>
      <div className="row partnersLogo-wrap">
        <div className="col partner">
          <p>partner logo</p>
        </div>
        <div className="col partner">
          <p>partner logo</p>
        </div>
        <div className="col partner">
          <p>partner logo</p>
        </div>
      </div>
      <div className="row partnersStatment-wrap">
        <div className="row partnersStatment">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maxime
            cumque expedita culpa voluptate fugit molestiae mollitia voluptates
            temporibus dolores!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            sit aliquid facilis qui eos unde!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eos
            deserunt incidunt at omnis explicabo ipsam laboriosam doloremque
            quia provident.
          </p>
        </div>
      </div>
      <EmailForm title="Connect with us and inspire tomorrow’s innovators" />
    </div>
  );
};

export default Partners;
