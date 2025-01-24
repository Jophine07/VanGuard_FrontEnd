import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Dummy credentials
  const dummyEmail = 'user@example.com';
  const dummyPassword = 'password123';

  // Inline styles for login page
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f6f7',
    },
    form: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '400px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#2c3e50',
    },
    inputGroup: {
      marginBottom: '20px',
      textAlign: 'left',
    },
    label: {
      fontSize: '1rem',
      color: '#7f8c8d',
    },
    input: {
      width: '100%',
      padding: '12px',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginTop: '5px',
    },
    button: {
      width: '100%',
      padding: '12px',
      fontSize: '1.2rem',
      color: 'white',
      backgroundColor: '#3498db',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#2980b9',
    },
    errorMessage: {
      color: 'red',
      fontSize: '1rem',
      marginBottom: '10px',
    },
    signupLink: {
      fontSize: '1rem',
      color: '#7f8c8d',
    },
    signupAnchor: {
      color: '#3498db',
      textDecoration: 'none',
    },
    signupAnchorHover: {
      textDecoration: 'underline',
    },
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password match dummy credentials
    if (email === dummyEmail && password === dummyPassword) {
      navigate('/dashboard'); // Redirect to the dashboard after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.heading}>Login to Your Account</h2>

        {error && <p style={styles.errorMessage}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>Login</button>
        </form>

        <div style={styles.signupLink}>
          <p>Don't have an account? <a href="/signup" style={styles.signupAnchor}>Sign Up here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
