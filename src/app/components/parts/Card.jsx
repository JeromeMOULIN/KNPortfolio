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
            class
            src={"/assets/img/ScreenProjet/" + props.img}
            alt={props.name + " website"}
            height={322}
            width={250}
            style={{ objectFit: "fill" }}
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
