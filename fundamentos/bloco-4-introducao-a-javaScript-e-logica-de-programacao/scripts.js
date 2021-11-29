
    
    const myName = "Rosy Mariana"
    const birthCity = "Águas Formosas/MG"
    let birthYear = 1994;

   
    console.log(myName);
    console.log(birthCity);
    console.log(birthYear);

    birthYear = 2030;
    console.log(birthYear);

    /* nao pode reatribuir um valor pra constante */

    let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

const base = 5;
let height = 8;
const area = base * height;
const perimeter = base + height;

console.log(area);
console.log(perimeter);

const nota = 90;

if (nota>=80) {
    console.log("Parabéns, você foi aprovada(o)!");

}
else if(nota<80 &&  nota>=60){
    console.log("Você está na nossa lista de espera");
}
else{
    console.log("Você foi reprovada(o)");
}

const estado = "aprovada";
switch(estado){
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!")
        break;
    case "lista":
    console.log("Você está na nossa lista de espera");
    break;
    case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

    default:
        console.log("nao se aplica");
}