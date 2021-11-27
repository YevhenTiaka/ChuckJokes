import React, { useState } from 'react';
import { fetchAllJokes } from '../../API/fetch';
import randomSearchFunc from '../../Helpers/randomSearchFunc';
import './listJokes.scss';

const ListJokes = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearchClick = () => {
    fetchAllJokes()
      .then(jokes =>
        jokes.value.filter(el => el.joke.toLowerCase().includes(inputValue.toLowerCase())),
      )
      .then(res => {
        setSearchResult(randomSearchFunc(res));
      });
  };
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const isFoundJoke =
    searchResult === '' ? null : <span className="notFound">Dont Joke with Chuck</span>;

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
      <ul className="section-random_joke">{listJokes}</ul>
    </>
  );
};

export default ListJokes;
