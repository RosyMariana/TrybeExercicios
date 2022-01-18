let clickCount = 0;

const botao = document.querySelector('#botao');

botao.addEventListener ('click', () =>  {
    clickCount+=1;
    console.log(clickCount);
 } );


