const decomposition = require('./lib/decomposition');
const traverse = require('./lib/traverse');
const fetchNested = require('./lib/fetchNested');

const countCandidates = (candidates, target) => {
  const intermediateResult = traverse(decomposition(candidates, target));

  const result = [];
  fetchNested(intermediateResult, result);
  return result.filter(( t={}, a => !(t[a]=a in t) ));
}

module.exports = countCandidates;