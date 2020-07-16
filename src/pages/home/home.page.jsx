import React from "react";
import EmailForm from "../../components/email-form/email-form.component";
import "./home.styles.scss";
const Home = () => {
  return (
    <div className="container-ful home">
      <div className="row homeHero-wrap heros">
        <div className="col homeHero">
          <h2>4 Day Coding Camp</h2>
          <p>July 27th - July 30th</p>
          <p>Applications Are Open!</p>
          <a
            href="https://httf2020.typeform.com/to/Bmp1dvII"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start!
          </a>
        </div>
      </div>
      <div className="row homeCopy-wrap">
        <div className="col homeCopy">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem ad facere necessitatibus atque eligendi corrupti
            quisquam fugiat neque, delectus, nam earum voluptate odio veniam
            officiis illo. Saepe nulla sunt libero!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ,
            quasi, error quidem blanditiis reiciendis. Neque, facilis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            error cum maiores asperiores vero optio exercitationem cupiditate at
            recusandae eius aspernatur dolore natus, numquam temporibus
          </p>
        </div>
      </div>
      <EmailForm title="Stay up to date" />
    </div>
  );
};

export default Home;
