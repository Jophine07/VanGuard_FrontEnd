import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: 'What is the main benefit of reducing paper cup usage?',
      options: ['Saves money', 'Protects the environment', 'Looks trendy', 'Increases productivity'],
      answer: 'Protects the environment',
    },
    {
      id: 2,
      question: 'How many paper cups are used annually worldwide?',
      options: ['500 million', '1 billion', '500 billion', '1 trillion'],
      answer: '500 billion',
    },
    {
      id: 3,
      question: 'Which material is commonly used for making reusable cups?',
      options: ['Plastic', 'Ceramic', 'Paper', 'Glass'],
      answer: 'Ceramic',
    },
    {
      id: 4,
      question: 'What percentage of paper cups are recycled globally?',
      options: ['10%', '20%', '50%', '70%'],
      answer: '10%',
    },
    {
      id: 5,
      question: 'Which of these is an alternative to paper cups?',
      options: ['Single-use plastic cups', 'Reusable metal cups', 'Styrofoam cups', 'None of these'],
      answer: 'Reusable metal cups',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);

  const navigate = useNavigate();

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setCorrectAnswers(correctAnswers + 1);
      setShowCorrect(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        alert('Quiz Finished!');
      }
    } else {
      setWrongAnswers(wrongAnswers + 1);
      setShowCorrect(true);
    }
  };

  const restartQuiz = () => {
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setCurrentQuestion(0);
    setShowCorrect(false);
  };

  return (
    <div>
      <Navbar />
      {/* Main Container */}
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          padding: '20px',
          textAlign: 'center',
          maxWidth: '600px',
          margin: 'auto',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ color: '#4CAF50', marginBottom: '20px' }}>Interactive Quiz</h1>
        <h2 style={{ color: '#333' }}>{questions[currentQuestion].question}</h2>
        <div style={{ marginTop: '20px' }}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{
                display: 'block',
                width: '80%',
                margin: '10px auto',
                padding: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              {option}
            </button>
          ))}
        </div>
        {showCorrect && (
          <p style={{ marginTop: '20px', color: '#FF5722', fontSize: '16px' }}>
            The correct answer is: <strong>{questions[currentQuestion].answer}</strong>
          </p>
        )}
        <p style={{ fontSize: '14px', color: '#777', marginTop: '20px' }}>
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <p style={{ fontSize: '16px', marginTop: '20px' }}>
          Correct: <strong>{correctAnswers}</strong>, Wrong: <strong>{wrongAnswers}</strong>
        </p>
        {currentQuestion === questions.length - 1 && (
          <button
            onClick={restartQuiz}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            Restart Quiz
          </button>
        )}
      </div>

      {/* Back to Dashboard Button - positioned on the top-right corner */}
      <button
        onClick={() => navigate('/dashboard')}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#FF9800',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Quiz;
