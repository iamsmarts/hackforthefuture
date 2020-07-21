import React from "react";

import "./participate.styles.scss";
const Participate = () => {
  return (
    <div className="container-fluid participate">
      <div className="row participateHero-wrap heros">
        <div className="heroContent-wrap">
          <div className="col hero-logo">
            <img src="./images/participate/participate-hero-logo.png" alt="" />
          </div>
          <div className="col hero-content">
            <div className="row heroContent-pillars"></div>
            <div className="row heroContent-title">
              <h2>Apply Today!</h2>
              <p>Applications Close July 31st</p>
            </div>
            <div className="row heroContent-cta">
              <a
                href="https://httf2020.typeform.com/to/Bmp1dvII"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row participateContent-timeline">
        <div className="col">
          <img src="./images/participate/Timeline-updated.png" alt="" />
        </div>
      </div>
      <div className="row participateRubric-wrap">
        <div className="rubric">
          <div className="rIcon">
            <img src="./images/participate/alyssa-update.png" alt="" />
          </div>
          <div className="rCopy">
            <h3>Just 4 Days</h3>
            <p>
              Are you into gaming, animation, or music? Enter the world of
              programming the fun and interactive way. Each day you will be
              building a project in a small group, hearing from guest speakers
              to help you understand the world of tech, and connecting with
              other students who may have similar interests. No coding
              experience? No problem, you are the type of students we want to be
              part of our program
            </p>
          </div>
        </div>

        <div className="rubric">
          <div className="rIcon">
            <img src="./images/participate/jordanne-update.png" alt="" />
          </div>
          <div className="rCopy">
            <h3>Become Coder By Dinner Time (?)</h3>
            <p>
              Classes are from 10am to 1pm PST, so no need to get out of bed
              early (unless you are on the east coast, you can still get out of
              bed late). We want to show you the possibilities of coding and
              where it can take you. Worse case, it will be a nice break from
              your COVID routine! Hope you will join us. It’s an opportunity for
              you to get a head start on your tech journey.
            </p>
          </div>
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

export default Participate;
