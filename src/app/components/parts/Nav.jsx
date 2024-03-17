import React from "react";
import "./nav.css";

export default function Nav() {
  // animation on navbar when an element is clicked
  const isActive = (e) => {
    const navlinks = document.querySelectorAll(".navlink");
    const element = e.target;
    navlinks.forEach((link) => {
      if (link.classList.contains("navUnderline--expand")) {
        link.classList.remove("navUnderline--expand");
      }
    });
    element.classList.add("navUnderline--expand");
  };

  return (
    <nav>
      <ul className="liste">
        <li>
          <a onClick={isActive} className=" navlink navUnderline" href="/#home">
            Accueil
          </a>
        </li>
        <li>
          <a
            onClick={isActive}
            className="navlink navUnderline"
            href="/#profil"
          >
            Profil
          </a>
        </li>
        <li>
          <a onClick={isActive} className="navlink navUnderline" href="/#skill">
            Compétences
          </a>
        </li>
        <li>
          <a
            onClick={isActive}
            className="navlink navUnderline"
            href="/#project"
          >
            Projets
          </a>
        </li>
        <li>
          <a
            onClick={isActive}
            className="navlink navUnderline"
            href="/#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
