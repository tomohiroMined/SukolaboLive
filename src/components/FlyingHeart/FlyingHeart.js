import React, { useEffect, useState } from 'react';
import './FlyingHeart.css';

function FlyingHeart() {
    const [hearts, setHearts] = useState([]);
  // Function to generate a random position
  const generateRandomPosition = () => {
    const randomPosition = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
    return `${randomPosition}%`; // Convert it to a percentage
  };

  const calculateFontSize = () => {
    const screenHeight = window.innerHeight || document.documentElement.clientHeight;
    return `${screenHeight / 40}px`;
  };


  function addHeart() {
    const newHeart = {
      id: Date.now(), // unique identifier for each heart
      left: generateRandomPosition(),
      fontSize: calculateFontSize(),
    };
    setHearts((prevHearts) => [...prevHearts, newHeart]);

    // Remove the heart after 4 seconds
    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id));
    }, 2000);
  };

  useEffect(addHeart, []); // Add a heart on component mount

  return (
    <div className="heart-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          role="img"
          aria-label="heart"
          className="flying-heart"
          style={{ left: heart.left }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};

export default FlyingHeart;
