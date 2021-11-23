import React from 'react';
import Header from './Header.jsx';

import RandomJoke from './RandomJoke.jsx';
import ListJokes from './ListJokes.jsx';

const App = () => (
  <main className="main">
    <Header />
    <RandomJoke />
    <ListJokes />
  </main>
);

export default App;
