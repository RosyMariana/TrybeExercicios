const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acumulador, nome) => acumulador + nome.split('').reduce((acumu, atual) => { // split() O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array
        if (atual === 'a' || atual === 'A') return acumu + 1;
        return acumu;
    }, 0), 0);
  }

  console.log(containsA())