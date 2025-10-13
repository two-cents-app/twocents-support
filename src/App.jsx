import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import VerifyEmail from './pages/VerifyEmail'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <Router basename="/twocents-support">
      <div className="app-container">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            Two Cents
          </Link>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/verifyEmail">Verify Email</Link></li>
            <li><Link to="/forgotPassword">Reset Password</Link></li>
          </ul>
        </nav>

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
