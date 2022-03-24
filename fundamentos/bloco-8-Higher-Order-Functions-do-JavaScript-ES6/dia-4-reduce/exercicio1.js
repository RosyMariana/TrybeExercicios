const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  //A função concat() combina o texto de duas ou mais strings e retorna uma nova string. As alterações de texto de uma string não afetam a outra string.
  //str.concat(string2 [, ...stringN])

  function flatten() {
   return arrays.reduce((resultado, obj) => resultado.concat(obj), []);
  }

  console.log(arrays)