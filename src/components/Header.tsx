import { Link } from "react-router-dom"
import { ReactNode, useState } from "react";

const Header = ({text, setLang, lang}:{text:{[key: string]: string | undefined}, setLang:void, lang:string}) => {
  
  const {home, about, projects, contact}  = text;
  const [hidden, setHidden] = useState<boolean>(true);
  const [reverse, setReverse] = useState<boolean>(false);

  const handleClick = ():void => {
    if (hidden) {
      setHidden(false)
      setReverse(false)
    } else {
      setReverse(true)
      setTimeout(() => {
        setHidden(true)
        setReverse(false)
      }, 500)
    }
  }

  const handleClickLang = (ev) => {
    setLang(ev.target.id)
  }

  const renderDropdown = ():ReactNode => {
    const styles: React.CSSProperties = {
      animationDelay: "0.2s",
    };

    const styles0: React.CSSProperties = {
      animationDelay: "0s",
    };

    if (lang === "es") {
      return <>
        <p id="en" style={reverse ? styles : styles0} className={`lang-dropdown__code ${reverse ? "reverse" : ""}`}>EN</p> 
        <p id="ca" style={!reverse ? styles : styles0} className={`lang-dropdown__code ${reverse ? "reverse" : ""}`}>CA</p> 
      </>
    } else if (lang === "en") {
      return <>
        <p id="es" style={reverse ? styles : styles0} className="lang-dropdown__code">ES</p> 
        <p id="ca" style={!reverse ? styles : styles0} className="lang-dropdown__code">CA</p> 
      </>
    } else {
      return <>
        <p id="es" style={reverse ? styles : styles0} className="lang-dropdown__code">ES</p> 
        <p id="en" style={!reverse ? styles : styles0} className="lang-dropdown__code">EN</p> 
      </>
    }
  }
  
  return (
    <>
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li><Link to="/">{home}</Link></li>
          <li><Link to="/about">{about}</Link></li>
          <li><Link to="/projects">{projects}</Link></li>
          <li><Link to="/contact">{contact}</Link></li>
        </ul>
      </nav>
    </header>
    <div className="lang-container">
    <div onClick={handleClick} className="lang">
    <p className="lang__code">{lang.toUpperCase()}</p>
    <div onClick={handleClickLang} className={`lang-dropdown ${hidden ? "hidden" : ""}`}>
      {renderDropdown()}
    </div>
  </div>
  </div>
    </>
  )
}

export default Header