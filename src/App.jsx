import React from 'react';
import Header from './Components/Header/Header.jsx';

import RandomJoke from './Components/RandomJoke/RandomJoke.jsx';
import ListJokes from './Components/ListJokes/ListJokes.jsx';

const App = () => (
  <main className="main">
    <Header />
    <RandomJoke />
    <ListJokes />
  </main>
);

export default App;
