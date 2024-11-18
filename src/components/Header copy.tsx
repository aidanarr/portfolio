import { Link } from "react-router-dom"
import { FC } from "react"

interface sectionText {
  [key: string]: string
}

const Header: FC<sectionText> = ({text}:{text:sectionText}) => {
  
  const {home, about, projects, contact}  = text;
  
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li><Link to="/">{home}</Link></li>
          <li><Link to="/about">{about}</Link></li>
          <li><Link to="/projects">{projects}</Link></li>
          <li><Link to="/contact">{contact}</Link></li>
        </ul>
        <div className="lang">
          <p>ES</p>
        </div>
      </nav>
    </header>
  )
}

export default Header