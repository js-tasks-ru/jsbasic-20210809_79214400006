function ucFirst(str) {
  if (str === ''){
    return str;
  }
  else {
  	str = str.split('');
    let newStr = str[0].toUpperCase();
    newStr = newStr.split('')
    for (let i = 1; i < str.length; i++){
      newStr.push(str[i])
    }
    newStr = newStr.join('')
    return newStr;
  }
}
