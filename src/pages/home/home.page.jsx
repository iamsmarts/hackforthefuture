import React from "react";
import EmailForm from "../../components/email-form/email-form.component";
import "./home.styles.scss";
const Home = () => {
  return (
    <div className="container-ful home">
      <div className="row homeHero-wrap heros">
        <div className="col homeHero">
          <h2>Pop-up Virtual Code Camp</h2>
          <p>August 10th - August 13th</p>
          <p>Applications Are Open!</p>
          <a
            href="https://httf2020.typeform.com/to/Bmp1dvII"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Here
          </a>
        </div>
      </div>
      <div className="row homeCopy-wrap">
        <div className="col homeCopy">
          <p className="statement">
            <strong>
              {" "}
              We are a pop-up virtual coding camp focused on introducing high
              school students of color to the world of programming and tech.{" "}
            </strong>
          </p>

          <p>
            In this time of COVID 19 and students sitting idle with limited
            opportunity, we wanted to do something positive. Hack to the Future
            is a 4 day coding bootcamp. Whether you are into art or video games
            coding is part of almost every aspect of the world. Our goal is to
            introduce high school students of color who have little to no
            programming experience to the field of technology, in a fun
            interactive way.{" "}
          </p>

          <p>
            From August 10th- 13th between 10a - 1p PST/ 1p -4p EST, students
            will be introduced to the world of coding through project-based
            learning in small groups. There will also be guest speakers to
            understand the world of tech and what this new superpower can allow
            you to do.{" "}
          </p>

          <p>
            <strong>
              Applications are now open and close on July 31st. Space is
              limited. Apply now!
            </strong>
          </p>
        </div>
      </div>
      <EmailForm title="Stay up to date" />
    </div>
  );
};

export default Home;
