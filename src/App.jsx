import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Meals from './pages/Meals'
import Drinks from './pages/Drinks'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
