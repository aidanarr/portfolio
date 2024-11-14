import Project from "./Project"

const Projects = () => {
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
    </div>
  )
}

export default Projects