import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="lang">
          <p>ES</p>
        </div>
      </nav>
    </header>
  )
}

export default Header