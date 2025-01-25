import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const MetricsCalculator = () => {
  const [cupsSaved, setCupsSaved] = useState(0);
  const [result, setResult] = useState(null);
  const [plasticWaste, setPlasticWaste] = useState(0);

  // Constants for environmental impact calculation
  const CO2_PER_CUP = 0.023; // CO2 emissions reduced per cup saved (in kg)
  const WASTE_DIVERTED_PER_CUP = 0.02; // Waste diverted per cup saved (in kg)

  // Function to handle the calculation
  const calculateImpact = () => {
    const co2Reduced = cupsSaved * CO2_PER_CUP;
    const wasteDiverted = cupsSaved * WASTE_DIVERTED_PER_CUP;

    setResult({
      co2Reduced: co2Reduced.toFixed(2),
      wasteDiverted: wasteDiverted.toFixed(2),
    });
  };

  // Simulating real-time plastic waste destruction
  useEffect(() => {
    const interval = setInterval(() => {
      setPlasticWaste((prevWaste) => prevWaste + 1);
    }, 1000); // Updates every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar/>
    
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: 'auto',
        backgroundColor: '#f4f4f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        position: 'relative',
      }}
    >
      {/* Back to Dashboard Button */}
      <Link
        to="/dashboard"
        style={{
          position: 'fixed', // Ensures the button stays in the top-right corner
          top: '10px',
          right: '10px',
          padding: '10px 20px',
          backgroundColor: '#FF9800',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          zIndex: '1000', // Ensures it stays above other elements
        }}
      >
        Back to Dashboard
      </Link>

      <h1 style={{ color: '#4CAF50', marginBottom: '20px' }}>Metrics Calculator</h1>

      {/* Environmental Quotes */}
      <blockquote
        style={{
          fontStyle: 'italic',
          color: '#666',
          borderLeft: '4px solid #4CAF50',
          paddingLeft: '10px',
          marginBottom: '20px',
        }}
      >
        "The Earth is what we all have in common." – Wendell Berry
      </blockquote>
      <blockquote
        style={{
          fontStyle: 'italic',
          color: '#666',
          borderLeft: '4px solid #2196F3',
          paddingLeft: '10px',
          marginBottom: '20px',
        }}
      >
        "Be the change you want to see in the world." – Mahatma Gandhi
      </blockquote>

      <div style={{ marginBottom: '20px' }}>
        <label
          htmlFor="cupsSaved"
          style={{
            fontSize: '18px',
            color: '#333',
            marginRight: '10px',
          }}
        >
          Enter number of cups saved:
        </label>
        <input
          type="number"
          id="cupsSaved"
          value={cupsSaved}
          onChange={(e) => setCupsSaved(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '120px',
          }}
        />
      </div>

      <button
        onClick={calculateImpact}
        style={{
          padding: '10px 20px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Calculate Impact
      </button>

      {result && (
        <div
          style={{
            marginTop: '30px',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#4CAF50' }}>Impact Results</h3>
          <p>
            <strong>CO2 Reduced:</strong> {result.co2Reduced} kg
          </p>
          <p>
            <strong>Waste Diverted:</strong> {result.wasteDiverted} kg
          </p>
        </div>
      )}

      <div
        style={{
          marginTop: '30px',
          backgroundColor: '#ffe5e5',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3 style={{ color: '#E53935' }}>Real-Time Plastic Waste Destruction</h3>
        <p
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {plasticWaste} kg of plastic waste added to the environment since you
          opened this page.
        </p>
      </div>
    </div>
    </div>
  );
};

export default MetricsCalculator;
