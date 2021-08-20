function getMinMax(str) {
	let arr = str.split(' ')
  let arrNum = [];
  
  for (let i = 0; i < arr.length; i++){
    if (!isNaN(arr[i])){
    arrNum.push(Number(arr[i]))
  }
  }
  let max = Math.max.apply(null, arrNum)
  let min = Math.min.apply(null, arrNum)
  
let result = { 
      min: min, 
      max: max 
};
  
return result;
}
