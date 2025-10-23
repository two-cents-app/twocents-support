import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import VerifyEmail from './pages/VerifyEmail'
import ResetPassword from './pages/ResetPassword'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Router basename="/twocents-support">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
