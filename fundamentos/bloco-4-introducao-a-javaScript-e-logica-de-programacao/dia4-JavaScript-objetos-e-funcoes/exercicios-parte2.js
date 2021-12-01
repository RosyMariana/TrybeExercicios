/* Exercicio 1 - Funçao palindromo */

// let palavra = 'desenvolvimento'


// function palindromo(palavra){
//     let confirmacao=true;
//     let n = palavra.length;

//     for(let cont=0; cont<n; cont++){

//         if(palavra[cont]!=(palavra[n-cont])){
//             confirmacao = false;
//         }
//     }


//     return confirmacao;
// }

// console.log(palindromo(palavra))

/* Exercicio 2 - Indice do maior valor */

// let teste = [2, 3, 6, 7, 10, 1]; 
// let retorno=0;

// function maior (array){
//     retorno = 0;
//     for(let ind in array){
//         if(array[retorno]<array[ind]){
//             retorno = ind;
//         }
        
//     }

//     return retorno;
// }

//     console.log(maior(teste));

/* Exercicio 3 - menor indice */

// let teste = [2, 4, 6, 7, 10, 0, -3]; 
// let retorno=0;

// function maior (array){
//     retorno = 0;
//     for(let ind in array){
//         if(array[retorno]>array[ind]){
//             retorno = ind;
//         }
        
//     }

//     return retorno;
// }

//     console.log(maior(teste));

/* Exercicio 4 - Maior quantidade de caracteres */

    // let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


    // function caract(array){
    //     let nome = teste[0];
    //     for(let cont in array){

    //         if(array[cont].length>nome.length){
    //             nome = array[cont];
    //         }
    //     }

    //     return nome;
    // }


    //     console.log(caract(teste))

    /* Exercicio 5 - inteiros que repetem */

    // let teste= [2, 3, 2, 5, 8, 2, 3];
   

    // function repet (array){
    //     let aux1 = 0, aux2=0, numero;
    //     for(let cont in array){
    //         aux1 = 0;
    //         for(let cont2 = 1; cont2<array.length; cont2+=1){
    //             if(array[cont2]===array[cont]){
                   
    //                     aux1+=1;
    //             }
    //         }

    //         if(aux1>aux2){
    //             aux2 = aux1;
    //             numero = cont;
    //         }
    //     }

    //     return array[numero];

    // }

    //     console.log(repet(teste));