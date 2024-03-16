"use client";

import Profile from "./components/Profile";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Header from "./components/parts/Header";
import Footer from "./components/parts/Footer";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Home() {
  const { ref: myRef, inView: isVisible } = useInView({});
  useEffect(() => {
    if (!isVisible) {
      document.querySelector("header").classList.add("bg-opacity-1");
    } else {
      document.querySelector("header").classList.remove("bg-opacity-1");
    }
  }, [isVisible]);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="wrapper">
            <section id="home">
              <div className="ref-for-header" ref={myRef}></div>
              <h1>Jérôme MOULIN</h1>
              <Image
                className="logoHome"
                src="/assets/img/icon/icon_KaNa.jpeg"
                alt="Logo representant un corbeau devant un soleil"
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
