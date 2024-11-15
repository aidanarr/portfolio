import '../styles/App.scss'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'


function App() {

  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/about" element={
            <About />
          } />
          <Route path="/projects" element={
            <Projects />
          } />
          <Route path="/contact" element={
            <Contact />
          } />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
