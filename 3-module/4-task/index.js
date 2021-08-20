function showSalary(users, age) {
  let arr = [];
  for(let i = 0; i < users.length; i++){
    arr.push(users[i])
  }
  let resultFilter = arr.filter(user => user.age <= age)
  let resultMap = resultFilter.map(user => `${user.name}, ${user.balance}`)
  let connector = resultMap.join(',');
  
  let result = '';
  for(let i = 0; i < resultMap.length; i++){
    if (i < resultMap.length - 1){
    result += resultMap[i] + '\n';
    }
    else{
      result += resultMap[i];
    }
  }
 return result;
}
