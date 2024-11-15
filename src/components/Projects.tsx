import Project from "./Project"
import { NavigateFunction, useNavigate } from "react-router-dom"

const Projects = () => {

  const nav: NavigateFunction = useNavigate();

  const handleNavAbout = () => {
    nav("/about")
  }

  const handleNavContact = () => {
    nav("/contact")
  }


  return (
    <div className="projects">
        <div className="projects__title">
            <h2>Proyectos</h2>
        </div>
        <section className="projects__main">
            
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            
        </section>
        <div className="projects__arrows">
        <i onClick={handleNavContact} className="fa-solid fa-chevron-right arrow-right"></i>
        <i onClick={handleNavAbout} className="fa-solid fa-chevron-left arrow-left"></i>
      </div>
    </div>
  )
}

export default Projects