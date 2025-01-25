import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const PointsDashboard = () => {

  const navigate = useNavigate();
  const [points, setPoints] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState([]);
  const [uploadedProof, setUploadedProof] = useState({
    reusableCup: { photo: null, status: 'pending' },
    reducePlastic: { photo: null, status: 'pending' },
    inviteFriend: { photo: null, status: 'pending' },
  });
  const [dailyChallengeLimitReached, setDailyChallengeLimitReached] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileUpload = (challenge, e) => {
    const file = e.target.files[0];
    if (file && uploadedProof[challenge].status === 'pending') {
      setUploadedProof({
        ...uploadedProof,
        [challenge]: { photo: URL.createObjectURL(file), status: 'pending' },
      });
    }
  };

  const handleSubmit = (challenge) => {
    setIsSubmitting(true);
    setTimeout(() => {
      const updatedProof = { ...uploadedProof };
      updatedProof[challenge].status = 'approved';

      if (!challengesCompleted.includes(challenge)) {
        setPoints(points + 10);
        setChallengesCompleted([...challengesCompleted, challenge]);
      }

      setUploadedProof(updatedProof);
      setIsSubmitting(false);
    }, 2000);
  };

  const checkDailyChallengeLimit = () => {
    if (challengesCompleted.length >= 3) {
      setDailyChallengeLimitReached(true);
    }
  };

  const checkReward = () => {
    if (points >= 100) {
      return (
        <div style={rewardMessageStyle}>
          <h2>🎉 Congratulations! You've earned a reward: A Lunch Coupon!</h2>
        </div>
      );
    }
    return <p>You need {100 - points} more points to earn a reward.</p>;
  };

  React.useEffect(() => {
    checkDailyChallengeLimit();
  }, [challengesCompleted]);

  return (
    <div>
      <Navbar/>
    
    <div style={dashboardStyle}>
      <button onClick={() => navigate('/dashboard')} style={backButtonStyle}>
        Back to Dashboard
      </button>

      <div style={headerContainerStyle}>
        <h1 style={headerStyle}>Your Points Dashboard</h1>
        <div style={rulesStyle}>
          <h2>Rules:</h2>
          <ul>
          <p style={{ color: 'red', fontWeight: 'bold', marginBottom: '20px' }}>
  
    <li>You will earn a reward after collecting 100 points.</li>
    <li>Only 3 challenges can be completed per day.</li>
</p>
          </ul>
        </div>
      </div>

      <div style={pointsContainerStyle}>
        <h2>Total Points: {points}</h2>
        <p>You have completed {challengesCompleted.length} challenges today!</p>
        {dailyChallengeLimitReached && (
          <p style={limitReachedStyle}>
            Today's challenge limit has been reached. Please come back tomorrow!
          </p>
        )}

        <div style={challengesContainerStyle}>
          {['reusableCup', 'reducePlastic', 'inviteFriend'].map((challenge, index) => (
            <div key={challenge} style={challengeBoxStyle}>
              <p style={boldTextStyle}>
                {index + 1}. {challengeLabels[challenge]} (10 Points)
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(challenge, e)}
                disabled={
                  challengesCompleted.includes(challenge) ||
                  uploadedProof[challenge].status === 'approved' ||
                  dailyChallengeLimitReached ||
                  isSubmitting
                }
                style={inputStyle}
              />
              {uploadedProof[challenge].photo && (
                <div>
                  <h4>Uploaded Photo for {challengeLabels[challenge]} Challenge</h4>
                  <img
                    src={uploadedProof[challenge].photo}
                    alt={`${challengeLabels[challenge]} Proof`}
                    style={imgStyle}
                  />
                </div>
              )}
              <div>
                {uploadedProof[challenge].status === 'pending' ? (
                  <p>Waiting for approval...</p>
                ) : (
                  <p>Status: {uploadedProof[challenge].status}</p>
                )}
              </div>
              {uploadedProof[challenge].status === 'pending' && (
                <button onClick={() => handleSubmit(challenge)} style={submitButtonStyle}>
                  Submit Proof
                </button>
              )}
            </div>
          ))}
        </div>
        {checkReward()}
      </div>
    </div>
    </div>
  );
};

const challengeLabels = {
  reusableCup: 'Use Reusable Cup',
  reducePlastic: 'Reduce Plastic Usage',
  inviteFriend: 'Invite a Friend',
};

const dashboardStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: '#eef5f9',
  borderRadius: '15px',
  maxWidth: '800px',
  margin: '0 auto',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const headerContainerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const headerStyle = {
  color: '#4CAF50',
  fontSize: '2.5rem',
  marginBottom: '10px',
};

const rulesStyle = {
  backgroundColor: '#ffffff',
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  fontSize: '1rem',
};

const pointsContainerStyle = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '10px',
  marginBottom: '20px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const challengesContainerStyle = {
  marginTop: '20px',
};

const challengeBoxStyle = {
  backgroundColor: '#f7f9fc',
  padding: '15px',
  borderRadius: '8px',
  marginBottom: '15px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const boldTextStyle = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
};

const inputStyle = {
  display: 'block',
  width: '100%',
  marginTop: '10px',
};

const imgStyle = {
  marginTop: '10px',
  width: '100%',
  maxHeight: '150px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const submitButtonStyle = {
  backgroundColor: '#2196F3',
  color: 'white',
  padding: '10px 15px',
  borderRadius: '5px',
  border: 'none',
  marginTop: '10px',
};

const limitReachedStyle = {
  color: 'red',
  fontWeight: 'bold',
};

const rewardMessageStyle = {
  backgroundColor: '#ffeb3b',
  padding: '15px',
  borderRadius: '10px',
  marginTop: '20px',
  textAlign: 'center',
};

const backButtonStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: '10px 20px',
  backgroundColor: '#2196F3',
  color: 'white',
  borderRadius: '5px',
  border: 'none',
};

export default PointsDashboard;
