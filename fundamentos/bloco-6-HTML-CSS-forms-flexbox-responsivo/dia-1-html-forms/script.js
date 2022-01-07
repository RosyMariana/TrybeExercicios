function Estados() {
    let estados = document.getElementById('estado');
    let opcoes = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for(let cont = 0; cont < opcoes.length; cont+=1){
        let opcao = document.createElement('option');
        opcao.innerText = opcoes[cont];
        opcao.value = opcoes[cont];
        estados.appendChild(opcao);
    }
}
function verificarData() {
    let pegarData= document.querySelector('input');
    let data = pegarData.value;
    let dia = data[0]+data[1];
    console.log(dia)
    if(data.length === 0){
        console.log('data nao preenchida')
    }
    else{
    if(data.length!= 10){
        console.log("data invalida");
    }
    else{
    for(let cont = 0; cont<data.length; cont+=1) {
        if(data[cont]>9 || data [cont]<0){
            console.log("data invalida");
        }
        else{
            if(data[cont]!= '/'){
                console.log("data invalida");
            }
        }
    }
    if(data[2]!='/' && data[5] != '/'){
        console.log("data invalida");
    }
    else{

    }
}
    }
}

function submeter (event) {
    event.preventDefault();
}

window.onload = function (){
    verificarData()
    Estados()

    let button = document.querySelector('.submeter');
    button.addEventListener('click', submeter)
}