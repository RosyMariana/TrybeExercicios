/* questao 1*/
const a=10, b=2;

let soma = a+b;
let sub = a-b;
let mult = a*b;
let div = a/b;
let mod = a%b;

console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);
console.log(mod);


/* questao 2*/
if(a>b){
    console.log("a é maior que b");
}
else if(b>a){
    console.log("b é maior a");
}
else{
    console.log("sao iguais")
}

/*questao 3*/
const c=10, d=10, e=10;

if(c>d && c>e){
    console.log("c é maior que d e e");
}
else if(d>c && d>e){
    console.log("d é maior e e c");
}
else if(e>c && e>d){
    console.log("e é maior d e c");
}
else{
    console.log("sao iguais");
}

/* questao 4*/
const valor=0;

if(valor>0){
    console.log("valor positivo");
}
else if (valor<0){
    console.log("valor negativo");
}
else{
    console.log("valor igual a zero")
}

/* questao 5*/
const angulo1=30, angulo2=90, angulo3=60;

if(angulo1+angulo2+angulo3===180){
    console.log("É um triangulo");
}
else{
    console.log("Angulos invalidos para um triangulo");
}

/*questao 6*/
const nome = "bispo";

switch(nome.toLowerCase){
    case "bispo":
        console.log("Bispo: Movimenta-se apenas na diagonal.");
        break;
    case "rei":
        console.log("Rei: Moviemnta-se uma casa apenas para qualquer direção.");
        break;
    case "peao":
        console.log("Peão: Movimenta-se penas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    case "rainha":
        console.log("Rainha: movimenta-se na diagonal, horizontal e vertical.");
        break;
    case "torre":
        console.log("Torre: Movimenta-se na horizontal e na vertical.");
        break;
    case "cavalo":
        console.log("Cavalo: movimenta-se em L e pode pular sobre as peças.");
        break;
    default:
        console.log('Nao é uma peça de xadrez');
}

    /* questao 7 */
    const porcentagem = 90;

    if(porcentagem>=90){
        console.log("conceito A");
    }
    else if(porcentagem>=80){
        console.log("conceito B");
    }
    else if(porcentagem>=70){
        console.log("conceito C");
    }
    else if(porcentagem>=60){
        console.log("conceito D");
    }
    else if(porcentagem>=50){
        console.log("conceito E");
    }
    else if(porcentagem<50 && porcentagem>-1){
        console.log("conceito F");
    }
    else{
        console.log("nota invalida");
    }

    /*Questao 8*/

    const num1=3, num2=4, num3=9;

    if(num1%2==0 || num2%2==0 || num3%2==0){
        console.log(true);
    }
    else{
        console.log(false);
    }
/*Questao 9*/

if(num1%2!=0 || num2%2!=0 || num3%2!=0){
    console.log(true);
}
else{
    console.log(false);
}