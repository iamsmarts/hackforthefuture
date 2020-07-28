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
                href="https://forms.gle/hykEZ6vYKRYsmErn9"
                target="_blank"
                rel="noopener noreferrer"
                className="v-cta"
              >
                <strong>Volunteer Now</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row vBrackets">
        <div className="bracketsCopy">
          <h3> We Need Your Help</h3>
          <p>
            {" "}
            Covid-19 has changed everyone’s life and students are sitting idle
            with limited opportunities. We thought it would be a great idea to
            do something positive this summer by creating a pop-up virtual code
            camp called Hack to the Future.
          </p>
          <p>
            {" "}
            Hack To The Future is a pop-up virtual code camp focused on
            introducing high school students of color to coding. Our program
            would not be possible without volunteers. If you are passionate
            about programming and want to empower youth to be the creators of
            the future please join us!{" "}
          </p>
          <p>
            {" "}
            The program will take place from August 10 - 13, 10am-1pm PST /
            1pm-4pm EST each day. If you want to volunteer, complete this short{" "}
            <strong>
              <a
                href="https://forms.gle/hykEZ6vYKRYsmErn9"
                target="_blank"
                rel="noopener noreferrer"
              >
                survey
              </a>{" "}
              by July 29th.
            </strong>{" "}
            Once completed, we’ll send you some instructions to complete a quick
            training assessment that will help us tailor a volunteer training
            session leading up to Hack to the Future.
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
            <a href="mailto:info@hacktothefuture.org">
              info@hacktothefuture.org
            </a>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
