const newEmployees = (myFunction) => {
    const employees = {
      id1: myFunction('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: myFunction('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: myFunction('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  // nome_da_pessoa@trybe.com .

  const myFunction = (nomeCompleto) => {
    const nome = nomeCompleto.toLowerCase().replace(' ', '_');
    const email = `${nome}@trybe.com `
    return {
        nome: nomeCompleto,
        Email: email,
    };
} 

console.log(newEmployees(myFunction))