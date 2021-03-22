const countCandidates = require('./countCandidates');
const candidatesL = 30;
const candidateMax = 200;
const targetMax = 500;

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function test(){
  let candidates = [...Array(Math.random()*candidatesL|1)].map(e => Math.random()*candidateMax|1);
  candidates = candidates.filter(onlyUnique);

  const target = Math.random()*targetMax|1;

  console.log(`CANDIDATES: ${candidates}; target: ${target}`);
  
  const result = countCandidates(candidates, target);

  console.log(`RESULT: ${JSON.stringify(result)}`);

  let flag = true;
  if (result && (result.length !== 1 || (result[0].length !== 0) )){
    result.forEach(element => {
      if (typeof element !== "object"){
        console.error(`ERROR: typeof element = ${typeof element}`);
        flag = false;
      }
      else {
        const sum = element.reduce((acc, cur) => acc + cur);

        if (sum !== target){
          console.error(`ERROR: element: ${element}; sum = ${sum};`);
          flag = false;
        }
      }
    });
  }

  if (flag) console.log("OK :)");
  else console.log("ERROR (((");
}

module.exports = test;