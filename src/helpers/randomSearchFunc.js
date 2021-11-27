const randomSearchFunc = arr => {
  const max = Math.floor(Math.random() * (arr.length - 4)) + 5;
  const min = max - 5;
  return arr.slice(min, max);
};

export default randomSearchFunc;
