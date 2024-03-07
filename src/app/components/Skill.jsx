import React from "react";

import "./skill.css";

export default function Skill() {
  return (
    <section id="skill">
      <h2>Compétences</h2>
      <div className="contentSection">
        <div className="SkillSection Skills">
          <h3 className="ivory">Stack</h3>
        </div>
        <div className="SkillSection Networks">
          <h3 className="ivory">Retrouver moi aussi sur :</h3>
          <div className="btnNetworks ">
            <button className="github">Github</button>
            <button className="linkedin">Linked In</button>
            <button className="deviantart">Deviant art</button>
          </div>
        </div>
        <div className="SkillSection CV">
          <p className="black">Télecharger mon CV juste ici 👉</p>
          <button>Télécharger</button>
        </div>
      </div>
    </section>
  );
}
