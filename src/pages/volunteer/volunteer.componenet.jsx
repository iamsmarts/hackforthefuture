import React from "react";
import "./volunteer.styles.scss";
const Volunteer = () => {
  return (
    <div className="container-full volunteer">
      <div className="row volunteeHero-wrap heros">
        <div className="col vHeroContent">
          <div className="row">
            <div className="col vIllustration">
              <img src="./images/volunteer/volunteer-icon.png" alt="" />
            </div>
            <div className="col vHeroCopy">
              <h1>Got Skills?</h1>
              <p>Lead the coders of tomorrow into the world of tech</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row vBrackets">
        <div className="bracketsCopy">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            laudantium obcaecati molestias. Ullam, voluptas illo voluptatibus,
            in, corrupti beatae quia minus quae iure dolor eum?
          </p>
        </div>
      </div>
      <div className="row vBottomCopy">
        <div className="col bCopyImage"></div>
        <div className="col bCopy">
          <p>
            Duis convallis convallis tellus id interdum. Venenatis a condimentum
            vitae sapien. Purus in massa tempor nec feugiat nisl. Massa
            tincidunt dui ut ornare. Cras fermentum odio eu feugiat. Lectus
            vestibulum mattis ullamcorper velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
