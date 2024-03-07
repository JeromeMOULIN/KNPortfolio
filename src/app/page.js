"use client";

import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Header from "./components/parts/Header";
import Footer from "./components/parts/Footer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [i, seti] = useState(0);

  document.querySelector("body").scroll(() => {
    seti(i + 1);
    console.log(i);
  });
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="wrapper">
            <section id="home">
              <h1>Jérôme MOULIN</h1>
              <Image
                className="logoHome"
                src="/assets/img/icon/icon_KaNa.jpeg"
                alt="Logo KaNa"
                height={600}
                width={600}
              />
              <h2>Développeur front-end / Intégrateur</h2>
            </section>
            <Profile />
            <Skill />
            <Project />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
