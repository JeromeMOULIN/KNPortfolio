import React from "react";
import "./nav.css";

export default function Nav() {
  return (
    <nav>
      <ul className="liste">
        <li>
          <a id="home-nav" className=" navlink navUnderline" href="/#home">
            Accueil
          </a>
        </li>
        <li>
          <a id="profil-nav" className="navlink navUnderline" href="/#profil">
            Profil
          </a>
        </li>
        <li>
          <a id="skill-nav" className="navlink navUnderline" href="/#skill">
            Compétences
          </a>
        </li>
        <li>
          <a id="project-nav" className="navlink navUnderline" href="/#project">
            Projets
          </a>
        </li>
        <li>
          <a id="contact-nav" className="navlink navUnderline" href="/#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
