log = () => {} // console.log

function decomposition(candidates, target, parent = true){
  log('\n');
  log(`--- start arr = ${candidates}; target = ${target} ---`);
  const arr = [...candidates];
  const result = [];

  for (const candidate of arr.sort()){
      const p = Math.floor(target / candidate); // floor
      const r = target % candidate; // remainder
      
      log(` ${target} / ${candidate}; p = ${p}; r = ${r}`);
      
      if (p > 0 && r === 0){
          log(`PUSH: ${new Array(p).fill(candidate)}`);
          result.push(new Array(p).fill(candidate));
      }
      if (p > 0){
          const subResult = []
          for (let i = 1, newTarget = target - candidate; i <= p && newTarget > 1; i += 1, newTarget = target - candidate * i){
              log(`       *** newTarget = target - i * candidate; ${newTarget} = ${target} - ${i} * ${candidate}; ***`);

              const decResp = decomposition(arr, newTarget, false);
              if (decResp && decResp.length){
                  const arr1 = new Array(i).fill(candidate);
                  arr1.push(decResp);
                  subResult.push(arr1);
              }
          }
          if (subResult.length) {
              result.push(subResult);
          }
      }
  }

  log(`$$  RESULT: candidates = ${candidates}; target = ${target}; result = ${JSON.stringify(result)}\n`);
  if (parent) log(JSON.stringify(result));
  return result;
}

module.exports = decomposition;