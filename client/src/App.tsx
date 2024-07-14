import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import History from './pages/History/History'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Project from './pages/Project/Project'
import Projects from './pages/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <div className='wrapper'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
