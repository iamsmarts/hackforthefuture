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
              <p>Applications Close July 15th</p>
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
          <img src="./images/participate/Timeline.png" alt="" />
        </div>
      </div>
      <div className="row participateRubric-wrap">
        <div className="rubric">
          <div className="rIcon">
            <img src="./images/participate/alyssa.png" alt="" />
          </div>
          <div className="rCopy">
            <h3>Just 4 Days</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium, accusamus sint. Beatae, quos. Laborum, fugit.
            </p>
          </div>
        </div>

        <div className="rubric">
          <div className="rIcon">
            <img src="./images/participate/jordanne.png" alt="" />
          </div>
          <div className="rCopy">
            <h3>Become Coder By Dinner Time (?)</h3>
            <p>
              Classes are from <strong>10am to 1pm PST</strong>, so no eed to
              get out of bed early. Laudantium, accusamus sint. Beatae, quos.
              Laborum, fugit.
            </p>
          </div>
        </div>
      </div>
      <div className="row participateFooter-wrap">
        <div className="col participateFooter">
          <p>Have Questions?</p>
          <h4>
            Email us at <a href="mailto:something@something.com">_____@___</a>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Participate;
