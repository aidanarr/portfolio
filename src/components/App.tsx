import '../styles/App.scss'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Projects from './Projects'


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
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
