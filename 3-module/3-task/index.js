function camelize(str) {
  let separator = str.split('-');
  console.log(separator);
  let arr = [];
  let word;
  if (separator[0] === '') {
  separator.shift();
  for (let i = 0; i < separator.length; i++){
    word = separator[i];
    word = word[0].toUpperCase() + word.slice(1);
    arr.push(word);
  }}
  else {
    arr.push(separator.shift());
    for (let i = 0; i < separator.length; i++){
    word = separator[i];
    word = word[0].toUpperCase() + word.slice(1);
    arr.push(word);
    }
  }
  return arr.join('')
}
