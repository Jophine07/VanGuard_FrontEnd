import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          padding: '30px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f0f8ff',
          minHeight: '100vh',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: '#4CAF50',
            fontSize: '40px',
            marginBottom: '30px',
            textShadow: '3px 3px 5px rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold',
          }}
        >
          Welcome to Your Dashboard
        </h1>

        {/* Environmental Quote Section */}
        <div
          style={{
            margin: '20px auto',
            padding: '20px',
            maxWidth: '800px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              color: '#2196F3',
              marginBottom: '12px',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}
          >
            "Be the change you want to see in the world."
          </h3>
          <p
            style={{
              fontSize: '18px',
              color: '#555',
              fontWeight: '500',
            }}
          >
            Every small step toward reducing plastic usage contributes to saving the planet. Together, we can make a difference!
          </p>
        </div>

        {/* Modules Section with Descriptions */}
        <div
          style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            justifyContent: 'center',
          }}
        >
          {/* Awareness Module */}
          <div
            style={{
              padding: '25px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 18px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.15)';
            }}
          >
            <h3
              style={{
                color: '#4CAF50',
                fontSize: '24px',
                marginBottom: '15px',
                fontWeight: '600',
                letterSpacing: '1px',
              }}
            >
              Awareness Module
            </h3>
            <p style={{ fontSize: '16px', color: '#555', fontWeight: '500' }}>
              Learn about the environmental impacts of paper cup usage and how reducing plastic consumption can contribute to a healthier planet.
            </p>
          </div>

          {/* Interactive Quiz */}
          <div
            style={{
              padding: '25px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 18px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.15)';
            }}
          >
            <h3
              style={{
                color: '#2196F3',
                fontSize: '24px',
                marginBottom: '15px',
                fontWeight: '600',
                letterSpacing: '1px',
              }}
            >
              Interactive Quiz
            </h3>
            <p style={{ fontSize: '16px', color: '#555', fontWeight: '500' }}>
              Test your knowledge on environmental sustainability with our quiz. Answer questions and learn how small changes can make a big difference.
            </p>
          </div>

          {/* Points Dashboard */}
          <div
            style={{
              padding: '25px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 18px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.15)';
            }}
          >
            <h3
              style={{
                color: '#FF9800',
                fontSize: '24px',
                marginBottom: '15px',
                fontWeight: '600',
                letterSpacing: '1px',
              }}
            >
              Challenges
            </h3>
            <p style={{ fontSize: '16px', color: '#555', fontWeight: '500' }}>
              Keep track of your points earned by participating in sustainable actions. Monitor your progress and challenge yourself to do more!
            </p>
          </div>

          {/* Metrics Calculator */}
          <div
            style={{
              padding: '25px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 18px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.15)';
            }}
          >
            <h3
              style={{
                color: '#8BC34A',
                fontSize: '24px',
                marginBottom: '15px',
                fontWeight: '600',
                letterSpacing: '1px',
              }}
            >
              Metrics Calculator
            </h3>
            <p style={{ fontSize: '16px', color: '#555', fontWeight: '500' }}>
              Calculate the environmental impact of your daily actions. See how much waste you can save by switching to more sustainable practices.
            </p>
          </div>

          {/* Idea Submission */}
          <div
            style={{
              padding: '25px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
              textAlign: 'center',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 18px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.15)';
            }}
          >
            <h3
              style={{
                color: 'black',
                fontSize: '24px',
                marginBottom: '15px',
                fontWeight: '600',
                letterSpacing: '1px',
              }}
            >
              Idea Submission
            </h3>
            <p style={{ fontSize: '16px', color: 'black', fontWeight: '500' }}>
              Have an idea to make the world more sustainable? Share it with us and inspire others to take action toward a cleaner planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
