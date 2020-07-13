import React from "react";

import TeamMember from "../../components/teamMember/teamMember.component";
import "./about.styles.scss";
const About = () => {
  let members = [
    { photo: "Alyssa_2.png", title: "Lorem ipsum dolor sit amet, consectetur" },
    {
      photo: "Jordanne_2.png",
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
    { photo: "Alyssa_2.png", title: "Lorem ipsum dolor sit amet, consectetur" },
    {
      photo: "Jordanne_2.png",
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
    { photo: "Alyssa_2.png", title: "Lorem ipsum dolor sit amet, consectetur" },
    {
      photo: "Jordanne_2.png",
      title: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];
  members = members.map((member, i) => {
    return <TeamMember bkg={member.photo} title={member.title} key={i} />;
  });

  return (
    <div className="container-full about">
      <div className="row aboutHero-wrap heros">
        <div className="col aboutHero">
          <h2>Hack To The Future</h2>
          <div className="heroCopy">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              quis consectetur repellendus consequatur provident voluptatum
              veritatis eos perferendis sit, amet aspernatur ea voluptate.
              Dolorum, corrupti?
            </p>
          </div>
        </div>
      </div>
      <div className="row aboutCtas-wrap">
        <div className="col cta-buttons volunteer">
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Volunteer
          </a>
        </div>
        <div className="col cta-buttons apply">
          <a
            href="https://httf2020.typeform.com/to/Bmp1dvII"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply!
          </a>
        </div>
        <div className="col cta-buttons partner">
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Partner
          </a>
        </div>
      </div>
      <div className="row aboutTeam-wrap">
        <h3>Our All Start Team</h3>
        <div className="row teamMember-wrap">{members}</div>
      </div>
    </div>
  );
};

export default About;
