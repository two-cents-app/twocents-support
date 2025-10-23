import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Simply download the app and sign in with your Google or email account. It's quick, secure, and gets you started in seconds!"
    },
    {
      question: "How do I change my password?",
      answer: "On the sign-in page, click 'Forgot Password' and you'll receive an email with a link to securely update your password."
    },
    {
      question: "Is my data private?",
      answer: "Yes! Your data is stored in a secure backend, ensuring your opinions and personal information remain private and protected."
    },
    {
      question: "Can I suggest new questions?",
      answer: "Absolutely! Download the app and select the plus (+) icon to submit your own questions for the community."
    },
    {
      question: "Can I add my friends?",
      answer: "Yes! Search and add friends to see how your perspectives compare. View how society answers questions versus your friend group."
    },
    {
      question: "How do I join organizations?",
      answer: "Organizations are groups that see specific questions related to them—sports fans, occupations, schools, friend groups, or anything you can imagine. Email twocentsapp.team@gmail.com to start or join an organization."
    },
    {
      question: "Is the app free?",
      answer: "Yes, Two Cents is completely free to use!"
    },
    {
      question: "Can I change my answers later?",
      answer: "Yes, you can revisit and update your answers at any time. Your opinion can evolve as you learn more."
    },
    {
      question: "How do I submit feedback?",
      answer: "We'd love to hear from you! Email us at twocentsapp.team@gmail.com with any feedback, suggestions, or questions."
    }
  ];

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
            marginBottom: '3rem'
          }} 
        />
        
        {/* Two Column Layout */}
        <div className="hero-content">
          {/* Left: Large Tagline */}
          <div className="hero-tagline">
            <h1>
              Tired of biased feeds?{' '}
              <span className="highlight-text">Time to give your two cents.</span>
            </h1>
          </div>
          
          {/* Right: About Us Bubble */}
          <div className="hero-bubble">
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: 'var(--gold)', 
              marginBottom: '1.5rem',
              marginTop: '0'
            }}>
              About Us
            </h3>
            
            <div style={{ textAlign: 'left' }}>
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

      {/* FAQ Section */}
      <section className="section">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-bubble ${openFaq === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <p>
          <strong>Email:</strong> <a href="mailto:twocentsapp.team@gmail.com">twocentsapp.team@gmail.com</a>
        </p>
        <p>
          <strong>Reddit Community:</strong> <a href="https://reddit.com/r/twocentsapp" target="_blank" rel="noopener noreferrer">r/twocentsapp</a>
        </p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '3rem', borderTop: '1px solid var(--gold-dark)' }}>
        <p style={{ color: 'var(--grey)', marginBottom: '0.5rem' }}>
          <Link to="/privacy" style={{ color: 'var(--grey)', textDecoration: 'none', marginRight: '1rem' }}>Privacy Policy</Link>
        </p>
        <p style={{ color: 'var(--grey)' }}>© 2025 Two Cents. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home

