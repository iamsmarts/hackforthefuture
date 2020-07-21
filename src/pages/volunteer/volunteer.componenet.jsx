import React from "react";
import "./volunteer.styles.scss";
const Volunteer = () => {
  return (
    <div className="container-full volunteer">
      <div className="row volunteeHero-wrap heros">
        <div className="col vHeroContent">
          <div className="row">
            <div className="col vIllustration">
              <img src="./images/volunteer/Volunteer_Header_Icons.png" alt="" />
            </div>
            <div className="col vHeroCopy">
              <h1>Got Skills?</h1>
              <p>Lead the coders of tomorrow into the world of tech today</p>
              <a
                href="https://httf2020.typeform.com/to/Bmp1dvII"
                target="_blank"
                rel="noopener noreferrer"
                className="v-cta"
              >
                <strong>Apply Now</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row vBrackets">
        <div className="bracketsCopy">
          <h3>We all started somewhere</h3>
          <p>
            You saw programming and computer science and you pursued it! Now you
            can use your coding skills to help create a new wave of coders,
            innovators, and problem solvers.
          </p>

          <p>
            Video games, animated films, and even some music were made with code
            by people who started out curious about technology, just like you.
            By volunteering with Hack To The Future, you will be able to fan the
            flame or even light the spark of students all across the country.
            Covid-19 has changed everyone's life and has left many students
            sitting idle with limited opportunities. We thought it would be a
            great idea to do something positive this summer by creating a pop-up
            virtual code camp, and we want you to be a part of it.
          </p>
        </div>
      </div>
      <div className="row vBottomCopy">
        <div className="col bCopyImage">
          <img src="./images/volunteer/volunteer-icon.png" alt="" />
        </div>
        <div className="col bCopy">
          <p>
            Hack to the Future will be from August 10 - 13, 10am-1pm PST /
            1pm-4pm EST each day. If you’re interested in volunteering please
            complete our short survey by July 29th. Once completed, we’ll send
            you some instructions to complete a quick training
          </p>
        </div>
      </div>
      <div className="row participateFooter-wrap">
        <div className="col participateFooter">
          <p>Have Questions?</p>
          <h4>
            Email us at{" "}
            <a href="mailto:info@hactothefuture.org">info@hactothefuture.org</a>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
