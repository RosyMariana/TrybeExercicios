// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

//   const teste = espoco => {
//       if (espoco === true) {
//         let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//         ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//         console.log(ifScope);
        
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   teste(true);

//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   const ordenar = () => {
//     oddsAndEvens.sort(function(a,b){
//         if(a>b) return 1;
//         if(b>a) return -1;
//         return 0;
//     });
 
//     return oddsAndEvens;
//   }
//   const numSorteados = ordenar();
//   console.log(`Os numeros sorteados sao  ${numSorteados}!`);

  const fatorial = numero => numero > 1 ? numero * fatorial(numero-1):1;
  

  let numero = 4;
  let fat = fatorial(numero);
  console.log(`O fatorial de ${numero} é ${fat}`);


 

  const maiorP = frase => {
     let contador = 0;
     let maiorPalavra = 0;
     let palavra = '';
     for(const cont in frase){
        palavra = palavra + frase[cont];
        if(frase[cont] === ' '){            
            if(maiorPalavra<contador){
                maiorPalavra = contador;
            }
            palavra = '';
            contador = 0;
        }
     }
     console.log(palavra)
  }

  maiorP(("Antonio foi no banheiro e não sabemos o que aconteceu"))

  