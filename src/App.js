import React from 'react'
import './Styles/App.css'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
