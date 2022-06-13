import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Navbar from './app/components/navbar';
import Home from './app/pages/home'
import Service from './app/pages/service';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Service />
    </Router>
    </>
  )
}

export default App