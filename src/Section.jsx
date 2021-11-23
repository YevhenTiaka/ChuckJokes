import React, { useState } from 'react';
import { fetchRandomJoke, fetchAllJokes } from './gateWay';

const Section = () => {
  const [category, setCategory] = useState('');

  const [randomJoke, setRandomJoke] = useState('');

  const [inputValue, setInputValue] = useState('');

  const [searchResult, setSearchResult] = useState('');

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

  const handleSearchClick = () => {
    fetchAllJokes()
      .then(jokes =>
        jokes.value.filter(el => el.joke.toLowerCase().includes(inputValue.toLowerCase())),
      )
      .then(res => {
        const randomSearchedJokes = res.slice(0, 5);
        setSearchResult(randomSearchedJokes);
      });
  };
  const isFoundJoke = searchResult === '' ? null : <span className="notFound">No Jokes</span>;

  const listJokes =
    searchResult.length === 0
      ? isFoundJoke
      : searchResult.map(el => (
          <li className="section-random_joke-item" key={el.id}>
            {el.joke}
          </li>
        ));
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
        <button className="section-search_btn" onClick={handleSearchClick}>
          Search Jokes
        </button>
      </section>
      <ul className="section-random_joke">{listJokes}</ul>
    </>
  );
};

export default Section;
