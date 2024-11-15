import { NavigateFunction, useNavigate } from "react-router-dom";

const Contact = () => {

  const nav: NavigateFunction = useNavigate();

  const handleNav = () => {
    nav("/projects")
  }

  return (
    <div className="contact">
      
      <div className="contact__title">
        <h2>Contact</h2>
      </div>
      <section className="contact__main">
        <div className="contact__main--cv">
          <div className="cv-circles">
            <div className="cv-circles__1"></div>
          </div>
          <a href="#" target="_blank">
            <div className="cv-pic"></div>
          </a>
          <a href="#" target="_blank">
            Descarga mi currículum
          </a>
        </div>
        <div className="contact__main--links">
        <div className="link-circles">
            <div className="link-circles__1"></div>
            <div className="link-circles__2"></div>
          </div>
          <div>
            <h3>Correo electrónico</h3>
            <a href="mailto:aidanarfer@gmail.com" target="_blank">aidanarfer@gmail.com</a>
          </div>
          <div>
            <h3>Redes sociales</h3>
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