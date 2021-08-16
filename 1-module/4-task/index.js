function checkSpam(str) {
	str = str.toLowerCase();
	let spam1 = '1xBet';
  spam1 = spam1.toLowerCase();
  let spam2 = 'XXX';
  spam2 = spam2.toLowerCase();
  
	return(str.indexOf(spam1) >= 0 || str.indexOf(spam2) >= 0) ? true : false
}
