import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <Router basename="/twocents-support">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
