import Project from "./Project"
import { useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom"
import projects from "../services/projects.json"
import { projObject } from "../services/lang-interface.ts"

const Projects = ({text, handleKeyDown}:{text:projObject, handleKeyDown(ev: KeyboardEvent, left: string, right: string):void}) => {

  const nav: NavigateFunction = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", (ev:KeyboardEvent) => handleKeyDown(ev, "/about", "/contact"));

    return () => {
      document.removeEventListener("keydown", (ev:KeyboardEvent) => handleKeyDown(ev, "/about", "/contact"))
    };
  }, [])

  const handleNavAbout = ():void => {
    nav("/about")
  }

  const handleNavContact = ():void => {
    nav("/contact")
  }


  return (
    <div className="projects">
      <div className="projects__title">
        <h2>{text.proj}</h2>
      </div>
      <section className="projects__main">
        <Project desc={text.proj1} info={projects[0]} />
        <Project desc={text.proj2} info={projects[1]} />
        <Project desc={text.proj3} info={projects[2]} />
        <Project desc={text.proj4} info={projects[3]} />
        <Project desc={text.proj5} info={projects[4]} />
      </section>
      <div className="projects__arrows">
        <i
          onClick={handleNavContact}
          className="fa-solid fa-chevron-right arrow-right"
        ></i>
        <i
          onClick={handleNavAbout}
          className="fa-solid fa-chevron-left arrow-left"
        ></i>
      </div>
    </div>
  );
}

export default Projects