function highlight(table) {
 
  for (let i = 1; i < table.rows.length; i++){
    for (let j = 3; j < table.rows[i].cells.length; j++){
 
        let x = table.rows[i].cells[j].dataset.available;
        if (x === 'true'){
          table.rows[i].classList.add('available')
        }
        else {
          if (x === 'false')
          table.rows[i].classList.add('unavailable')
        }
      
        if (table.rows[i].cells[j].dataset.available === undefined){
              table.rows[i].setAttribute('hidden', '')
        }
    }
}

for (let i = 1; i < table.rows.length; i++){
  for (let j = 2; j === 2 ; j++){
  
    if (table.rows[i].cells[j].innerText === 'm'){
      table.rows[i].classList.add('male')
    }
    else{
      table.rows[i].classList.add('female')
    }
  
  }}

  for (let i = 1; i < table.rows.length; i++){
    for (let j = 1; j === 1 ; j++){

      if (table.rows[i].cells[j].innerText < 18){

        table.rows[i].style.setProperty('text-decoration', 'line-through', '')
      }

    }}

}
