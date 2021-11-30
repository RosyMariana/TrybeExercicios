/* exercicio 1 */
/*
let n=5;
let ast = '*';
let espaco = ' ';

 for(let cont=0; cont<n; cont+=1){
    espaco= ast+espaco;
}

for(let cont2=0; cont2<n; cont2+=1){
    console.log(espaco);
}
*/


/* exercicio 2 */
/*let n=5;
let ast = '*';
let espaco = ' ';


    for(let cont=0; cont<n; cont+=1){
        espaco = ast + espaco;
        console.log(espaco);

    }
*/

/* Exercicio 3 */

/*
let n=5;
let ast = '*';
let espaco = ' ';
for(let cont=n; cont>0; cont-=1){

  for(let cont2=cont; cont2>0; cont2-=1){
    ast = ' ' + ast;
  }

  console.log(ast);
  ast = ast.trim() /*tira os espaçoes desnecessarios 
  ast = ast + "*"

}
*/


/* exercicio 4 */

/*
let numEspacos, numAst, n=5;

for(let cont = 1; cont<=n; cont+=1){
    let esp = '', ast='';
    if(cont%2!=0){
        numAst = cont;
        numEspacos = n - cont;

        for(let cont2=0; cont2<(numEspacos/2); cont2+=1){
            esp = esp + " "

        }
        for(let cont3=1; cont3<=numAst; cont3++){
            ast = ast + "*";
        }

        console.log(esp,ast,esp)
    }
}

    */

/* Bonus 1*/

/* let numEspacos, numAst, n=7, contador = 0;
let nImpar = 0;

for(let cont5 = 1; cont5<=n; cont5++){
    if(cont5%2!=0){
        nImpar+=1;
    }
}
for(let cont = 1; cont<=n; cont+=1){
    let esp = '', ast='', espMeio='', astAux2;;
    if(cont%2!=0){
        numAst = cont;
        numEspacos = n - cont;

        for(let cont2=0; cont2<(numEspacos/2); cont2+=1){
            esp = esp + " "
  
        }
        for(let cont3=1; cont3<=numAst; cont3++){
            ast = ast + "*";
    
        }
        if(contador>0 && contador<(n-nImpar)){

            for(let cont4=3; cont4<=cont; cont4++){
                espMeio = ' ' + espMeio;
             
            }
            astAux2 = "*"+espMeio+"*";
            console.log(esp,astAux2,esp);
        }

        else{
            console.log(esp,ast,esp);
        }
        contador +=1;
    }   
} */

/* Bonus 2 */

let n = 23, cont=0;

for(let cont2=2; cont2<n; cont2++){
    if(n%cont2===0){
        cont+=1;
    }
    if(cont!=0){
        break;
    }
}

console.log(cont)
if(cont!=0){
    console.log("O numero nao é primo");
}
else{
    console.log("O numero é primo");
}