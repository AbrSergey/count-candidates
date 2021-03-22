function traverse(arr){
  const numbers = arr.filter((item) => (typeof item === "number"));
  const arrays = arr.filter((item) => (typeof item === "object"));

  const newResults = arrays.map(element => traverse([...numbers, ...element]));

  if (newResults.length === 1) return newResults[0];
  return newResults.length ? newResults : numbers.sort();
}

module.exports = traverse;