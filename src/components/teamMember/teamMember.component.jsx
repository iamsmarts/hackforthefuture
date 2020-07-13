import React from "react";
import "./teamMember.styles.scss";

const TeamMember = ({ bkg, title }) => {
  console.log(bkg);
  let memBkg = {
    backgroundImage: `url(./images/home/${bkg})`,
  };
  return (
    <div className="col team-member">
      <div className="member-photo" style={memBkg}></div>
      <div className="member-desc">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TeamMember;
