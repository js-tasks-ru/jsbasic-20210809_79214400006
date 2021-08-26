function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  let resultMap = friends.map(user => `${user.firstName} ${user.lastName}`);
  
  for(let i = 0; i < resultMap.length; i++){
    let str = '<li>'+ resultMap[i] + '</li>';
    ul.insertAdjacentHTML('beforeEnd', str);
  }
  return ul;
}
