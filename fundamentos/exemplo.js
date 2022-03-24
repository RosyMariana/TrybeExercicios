let teta = 'teste';

let newObj = {};
Object.defineProperty(newObj, teta, {
value: {
    'officeHour': 'teste',
    'exhibition': 'outro teste'
}
});

console.log(newObj)