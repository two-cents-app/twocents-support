import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function VerifyEmail() {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile) {
      window.location.href = 'twocents://verifyEmail'
    }
  }, [])
  
  return (
    <div className="redirect-message">
      <h1>Email Verification</h1>
      
      <div style={{ marginTop: '2rem' }}>
        <p>✅ Thank you for verifying your email!</p>
        
        <div style={{ marginTop: '2rem' }}>
          <p>Please return to the Two Cents app to continue.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            If you're on mobile and the app didn't open automatically, 
            please click the link in your email while on your mobile device.
          </p>
        </div>

        <button 
          className="redirect-button"
          onClick={() => window.location.href = 'twocents://verifyEmail'}
        >
          Open Two Cents App
        </button>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/" style={{ color: 'var(--grey)', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail

