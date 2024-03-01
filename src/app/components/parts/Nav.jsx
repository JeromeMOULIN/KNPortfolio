import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/#home">Accueil</a>
        </li>
        <li>
          <a href="/#profil">Profil</a>
        </li>
        <li>
          <a href="/#skill">Compétences</a>
        </li>
        <li>
          <a href="/#project">Projets</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
