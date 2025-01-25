let amigos = [];

function adicionarAmigo() {
    let inputName = document.getElementById('amigo').value;
    
    if(inputName.trim() ==''){
        alert('Por favor insira um nome.');
    }else{
        amigos.push(inputName.trim());
    }    

    document.getElementById('amigo').value = '';
    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos(){    
    
    let listarNomes = [];
    listarNomes = document.getElementById('listaAmigos');
    listarNomes.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){         
        let nomes = document.createElement('li');
        nomes.innerHTML = amigos[i];
        listarNomes.appendChild(nomes);        
    }
        
}

function sortearAmigo(){   
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';     
    if(!amigos.length){
        alert('Não há amigos disponíveis. Por favor adicione amigos para realizar o sorteio.');
    }else{
        let nomeSorteado = document.createElement('li');
        let sortearAmigo = Math.floor(Math.random() * amigos.length);
        nomeSorteado.innerHTML = `O amigo secreto sorteado é: ${amigos[sortearAmigo]}`;
        resultado.appendChild(nomeSorteado);
    }
}