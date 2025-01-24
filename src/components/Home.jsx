import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css';

const Home = () => {
  return (
    <div className="home-container">
    {/* Hero Section */}
    <header className="hero-section">
      <div className="hero-content">
        <h1>Reduce Paper Cup Usage, Promote Sustainability!</h1>
        <p>
          Join us in the fight against single-use plastics and paper cups.
          Together, we can make a difference for a cleaner and greener planet.
        </p>
        <div className="hero-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      </div>
    </header>

    {/* Features Section */}
    <section className="features-section">
      <div className="features-title">
        <h2>How You Can Help</h2>
      </div>
      <div className="features-cards">
        <div className="feature-card">
          <h3>Track Your Progress</h3>
          <p>Measure the reduction of paper cup usage on campus with real-time insights.</p>
        </div>
        <div className="feature-card">
          <h3>Join the Community</h3>
          <p>Collaborate with others and share tips for reducing waste and using sustainable alternatives.</p>
        </div>
        <div className="feature-card">
          <h3>Get Rewards</h3>
          <p>Earn rewards for your efforts and contribute to a greener world.</p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="home-footer">
      <p>© 2025 Sustainability Platform. All rights reserved.</p>
    </footer>
  </div>
  )
}

export default Home