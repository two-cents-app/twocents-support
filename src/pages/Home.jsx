import React from 'react'

function Home() {
  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="section" style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Two Cents</h1>
        <p style={{ fontSize: '1.3rem', color: 'var(--gold-light)' }}>
          Give your two cents on what matters
        </p>
        <p style={{ color: 'var(--grey)', maxWidth: '700px', margin: '1rem auto' }}>
          A social platform for direct democracy. Answer multiple choice questions about issues 
          in your city, country, and across the world. Make your voice heard on important topics.
        </p>
      </section>

      {/* About Section */}
      <section className="section">
        <h2>About the App</h2>
        <p>
          Two Cents is a social media platform that brings direct democracy to your fingertips. 
          Participate in polls and surveys about local and global issues, see how your community 
          thinks, and make informed decisions together.
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

