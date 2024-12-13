import '../styles/App.scss'
import { Routes, Route, NavigateFunction, useNavigate  } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import spanish from "../services/es.json"
import english from "../services/en.json"
import catalan from "../services/ca.json"
import { headerObject, footerObject, aboutObject, projObject, contactObject } from "../services/lang-interface.ts"

const App = () => {

  const [text, setText] = useState(spanish)
  const [lang, setLang] = useState<string>("es")

  const nav: NavigateFunction = useNavigate();

  useEffect(() => {
    if (lang === "es") {
      setText(spanish)
    } else if (lang === "en") {
      setText(english)
    } else {
      setText(catalan)
    }
  }, [lang])  

  interface KeyboardEvent {
    key: string;
  }

  const handleKeyDown = (ev: KeyboardEvent, left: string, right: string):void => {
    if (ev.key === "ArrowRight") {
          nav(right)
        }
        
    if (ev.key === "ArrowLeft") {
          nav(left)
        }
  }

  const headerText:headerObject = text[0].text as headerObject;
  const footerText:footerObject = text[1].text as footerObject;
  const aboutText:aboutObject = text[2].text as aboutObject;
  const projText:projObject = text[3].text as projObject;
  const contactText:contactObject = text[4].text as contactObject;


  return (
    <>
      <div className="page">
        <Header text={headerText} setLang={setLang} lang={lang} />
        <Routes>
          <Route path="/" element={
            <Home
            handleKeyDown={handleKeyDown} />
          } />
          <Route path="/about" element={
            <About text={aboutText}
            handleKeyDown={handleKeyDown} />
          } />
          <Route path="/projects" element={
            <Projects text={projText}
            handleKeyDown={handleKeyDown} />
          } />
          <Route path="/contact" element={
            <Contact lang={lang} text={contactText}
            handleKeyDown={handleKeyDown} />
          } />
        </Routes>
        <Footer text={footerText} />
      </div>
    </>
  )
}

export default App
