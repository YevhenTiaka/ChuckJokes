import React, { useState } from 'react';
import { fetchRandomJoke } from './gateWay';

const RandomJoke = () => {
  const [category, setCategory] = useState('');

  const [randomJoke, setRandomJoke] = useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };

  const handleClick = () => {
    const isRandom = category === '' ? 'nerdy,explicit' : category;
    fetchRandomJoke(isRandom).then(jokes => setRandomJoke(jokes.value.joke));
  };

  return (
    <>
      <span className="header-joke">{randomJoke}</span>
      <div className="section">
        <select className="section-select" onChange={handleChange}>
          <option value="nerdy,explicit">Random</option>
          <option value="nerdy">Nerdy</option>
          <option value="explicit">Explicit</option>
        </select>
        <button className="section-btn" onClick={handleClick}>
          Get joke
        </button>
      </div>
    </>
  );
};

export default RandomJoke;
