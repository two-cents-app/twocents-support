import React, { useEffect } from 'react'

function VerifyEmail() {
  useEffect(() => {
    // Get the URL parameters
    const params = new URLSearchParams(window.location.search)
    
    // Check if we're on mobile and can open the app
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    if (isMobile) {
      // Attempt to open the app with a deep link
      // Format: twocents://verifyEmail?token=...
      const token = params.get('token') || ''
      const deepLink = `twocents://verifyEmail?token=${token}`
      
      // Try to open the app
      window.location.href = deepLink
      
      // If the app doesn't open after 2 seconds, the message will remain visible
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
      </div>
    </div>
  )
}

export default VerifyEmail

