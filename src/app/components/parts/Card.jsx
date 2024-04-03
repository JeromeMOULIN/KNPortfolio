import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./card.css";

export default function Card(props) {
  return (
    <div className="cardContainer">
      <div id="card">
        <div className="frontSide">
          <h3>{props.name}</h3>
          <Image
            src={"/assets/img/ScreenProjet/" + props.description}
            alt={props.name}
            height={322}
            width={256}
          />
        </div>
        <div className="backSide">
          <p>{props.description}</p>
          <p>{props.tech}</p>
          {/* <ul>
            {props.tech.map((language) => (
              <li key={language.id}>{language.name}</li>
            ))}
          </ul> */}
          <button>
            <Link href={`${props.link}`} target="_blank">
              X
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
