let amigos = [];

function adicionarAmigo() {
    let inputName = document.getElementById('amigo').value;
    
    if(inputName.trim() ==''){
        alert('Por favor insira um nome.');
    }else{
        amigos.push(inputName.trim());
    }    

    document.getElementById('amigo').value = '';
    atualizarListaDeAmigos()
    
}

function atualizarListaDeAmigos(){    
    
    let listarNomes = [];
    listarNomes = document.getElementById('lista');
    listarNomes.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){         
        let nomes = document.createElement('li');
        nomes.textContent = amigos[i];
        listarNomes.appendChild(nomes);        
    }
        
}

