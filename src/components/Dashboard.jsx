import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Inline styles for the dashboard
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f6f7',
      padding: '20px',
    },
    card: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '60%',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '20px',
      color: '#2c3e50',
    },
    text: {
      fontSize: '1.2rem',
      color: '#7f8c8d',
      marginBottom: '20px',
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
    link: {
      color: '#3498db',
      fontSize: '1.2rem',
      textDecoration: 'none',
    },
    logoutButton: {
      padding: '12px 30px',
      fontSize: '1.2rem',
      color: 'white',
      backgroundColor: '#e74c3c',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  const handleLogout = () => {
    // Redirect user to login page (You can clear any session data if necessary)
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome to Your Dashboard</h2>
        <p style={styles.text}>You are successfully logged in!</p>
        
        <div>
          <button style={styles.button} onClick={() => alert('Feature coming soon!')}>
            View Your Profile
          </button>
        </div>

        <div>
          <button style={styles.button} onClick={() => alert('Feature coming soon!')}>
            Check Your Activities
          </button>
        </div>

        <div style={{ marginTop: '20px' }}>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
