import React from 'react'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <div className="page-content">
      <div className="privacy-policy-container">
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Privacy Policy</h1>
        <p style={{ textAlign: 'center', color: 'var(--grey)', marginBottom: '3rem' }}>
          Last Updated: October 23, 2025
        </p>

        <div className="policy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Two Cents. We are committed to protecting your privacy and ensuring the security 
            of your personal information. This Privacy Policy explains how we collect, use, and safeguard 
            your data when you use our mobile application.
          </p>
        </div>

        <div className="policy-section">
          <h2>Information We Collect</h2>
          
          <h3>Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>Email address</li>
            <li>Display name</li>
            <li>Profile information (if provided)</li>
            <li>Authentication credentials</li>
          </ul>

          <h3>Usage Data</h3>
          <p>When you use Two Cents, we collect:</p>
          <ul>
            <li>Your responses to questions and polls</li>
            <li>Friends you add and your social connections within the app</li>
            <li>Organizations you join</li>
            <li>Questions you submit to the platform</li>
            <li>App usage statistics and analytics</li>
          </ul>

          <h3>Aggregated Data</h3>
          <p>
            We collect and store aggregated statistics about question responses to display results 
            and trends to all users. Individual responses are stored securely and are not publicly 
            viewable. Only aggregated, anonymized statistics are shown on the platform.
          </p>
        </div>

        <div className="policy-section">
          <h2>How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li><strong>Account Management:</strong> To create and manage your account, authenticate users, and provide customer support</li>
            <li><strong>Core Functionality:</strong> To display questions, record your answers, show results, and enable social features like friend connections and organizations</li>
            <li><strong>Platform Improvement:</strong> To analyze usage patterns, improve our app's performance, and develop new features</li>
            <li><strong>Communication:</strong> To send important updates, respond to inquiries, and provide customer support</li>
            <li><strong>Data Presentation:</strong> To show aggregated, anonymized statistics and trends to users</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Third-Party Services</h2>
          
          <h3>Supabase</h3>
          <p>
            We use Supabase as our backend service provider for data storage and authentication. 
            Supabase provides secure, reliable infrastructure with industry-standard security practices. 
            All data is stored with strict Row Level Security (RLS) policies to ensure that users can 
            only access data they are authorized to view.
          </p>

          <h3>Expo</h3>
          <p>
            Our mobile application is built using Expo, a framework for React Native applications. 
            Expo may collect anonymous usage data and crash reports to help improve the framework 
            and our app's stability.
          </p>

          <h3>Authentication Providers</h3>
          <p>
            If you sign in using Google or other third-party authentication providers, we receive 
            basic profile information (such as your name and email address) from these providers. 
            Please review the privacy policies of these third-party services for information about 
            their data practices.
          </p>
        </div>

        <div className="policy-section">
          <h2>Data Security</h2>
          <p>
            We take the security of your data seriously and implement multiple layers of protection:
          </p>
          <ul>
            <li><strong>Encryption:</strong> All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols</li>
            <li><strong>Secure Storage:</strong> Your personal information is stored securely in our database with restricted access</li>
            <li><strong>Row Level Security (RLS):</strong> We implement strict RLS policies in our database to ensure users can only access their own data and authorized public information</li>
            <li><strong>Authentication:</strong> We use secure authentication methods to protect your account from unauthorized access</li>
            <li><strong>Regular Updates:</strong> We continuously monitor and update our security practices to protect against emerging threats</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Data Privacy</h2>
          <p>
            Your privacy is important to us. Here's how we protect it:
          </p>
          <ul>
            <li><strong>Private Responses:</strong> Your individual answers to questions are kept private and are not publicly viewable by other users</li>
            <li><strong>Aggregated Statistics Only:</strong> We only display aggregated, anonymized statistics to show trends and results across all users</li>
            <li><strong>Friend Comparisons:</strong> You can view how your responses compare to your friends' responses, but only in an aggregated manner that respects privacy</li>
            <li><strong>Organization Data:</strong> When you join an organization, your responses to organization-specific questions may be included in aggregated statistics visible to other organization members</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Data Retention and Deletion</h2>
          
          <h3>Data Retention</h3>
          <p>
            We retain your personal information and usage data for as long as your account is active 
            or as needed to provide you with our services. Aggregated statistics are retained indefinitely 
            to maintain historical data and trends.
          </p>

          <h3>Account Deletion</h3>
          <p>
            You have the right to delete your account at any time. To request account deletion, please 
            contact us at <a href="mailto:twocentsapp.team@gmail.com">twocentsapp.team@gmail.com</a>. 
            Upon account deletion:
          </p>
          <ul>
            <li>Your personal information (email, name, profile) will be permanently deleted</li>
            <li>Your individual responses will be removed from the database</li>
            <li>Your account will be deactivated and cannot be recovered</li>
            <li>Aggregated statistics that included your responses will remain, as they are anonymized and cannot be traced back to you</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Update or correct your personal information through the app settings</li>
            <li><strong>Deletion:</strong> Request deletion of your account and personal data</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Opt-Out:</strong> Opt out of non-essential communications</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:twocentsapp.team@gmail.com">twocentsapp.team@gmail.com</a>.
          </p>
        </div>

        <div className="policy-section">
          <h2>Children's Privacy</h2>
          <p>
            Two Cents is intended for users aged 13 and older. We do not knowingly collect personal 
            information from children under 13. If we discover that we have collected information from 
            a child under 13, we will promptly delete such information. If you believe we may have 
            collected information from a child under 13, please contact us immediately.
          </p>
        </div>

        <div className="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or 
            for legal, operational, or regulatory reasons. When we make changes, we will update the 
            "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy 
            periodically to stay informed about how we protect your information.
          </p>
          <p>
            If we make significant changes, we will notify you through the app or via email to the 
            address associated with your account.
          </p>
        </div>

        <div className="policy-section">
          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and stored on servers located in different countries. 
            By using Two Cents, you consent to the transfer of your information to these locations. We 
            ensure that appropriate safeguards are in place to protect your data in accordance with this 
            Privacy Policy.
          </p>
        </div>

        <div className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
            practices, please contact us at:
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Email:</strong> <a href="mailto:twocentsapp.team@gmail.com">twocentsapp.team@gmail.com</a>
          </p>
          <p style={{ marginTop: '1rem' }}>
            We will respond to your inquiries as promptly as possible.
          </p>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/" style={{ color: 'var(--grey)', fontSize: '0.9rem' }}>
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem 0', marginTop: '3rem', borderTop: '1px solid var(--gold-dark)' }}>
        <p style={{ color: 'var(--grey)' }}>© 2025 Two Cents. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default PrivacyPolicy

