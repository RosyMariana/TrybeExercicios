/* Questoes 1 a 5 */

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };

//   console.log("Bem-vinda, " + info.personagem);
//   console.log(info);

//   for(let chaves in info){
//       console.log(chaves);
//   }

    // for(let chaves in info){
    //     console.log(info[chaves]);
    // }

    // let info2 = {
    //     personagem: 'Tio Patinhas',
    //     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    //     nota: 'O último MacPatinhas',
    //     recorrente: 'Sim'
    //   };

    //   for(let prop in info){

    //     if(info[prop]===info2[prop]){
    //         console.log("ambos recorrentes //");
    //     }
    //     else{
    //         console.log(info[prop]+ " e " + info2[prop]);

    //     }

    //   }

    /* Questoes 6-8 */

    let leitor = {
        nome: 'Julia',
        sobrenome: 'Pessoa',
        idade: 21,
        livrosFavoritos: [
          {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
          },

        ],
      };

      console.log("O livro favorito de "+ leitor.nome + " se chama '" + leitor.livrosFavoritos[0].titulo+"'")

      leitor.livrosFavoritos.push(
      {
            titulo: 'Harry Potter e o Prisioneiro de Azkaban',
            autor: 'JK Rowling',
            editor: 'Rocco',
      }
      )

          console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")
      