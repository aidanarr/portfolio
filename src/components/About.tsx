import { ReactNode, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom"
import { aboutObject } from "../services/lang-interface.ts"

const About = ({text, handleKeyDown}:{text:aboutObject, handleKeyDown(ev: KeyboardEvent, left: string, right: string):void}) => {

  const nav: NavigateFunction = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", (ev:KeyboardEvent) => handleKeyDown(ev, "/", "/projects"));

    return () => {
      document.removeEventListener("keydown", (ev:KeyboardEvent) => handleKeyDown(ev, "/", "/projects"))
    };
  }, [])

  const handleNavHome = ():void => {
    nav("/")
  }

  const handleNavProjects = ():void => {
    nav("/projects")
  }

  const renderSkills = ():ReactNode => {
    const skills:{[key: string]: string} = text.skill;
    const skillsArray:string[] = [skills.git, skills.scrum, skills.layout, skills.design, skills.responsive, skills.api];

    return skillsArray.map((item:string) => {
      return <p key={item}>{item}</p>
    })

  }

  return (
    <div className="about">
      <div className="about__title">
        <h2>{text.about}</h2>
      </div>
      <section className="about__info">
        <article className="about__info--desc">
          <div className="about-img">
            <div className="about-img__pic"></div>
            <div className="about-img__circles">
              <div className="about-img__circles--1"></div>
              <div className="about-img__circles--2"></div>
              <div className="about-img__circles--3"></div>
            </div>
          </div>
          <p>{text.desc}</p>
        </article>
        <div className="about__info--skills">
          <div>
            <h3>{text.tech}</h3>
            <div className="skills-items">
              <p>HTML5</p>
              <p>CSS</p>
              <p>Sass</p>
              <p>JavaScript ES6</p>
              <p>React</p>
              <p>Node.js</p>
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>TypeScript</p>
            </div>
          </div>
          <div>
            <h3>Software</h3>
            <div className="skills-items">
              <p>Visual Studio Code</p>
              <p>Postman</p>
              <p>MySQL Workbench</p>
              <p>Figma</p>
              <p>Photoshop</p>
              <p>InDesign</p>
              <p>Microsoft Office</p>
            </div>
          </div>
          <div>
            <h3>{text.skills}</h3>
            <div className="skills-items">
              {renderSkills()}
            </div>
          </div>
          <div>
            <h3>{text.lang}</h3>
            <div className="languages">
              <div className="languages__list">
                <div className="languages__list--text">
                  <p>{text.es}</p>
                  <p>{text.en}</p>
                </div>
                <div className="languages__list--bullets">
                  <p>● ● ● ● ●</p>
                  <p>● ● ● ● <span>●</span></p>
                </div>
              </div>
              <div className="languages__list">
                <div className="languages__list--text">
                  <p>{text.ca}</p>
                  <p>{text.fr}</p>
                </div>
                <div className="languages__list--bullets">
                  <p>● ● ● ● <span>●</span></p>
                  <p>● ● ● <span>● ●</span></p>
                </div>
              </div>
              <div className="languages__list">
                <div className="languages__list--text">
                  <p>{text.zh}</p>  
                </div>
                <div className="languages__list--bullets">
                  <p>● <span>● ● ● ●</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about__arrows">
        <i onClick={handleNavProjects} className="fa-solid fa-chevron-right arrow-right"></i>
        <i onClick={handleNavHome} className="fa-solid fa-chevron-left arrow-left"></i>
      </div>
    </div>
  )
}

export default About