import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Navbar from './Navbar';

const AwarenessModule = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const articles = [
    {
      title: 'The Environmental Impact of Paper Cups',
      description:
        'Learn about how paper cups contribute to deforestation, carbon emissions, and landfill waste.',
      link: 'https://www.quora.com/How-can-the-use-of-paper-cups-in-coffee-shops-be-reduced',
    },
    {
      title: '10 Sustainable Alternatives to Paper Cups',
      description:
        'Discover eco-friendly options like reusable cups and biodegradable materials.',
      link: '#',
    },
    {
      title: 'How You Can Reduce Paper Cup Usage',
      description:
        'Simple steps you can take to minimize your reliance on single-use cups.',
      link: '#',
    },
    {
      title: 'The Hidden Cost of Single-Use Plastics',
      description:
        'Explore the broader environmental impact of single-use plastics, including paper cups.',
      link: 'https://www.nationalgeographic.com/environment/article/plastic-pollution',
    },
    {
      title: 'Why Reusable Cups Are the Future',
      description:
        'An in-depth look at why switching to reusable cups is crucial for a sustainable future.',
      link: '#',
    },
    {
      title: 'The Role of Consumers in Reducing Paper Waste',
      description:
        'How individuals can play a key role in reducing waste and making sustainable choices.',
      link: '#',
    },
    {
      title: 'Sustainability in the Coffee Industry',
      description:
        'Understand how the coffee industry is addressing environmental concerns with new practices.',
      link: 'https://www.globalcitizen.org/en/content/how-coffee-is-impacting-environment/',
    },
  ];

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
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate('/dashboard')}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#2196F3',
          color: 'white',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Back to Dashboard
      </button>

      <h1 style={{ color: '#4CAF50', marginBottom: '20px' }}>Awareness Module</h1>
      <p
        style={{
          color: '#555',
          fontSize: '16px',
          marginBottom: '30px',
        }}
      >
        Explore resources and tips to understand the negative environmental impacts of paper cups and discover sustainable alternatives.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              padding: '15px',
              textAlign: 'left',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                color: '#333',
                marginBottom: '10px',
              }}
            >
              {article.title}
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '15px',
              }}
            >
              {article.description}
            </p>
            <a
              href={article.link}
              style={{
                textDecoration: 'none',
                color: '#4CAF50',
                fontWeight: 'bold',
              }}
            >
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AwarenessModule;
