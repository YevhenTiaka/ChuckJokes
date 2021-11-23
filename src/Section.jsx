import React, { useState } from 'react';
import { fetchRandomJoke } from './gateWay';
import ListJokes from './ListJokes.jsx';

const Section = () => {
  const [category, setCategory] = useState('');

  const [randomJoke, setRandomJoke] = useState('');

  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };

  const handleClick = () => {
    const isRandom = category === '' ? 'nerdy,explicit' : category;
    fetchRandomJoke(isRandom).then(jokes => setRandomJoke(jokes.value.joke));
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <span className="header-joke">{randomJoke}</span>
      <section className="section">
        <select className="section-select" onChange={handleChange}>
          <option value="nerdy,explicit">Random</option>
          <option value="nerdy">Nerdy</option>
          <option value="explicit">Explicit</option>
        </select>
        <button className="section-btn" onClick={handleClick}>
          Get joke
        </button>
        <input
          className="section-input"
          type="text"
          placeholder="Chuck String"
          value={inputValue}
          onChange={handleInputChange}
        />
      </section>
      <ListJokes inputValue={inputValue} />
    </>
  );
};

export default Section;
