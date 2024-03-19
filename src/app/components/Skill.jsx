import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import "./skill.css";
import Button from "./parts/Button";

export default function Skill() {
  const [data, setData] = useState();

  const { ref: skill, inView: isOnScreen } = useInView({});

  useEffect(() => {
    // fetch data from json file and set skill part of this data
    fetch("data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.skills));

    // underline the skill nav link when it is seen
    const element = document.getElementById("skill-nav");

    if (isOnScreen) {
      element.classList.add("navUnderline--expand");
    }
    if (!isOnScreen) {
      element.classList.remove("navUnderline--expand");
    }
  }, [isOnScreen]);

  return (
    <section id="skill">
      <h2>Compétences</h2>
      <div className="contentSection" ref={skill}>
        <div className="SkillSection Skills">
          <h3 className="ivory">Stack :</h3>
          <div className="stack">
            {data
              ? data.map((skill) => (
                  <div key={skill.id} className="skill">
                    <Image
                      src={"/assets/img/icon/iconSlack/" + skill.img}
                      alt={skill.name + "logo"}
                      width={50}
                      height={50}
                    />
                    <p className="ivory">{skill.name}</p>
                  </div>
                ))
              : "no data was founded"}
          </div>
        </div>
        <div className="SkillSection Networks">
          <h3 className="ivory">Retrouver moi aussi sur :</h3>
          <div className="btnNetworks ">
            <Button
              className="github"
              name="Github"
              adress="https://github.com/JeromeMOULIN"
            />

            <Button
              className="linkedin"
              name="Linked In"
              adress="https://www.linkedin.com/in/moulinj/"
            />
            <Button
              className="deviantart"
              name="Deviantart"
              adress="https://www.deviantart.com/kanah89/gallery"
            />
          </div>
        </div>
        <div className="SkillSection CV">
          <p className="black">Télecharger mon CV juste ici 👉</p>
          <Button
            adress="/assets/files/CV_2024-03-02_Jérôme_MOULIN.pdf"
            name="Télecharger"
          />
        </div>
      </div>
    </section>
  );
}
