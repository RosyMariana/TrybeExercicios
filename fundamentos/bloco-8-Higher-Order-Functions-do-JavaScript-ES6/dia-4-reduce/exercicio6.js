const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
 const nameAndAverage = students.map((student, cont) => ({
     name: student,
     average: (notes[cont].reduce((acumulador, atual) => acumulador + atual, 0)/notes[cont].length),
      }));
return nameAndAverage;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage())