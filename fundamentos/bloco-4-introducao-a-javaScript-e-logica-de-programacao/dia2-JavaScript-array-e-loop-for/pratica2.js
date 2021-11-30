let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

/* exercicio 1 */
for(let cont=0; cont<numbers.length; cont++){
    console.log(numbers[cont]);
}

/* exercicio 2 */

let soma = 0;
console.log(soma);
for(let cont=0; cont<numbers.length; cont++){
    soma = soma + numbers[cont];
}

console.log(soma);

/* Exercicio 3 */

let media = soma/numbers.length;

console.log(media);

/* Exercicio 4 */

if(media>20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
}

/* Exercicio 5 */
let maior=0;
for(let cont=0; cont < numbers.length-1; cont++){
    if(numbers[cont] > maior){
        maior = numbers[cont];
    }
  
}
    console.log(maior);

/* Exercicio 6 */
let impares = 0;
for(let cont = 0; cont<numbers.length; cont++){
    if(numbers[cont]%2!=0){
        impares++;
    }

}
if(impares > 0){
    console.log(impares);
}
else{
    console.log("nenhum valor ímpar encontrado");
}


/* Exercicio 7 */

let menor=numbers[0];
for(let cont=0; cont < numbers.length-1; cont++){
    if(numbers[cont] < menor){
        menor = numbers[cont];
    }
  
}
    console.log(menor);

    /* Exercicio 8 */
    let num = [];
    for(let cont=0; cont<25; cont++){
        num[cont] = cont+1;
   }

   console.log(num);

   /* Exercicio 9 */
   for(let cont=0; cont<num.length; cont++){
       num[cont]=num[cont]/2;
   }
   console.log(num);