import React, { useEffect, useState } from "react";
import Image from "next/image";

import "./profile.css";

export default function Profile() {
  const [data, setData] = useState();
  const [igb, setIgb] = useState(0);

  useEffect(() => {
    // fetch data from json fil and set gameboy part of this data
    fetch("data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.gameboy));
  }, []);
  // set an index for progress in profil array
  const progress = () => {
    if (igb >= data.length - 1) {
      setIgb(0);
      return;
    }
    setIgb(igb + 1);
  };

  return (
    <section id="profil">
      <h2>Profil</h2>
      <div className="contentSection">
        <div className="GBSection">
          <div className="GB">
            <Image
              className="avatar"
              src={
                data
                  ? "/assets/img/GameBoy/" + data[igb].avatar
                  : "/assets/img/GameBoy/avatar_pixel_3_quart_0_220px.png"
              }
              height={200}
              width={210}
              alt="avatar en pixel art de Jérôme MOULIN dans un style gameboy"
            />
          </div>
        </div>
        <div className="speech">
          <p className="ivory">
            {data
              ? data[igb].text
              : "No data was founded please wait or refresh the page"}
          </p>
          <div className="Miscellaneaous">
            <div className="orange">
              <span className={igb + 1 === 4 ? "orange" : " ivory"}>
                {igb + 1}
              </span>
              / {data ? data.length : "Error no data found"}
            </div>

            <button onClick={progress}>▼</button>
          </div>
        </div>
      </div>
    </section>
  );
}
