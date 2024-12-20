import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { contactObject } from "../services/lang-interface.ts"

const Contact = ({text, lang, handleKeyDown}:{text:contactObject, lang:string, handleKeyDown(ev: KeyboardEvent, left: string, right: string):void}) => {

  const nav: NavigateFunction = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", (ev:KeyboardEvent) => handleKeyDown(ev, "/projects", "/contact"));

    return () => {
      document.removeEventListener("keydown", (ev:KeyboardEvent) => handleKeyDown(ev, "/projects", "/contact"))
    };
  }, [])

  const handleNav = ():void => {
    nav("/projects")
  }

  const renderLink = ():string => {
    if (lang === "en"){
      return "https://drive.google.com/file/d/1Lws6lEBAUkIrhSUqCVzpKg2h8Da-GI2Q/view?usp=sharing"
    } else return "https://drive.google.com/file/d/1RktLO2Lj847BWvf3yIxm3wOJE5rlroMc/view?usp=sharing"
  }

  return (
    <div className="contact">
      <div className="contact__title">
        <h2>{text.contact}</h2>
      </div>
      <section className="contact__main">
        <div className="contact__main--cv">
          <div className="cv-circles">
            <div className="cv-circles__1"></div>
          </div>
          <a href={renderLink()} target="_blank">
            <div className={`cv-pic cv-${lang}`}></div>
          </a>
          <a href={renderLink()} target="_blank">
            {text.resume}
          </a>
        </div>
        <div className="contact__main--links">
        <div className="link-circles">
            <div className="link-circles__1"></div>
            <div className="link-circles__2"></div>
          </div>
          <div className="email-box">
            <h3>{text.email}</h3>
            <a href="mailto:aidanarfer@gmail.com" target="_blank">aidanarfer@gmail.com</a>
          </div>
          <div>
            <h3>{text.socials}</h3>
            <ul className="socials">
              <li>Linkedin <a className="socials__linkedin" href="https://www.linkedin.com/in/aida-narros/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
              <li>GitHub <a className="socials__github" href="https://github.com/aidanarr" target="_blank"><i className="fa-brands fa-github"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
      <div className="contact__arrows">
        <i onClick={handleNav} className="fa-solid fa-chevron-left arrow-left"></i>
      </div>
    </div>
  );
}

export default Contact