const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  // Exercicio 1
  
  function formatedBookNames() {
   return books.map((book) => `${book.name} -${book.genre} - ${book.author.name}`);
  }

//   console.log(formatedBookNames());

  // Exercicio 2
  function nameAndAge() {
    return books.map((book) => (
        {author: book.author.name,
            age: book.releaseYear - book.author.birthYear,
        } )).sort((ageA, ageB) => ageA.age - ageB.age);
  }

//   console.log(nameAndAge());

//Exercicio 3
function fantasyOrScienceFiction() {
    return books.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia'));
  }

//   console.log(fantasyOrScienceFiction());

// Exercicio 4

function oldBooksOrdered() {
    const currentYear = new Date().getFullYear();
    return books.filter((book) => ((currentYear - book.releaseYear) > 60)).sort((anoA, anoB) => anoA.releaseYear - anoB.releaseYear);
  }
//   console.log(oldBooksOrdered());

// Exercicio 5

function fantasyOrScienceFictionAuthors() {
   return books.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia')).map((book)=> book.author.name).sort();
   }

//   console.log(fantasyOrScienceFictionAuthors());

// Exercicio 6
  function oldBooks() {
    const currentYear = new Date().getFullYear();
    return books.filter((book) => ((currentYear - book.releaseYear) > 60)).sort((anoA, anoB) => anoA.releaseYear - anoB.releaseYear).map((book) => book.name);
  }

//   console.log(oldBooks())

// Exercicio 7

//split() O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array

// endsWith() O método endsWith() indica se uma string termina com determinados caracteres, retornando true ou false .

function authorWith3DotsOnName() {
    return books.find((book) => (book.author.name.split(' ').filter((livro) => livro.endsWith('.')).length === 3)).name;
  }

  console.log(authorWith3DotsOnName())