import React, { useEffect } from 'react'

function ForgotPassword() {
  useEffect(() => {
    // Get the URL parameters
    const params = new URLSearchParams(window.location.search)
    
    // Check if we're on mobile and can open the app
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile) {
      // Attempt to open the app with a deep link
      // Format: twocents://forgotPassword?token=...
      const token = params.get('token') || ''
      const deepLink = `twocents://forgotPassword?token=${token}`
      
      // Try to open the app
      window.location.href = deepLink
      
      // If the app doesn't open after 2 seconds, the message will remain visible
    }
  }, [])

  return (
    <div className="redirect-message">
      <h1>Reset Password</h1>
      
      <div style={{ marginTop: '2rem' }}>
        <p>🔐 Ready to reset your password</p>
        
        <div style={{ marginTop: '2rem' }}>
          <p>Please open the Two Cents app on your mobile device to continue.</p>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
            If you're on desktop, please click the password reset link from your email 
            while on your mobile device.
          </p>
        </div>

        <button 
          className="redirect-button"
          onClick={() => window.location.href = 'twocents://forgotPassword'}
        >
          Open Two Cents App
        </button>
      </div>
    </div>
  )
}

export default ForgotPassword
