function fetchNested(arr, result){
  if (typeof arr[0] === "object"){
      arr.forEach(element => fetchNested(element, result));
  }
  else result.push(arr);
}

module.exports = fetchNested;