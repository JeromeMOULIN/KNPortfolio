import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./parts/Card";

import "./project.css";

export default function Project() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { ref: projectContent, inView: isOnScreen } = useInView({});

  useEffect(() => {
    //set data from json file
    fetch("data/data.json")
      .then((res) => res.json())
      .then((data) => setData(data.project));

    // underline the project nav link when it is seen
    const element = document.getElementById("project-nav");

    if (isOnScreen) {
      element.classList.add("navUnderline--expand");
    }
    if (!isOnScreen) {
      element.classList.remove("navUnderline--expand");
    }
  }, [isOnScreen]);
  const PER_PAGE = 2;

  const filteredProjects = data
    ? data.filter((project, index) => {
        if (
          (currentPage - 1) * PER_PAGE <= index &&
          currentPage * PER_PAGE > index
        ) {
          return true;
        }
        return false;
      })
    : "no data";

  const next = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage > data.length / 2) {
      setCurrentPage(1);
    }
  };
  const prev = () => {
    setCurrentPage(currentPage - 1);
  };
  const reset = () => {
    setCurrentPage(1);
  };
  console.log(data);
  return (
    <section id="project">
      <h2>Projets</h2>
      <div className="contentSection" ref={projectContent}>
        <div className="gallery">
          {data
            ? filteredProjects.map((projet) => (
                <Card
                  key={projet.id}
                  name={projet.name}
                  img={projet.preview}
                  description={projet.preview}
                  tech={projet.tech}
                  link={projet.gitAdress}
                />
              ))
            : "no data was founded"}
        </div>
        <div className="pagination">
          <p onClick={reset}>CC</p>
          <p id="prev" onClick={prev}>
            X
          </p>
          <a>{currentPage}</a>
          <p onClick={next}>V</p>
        </div>
      </div>
    </section>
  );
}
