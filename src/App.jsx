import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Fleet from './pages/Fleet';

import './App.css'
import Website from './pages/paramount'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <>
    //   <Website />
    // </>
     <Router>
      <div className="min-h-screen bg-gray-50">
       <Navbar />
       <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
        </Routes>
       </main>
       <Footer />
       </div>
     </Router>
  )
}

export default App
