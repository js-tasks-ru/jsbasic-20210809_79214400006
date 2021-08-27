function makeDiagonalRed(table) {

for (let i = 0; i < table.rows.length; i++){
    for (let j = 0; j < table.rows[i].cells.length; j++){

        table.rows[i].cells[i].style.backgroundColor = 'red';

    }
}
}
