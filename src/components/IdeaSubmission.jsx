import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const IdeaSubmission = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here, you can send the data to an API or store in the local state.
    // For now, we'll just display a confirmation message.
    setMessage(`Your idea "${title}" has been submitted!`);

    // Reset the form
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '600px',
          margin: 'auto',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          position: 'relative',
        }}
      >
        {/* Inspirational Quotes Section */}
        <div
          style={{
            marginBottom: '20px',
            textAlign: 'center',
            fontStyle: 'italic',
            color: '#4CAF50',
            fontSize: '18px',
            fontWeight: '600',
            paddingBottom: '20px',
          }}
        >
          <p>"Ideas are the beginning points of all fortunes." – Napoleon Hill</p>
        </div>

        <h2 style={{ color: '#4CAF50', textAlign: 'center', fontWeight: '700' }}>
          Submit Your Idea
        </h2>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="title"
            style={{
              fontSize: '16px',
              color: '#333',
              marginBottom: '10px',
              display: 'block',
            }}
          >
            Idea Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              marginBottom: '20px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border 0.3s ease',
            }}
            onFocus={(e) => e.target.style.border = '1px solid #4CAF50'}
            onBlur={(e) => e.target.style.border = '1px solid #ccc'}
            required
          />

          <label
            htmlFor="description"
            style={{
              fontSize: '16px',
              color: '#333',
              marginBottom: '10px',
              display: 'block',
            }}
          >
            Idea Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              marginBottom: '20px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border 0.3s ease',
            }}
            onFocus={(e) => e.target.style.border = '1px solid #4CAF50'}
            onBlur={(e) => e.target.style.border = '1px solid #ccc'}
            rows="4"
            required
          />

          <button
            type="submit"
            style={{
              padding: '12px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              width: '100%',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#1976D2')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#2196F3')}
          >
            Submit Idea
          </button>
        </form>

        {message && (
          <p style={{ color: '#4CAF50', marginTop: '20px', textAlign: 'center' }}>
            {message}
          </p>
        )}
      </div>

      {/* Back to Dashboard Button */}
      <Link
        to="/dashboard"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '12px 20px',
          backgroundColor: '#FF9800',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#FB8C00')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#FF9800')}
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default IdeaSubmission;
