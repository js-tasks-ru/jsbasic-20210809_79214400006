function sumSalary(salaries) {
  let result = 0;
 for (let key in salaries) {
   if (typeof(salaries[key]) === 'number' 
   && Number.isFinite(salaries[key]) // Является ли число конечным?
   && !Number.isNaN(salaries[key])){ // (Не) Является ли число 'NaN'
     result = result + salaries[key]
   }
 }
   return ( result );
 }
