import React from 'react'
import logo from '../assets/final_logo_big.png'
import preview1 from '../assets/two-cents-preview-1.PNG'
import preview2 from '../assets/two-cents-preview-2.PNG'
import preview3 from '../assets/two-cents-preview-3.PNG'
import preview4 from '../assets/two-cents-preview-4.PNG'
import preview5 from '../assets/two-cents-preview-5.PNG'
import preview6 from '../assets/two-cents-preview-6.PNG'
import preview7 from '../assets/two-cents-preview-7.PNG'
import preview8 from '../assets/two-cents-preview-8.PNG'
import preview9 from '../assets/two-cents-preview-9.PNG'

function Home() {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="section" style={{ textAlign: 'center', padding: '3rem 0' }}>
        <img 
          src={logo} 
          alt="Two Cents Logo" 
          style={{ 
            maxWidth: '500px', 
            width: '100%', 
            height: 'auto', 
          }} 
        />
        <h2 style={{ 
          fontSize: '2rem', 
          color: 'var(--white)', 
          marginBottom: '2.5rem',
          fontWeight: '400',
          letterSpacing: '0.5px'
        }}>
          Time to give your <span style={{ 
            color: 'var(--gold)', 
            fontWeight: '700',
            fontSize: '2.2rem'
          }}>'two cents'</span>
        </h2>
        
        {/* Value Proposition Bubble */}
        <div className="hero-bubble">
          <h3 style={{ 
            fontSize: '1.8rem', 
            color: 'var(--gold)', 
            marginBottom: '1.5rem',
            marginTop: '0'
          }}>
            About Us
          </h3>
          
          <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
            <div className="feature-point">
              <span className="feature-icon">🗳️</span>
              <p>An unbiased platform where every voice counts</p>
            </div>
            
            <div className="feature-point">
              <span className="feature-icon">🚫</span>
              <p>Skip the algorithms of traditional social media</p>
            </div>
            
            <div className="feature-point">
              <span className="feature-icon">📊</span>
              <p>See live results on topical questions</p>
            </div>
            
            <div className="feature-point">
              <span className="feature-icon">🤝</span>
              <p>Join organizations you care about</p>
            </div>
            
            <div className="feature-point">
              <span className="feature-icon">🌍</span>
              <p>Engage with issues in your city, country, or worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Gallery */}
      <section className="section">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>See It In Action</h2>
        <div className="preview-gallery-container">
          <div className="preview-gallery">
            {[preview1, preview2, preview3, preview4, preview5, preview6, preview7, preview8, preview9].map((preview, index) => (
              <div key={index} className="preview-image-wrapper">
                <img 
                  src={preview} 
                  alt={`Two Cents App Preview ${index + 1}`}
                  className="preview-image"
                />
              </div>
            ))}
          </div>
        </div>
        <p style={{ textAlign: 'center', color: 'var(--grey)', marginTop: '1rem', fontSize: '0.9rem' }}>
          ← Scroll to see more →
        </p>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2>Features</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div className="faq-item">
            <h3>📊 Multiple Choice Questions</h3>
            <p>Answer quick polls on topics that matter to you and your community</p>
          </div>
          <div className="faq-item">
            <h3>🌍 Local to Global</h3>
            <p>Engage with issues at the city, country, and international level</p>
          </div>
          <div className="faq-item">
            <h3>💬 Direct Democracy</h3>
            <p>Your opinion counts - see real-time results from your community</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I create an account?</h3>
          <p>Download the app and sign up with your email address. You'll receive a verification email to confirm your account.</p>
        </div>
        <div className="faq-item">
          <h3>Is my data private?</h3>
          <p>Yes, we take privacy seriously. Your voting data is anonymized and secured.</p>
        </div>
        <div className="faq-item">
          <h3>Can I suggest new questions?</h3>
          <p>Yes! We're working on features that will allow users to propose and vote on new questions.</p>
        </div>
        <div className="faq-item">
          <h3>Is the app free?</h3>
          <p>Yes, Two Cents is completely free to use.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <p>Email: <a href="mailto:support@twocents.app">support@twocents.app</a></p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '3rem', borderTop: '1px solid var(--gold-dark)' }}>
        <p style={{ color: 'var(--grey)' }}>© 2025 Two Cents. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home

