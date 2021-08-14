/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 
 function isValid(name) {
  if  (name === null)  {
    return false;
  }
  else { 
  let x = name.split('')
  if (x.length >= 4) {
  for (let i = 0; i <= x.length; i++){
  if (x[i] === ' ') {
  return false;
}
else { 
  return true; 
}}}}}*/

function isValid(name) {
  let a = true;
  if  (name === null)  {
    return false;
  }
    else { 
      let x = name.split('')
      if (x.length < 4) {
      return false; 
      }
        else {
          for (let i = 0; i <= x.length; i++){
            if (x[i] === ' ') {
              a = false
            }
}}}
return a; 
}


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
