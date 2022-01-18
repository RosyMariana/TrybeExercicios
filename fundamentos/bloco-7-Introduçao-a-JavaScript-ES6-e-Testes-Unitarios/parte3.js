const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const adicionar2 = (obj, key, valor) => {
      obj[key] = valor;
  };
  const listar = (obj) => Object.keys(obj);

  const tamanho = (obj) => Object.keys(obj).length;

  const valores = (obj) => Object.values(obj);
  
  adicionar2(lesson2, 'turno', 'noite');
//   console.log(listar(lesson1));
//   console.log(tamanho(lesson1));
//   console.log(valores(lesson1));

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//   console.log(allLessons);

  const numeroTotal = (obj) => {
      let total = 0;
      const array = Object.keys(obj);
      for(cont in array) {
          total += obj[array[cont]].numeroEstudantes
      }
      return total;

  }

  const getValueByNumber = (obj, num) => Object.values(obj)[num];

  const verifyPair = (obj, key, valor) => {
      const vet = Object.entries(obj);
      let igual = false;
      for(let cont in vet) {
          if (vet[cont][0] == key && vet[cont][1]==valor) igual = true;
      }
      return igual;
  }
  
  console.log(numeroTotal(allLessons));
  console.log(getValueByNumber(lesson1,0));
  console.log(verifyPair(lesson3, 'turno', 'noite'));
  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));


  const contador = (obj) => {
    const array = Object.keys(obj);
    let total = 0;
    for(cont in array) {
        if(obj[array[cont]].materia === 'Matemática'){
            total += obj[array[cont]].numeroEstudantes;
        }
    }
    return total;
  }

  const Informacoes = (obj, nome) => {
      let estudantes = 0;
      let licoes = [];
      const array = Object.values(obj);

      for(cont in array){
          licoes.push(array[cont].materia);
          estudantes += array[cont].numeroEstudantes;
      }
      return {lessons: licoes, estudantes: estudantes};

  }
  const createRepor = (allLessons, name)=>{
      const report = {};
      report.professor = name;
      Object.assign(report, Informacoes(allLessons, name));
      return report;
  }
  console.log(contador(allLessons));
  console.log(createRepor(allLessons, 'Maria Clara'));
