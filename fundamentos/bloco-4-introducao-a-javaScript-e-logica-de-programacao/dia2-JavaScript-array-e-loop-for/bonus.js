let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/* Questao 1 */
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);

  /* Questao 2 */
  for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers);


  let mult = [];
  let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 

  for(let cont=0; cont<numeros.length; cont++){
    
    if(cont+1<numeros.length){
    mult[cont]=numeros[cont]*numeros[cont+1];
    }
    else{
    mult.push(numeros[cont]*2);
    }

  }

  console.log(mult);
