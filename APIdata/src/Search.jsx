import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [data1, setData] = useState(null); // State to hold the API data
  const [count, setCount] = useState(true); // Loading state

  // API call function
  const SetAPI = async () => {
    try {
      const response = await axios.get(
        'https://dummyjson.com/recipes?limit=10&skip=10&select=name,image'
      );
      setData(response.data); // Store the data from API response
      setCount(false); // Set loading state to false once data is fetched
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
      {count ? (
        <p>Wait please...</p> // Loading message
      ) : (
        data1 && data1.recipes && data1.recipes.length > 0 ? ( // Check if data and recipes exist
          <div className="recipe-container mt-24" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data1.recipes.map((recipe, index) => (
              <div
                key={index}
                style={{
                  animationDuration:'10s',
                  border: `2px solid ${getRandomColor()}`, // Apply random border color
                  padding: '10px',
                  margin: '10px',
                  width: '200px',
                  textAlign: 'center',
                  borderRadius: '10px',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
                />
                <p><strong>{recipe.name}</strong></p>
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

export default Search;
