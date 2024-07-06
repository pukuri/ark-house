import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import History from './pages/History'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <div className='wrapper'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </>
  )
}

export default App
