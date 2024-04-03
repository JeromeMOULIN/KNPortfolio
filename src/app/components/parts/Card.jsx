import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./card.css";

export default function Card(props) {
  const techs = props.tech;
  return (
    <div className="cardContainer">
      <div id="card">
        <div className="frontSide">
          <h3>{props.name}</h3>
          <Image
            src={"/assets/img/ScreenProjet/" + props.img}
            alt={props.name}
            height={322}
            width={256}
          />
        </div>
        <div className="backSide">
          <p>{props.description}</p>
          <ul className="orange">
            {techs.map((tech) => (
              <li key={tech.id}>{tech.name}</li>
            ))}
          </ul>
          <button>
            <Link href={`${props.link}`} target="_blank">
              Voir
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
