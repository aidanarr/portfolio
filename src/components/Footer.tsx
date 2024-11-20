import { footerObject } from "../services/lang-interface.ts"

const Footer = ({text}:{text:footerObject}) => {
  return (
    <footer className="footer">
        <div className="footer__icons">
            <a href="https://github.com/aidanarr" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/aida-narros/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <p>{text.credits} | <a className="repo" href="https://github.com/aidanarr/portfolio" target="_blank">{text.repo}</a></p>
    </footer>
  )
}

export default Footer