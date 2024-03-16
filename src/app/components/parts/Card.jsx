import Image from "next/image";
import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="frontSide">
        <Image src={props.preview} alt={props.name} height={50} width={50} />
      </div>
      <div className="backSide">
        <div>
          <ul>
            <p>{props.description}</p>
            {props.languages.map((language) => (
              <li key={language.id}>{language.name}</li>
            ))}
            <li>{props.gitAdress}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
