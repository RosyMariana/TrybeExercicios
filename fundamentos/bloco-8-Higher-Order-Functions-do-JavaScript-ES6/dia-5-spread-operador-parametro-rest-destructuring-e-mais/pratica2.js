const sum = (...numeros) => {
 return numeros.reduce(((acumulador, valor) => acumulador+valor), 0);
};

console.log(sum(1,2,3,4,5,6,7));