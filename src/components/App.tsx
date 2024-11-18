import '../styles/App.scss'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import spanish from "../services/es.json"
import english from "../services/en.json"


const App = () => {

  interface textObject {
    section: string,
    text: {
      [key: string]:string | undefined
    }
  } 

  const [text, setText] = useState<textObject[]>(english)
  const [lang, setLang] = useState<string>("en")

  useEffect(() => {
    if (lang === "es") {
      setText(spanish)
    } else if (lang === "en") {
      setText(english)
    }
  }, [lang])

  return (
    <>
      <div className="page">
        <Header text={text[0].text} setLang={setLang} />
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/about" element={
            <About text={text[2].text} />
          } />
          <Route path="/projects" element={
            <Projects text={text[3].text} />
          } />
          <Route path="/contact" element={
            <Contact text={text[4].text} />
          } />
        </Routes>
        <Footer text={text[1].text} />
      </div>
    </>
  )
}

export default App
