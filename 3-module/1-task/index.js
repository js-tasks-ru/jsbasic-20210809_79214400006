function namify(users) { 
  let arr = [];
  for(let i = 0; i < users.length; i++){
    arr.push(users[i])
  }
  let result = arr.map(user => `${user.name}`)
  return result;
}
