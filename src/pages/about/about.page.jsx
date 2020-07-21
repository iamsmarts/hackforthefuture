import React from "react";

import TeamMember from "../../components/teamMember/teamMember.component";
import TeamMembers from "../../team";
import "./about.styles.scss";
const About = () => {
  console.log(TeamMembers);
  const team = TeamMembers.map((member, i) => {
    return (
      <TeamMember
        bkg={member.photo}
        name={member.name}
        title={member.title}
        key={i}
      />
    );
  });

  return (
    <div className="container-full about">
      <div className="row aboutHero-wrap heros">
        <div className="col aboutHero">
          <h2>Hack To The Future</h2>
          <div className="heroCopy">
            <div className="copyCont">
              <p>
                We are all living in a moment like no other. With the school
                semester being forced online and having little opportunity to
                progress themselves, students in particular have been hit hard.
                <em> Hack to the Future</em> is a reaction to this moment in
                time. We are a pop-up virtual coding camp focused on introducing
                high school students of color to programming and the world of
                technology.
              </p>
              <p>
                For three hours each day over a four day period, students will
                be introduced to programming, in small groups through project
                based learning. Each group will be connected through video and
                chat. There will also be guest speakers to help students
                understand the world of technology and what coding can allow
                them to do. Resources will be provided to students at the end of
                the program to help them continue on their journey afterwards.
              </p>
            </div>
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
            <strong>Apply!</strong>
          </a>
        </div>
        <div className="col cta-buttons partner">
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Partner
          </a>
        </div>
      </div>
      <div className="row aboutTeam-wrap">
        <div className="row about-copy-update">
          <p>
            Hack To The Future is a volunteer lead effort. The core team of
            volunteers combined has more than 100 years of programming
            experience and has spent thousands of hours teaching programming to
            youth. The founder of Hack To The Future previously started the
            non-profit <em>CodeNow</em> which introduced more than 2,000 high
            school students to programming. The program would not be possible
            without the passion and commitment of our volunteers!
          </p>
        </div>
        <h3>Our All Start Team</h3>
        <div className="row teamMember-wrap">{team}</div>
      </div>
    </div>
  );
};

export default About;
