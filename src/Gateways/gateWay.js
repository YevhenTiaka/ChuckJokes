export const fetchRandomJoke = category =>
  fetch(`http://api.icndb.com/jokes/random?limitTo=[${category}]`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response status is ${response.status}`);
      }
      return response.json();
    })
    .catch(error => console.error('Could not fetch ', error));

export const fetchAllJokes = () =>
  fetch('http://api.icndb.com/jokes')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response status is ${response.status}`);
      }
      return response.json();
    })
    .catch(error => console.error('Could not fetch', error));

export const randomSearchFunc = arr => {
  const max = Math.floor(Math.random() * (arr.length - 4)) + 5;
  const min = max - 5;
  return arr.slice(min, max);
};
