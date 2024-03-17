import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Project() {
  const { ref: project, inView: isOnScreen } = useInView({});

  useEffect(() => {
    // underline the project nav link when it is seen
    const element = document.getElementById("project-nav");

    if (isOnScreen) {
      element.classList.add("navUnderline--expand");
    }
    if (!isOnScreen) {
      element.classList.remove("navUnderline--expand");
    }
  }, [isOnScreen]);

  return (
    <section id="project">
      <h2>Projets</h2>
      <div className="contentSection" ref={project}></div>
    </section>
  );
}
