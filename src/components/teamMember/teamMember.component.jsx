import React from "react";
import "./teamMember.styles.scss";

const TeamMember = ({ bkg, name, title }) => {
  let memBkg = {
    backgroundImage: `url(./images/volunteer/volunteer-photos/${bkg})`,
  };
  return (
    <div className="col team-member">
      <div className="member-photo" style={memBkg}></div>
      <div className="member-desc">
        <p className="teamName">
          <strong>{name}</strong>
        </p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TeamMember;
