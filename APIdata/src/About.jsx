import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About= () => {
  const [data1, setData] = useState(null); // State to hold the API data
  const [loading, setLoading] = useState(true); // Loading state

  // API call function
  const SetAPI = async () => {
    try {
      const response = await axios.get(
        'https://dummyjson.com/recipes/search?q=Margherita'
      );
      setData(response.data); // Store the data from API response
      setLoading(false); // Set loading state to false once data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    SetAPI();
  }, []);

  // Function to generate a random color for borders
  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow', 'black'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    
    <div>
      
      {loading ? (
        <p>Wait please...</p> // Loading message
      ) : (
        data1 && data1.recipes && data1.recipes.length > 0 ? ( // Check if data and recipes exist
          <div className="recipe-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data1.recipes.map((recipe, index) => (
              <div
                key={index}
                style={{
                  marginTop: '60px',
                  border: `2px solid ${getRandomColor()}`, // Apply random border color
                  padding: '10px',
                  margin: '10px',
                  width: '250px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                 <p className=' font-medium'> Id-{recipe.id}</p>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                />
                <p><strong>{recipe.name}</strong></p>
                <p>{recipe.instructions}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No recipes found.</p> // Message if no data is returned
        )
      )}
    </div>
  );
};

export default About;
