import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ResetPassword() {
  // useEffect(() => {
  //   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
  //   if (isMobile) {
  //     const hash = window.location.hash
  //     const search = window.location.search
      
  //     const deepLink = `two-cents://resetPassword${search}${hash}`
      
  //     window.location.href = deepLink
  //   }
  // }, [])

  return (
    <div className="redirect-message">
      <h1>Reset Password</h1>
      
      <div style={{ marginTop: '2rem' }}>
        <p>🔐 Ready to reset your password</p>
        
        <div style={{ marginTop: '2rem' }}>
          <p>Please open the Two Cents app on your mobile device to continue.</p>
          {/* <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            If you're on desktop, please click the password reset link from your email 
            while on your mobile device.
          </p> */}
        </div>

        <button 
          className="redirect-button"
          onClick={() => window.location.href = 'two-cents://resetPassword'}
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

export default ResetPassword
