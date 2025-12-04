import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Enquiry from './components/Enquiry.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import BookSite from './components/BookSite.jsx'
const App = () => {
  return (
    <div >
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/enquiry" element={<Enquiry />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/booksite" element={<BookSite />} />
</Routes>
</BrowserRouter>

    </div >
  )
}

export default App
