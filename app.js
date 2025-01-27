let amigos = [];
let listaDeAmigosSorteados = [];

function adicionarAmigo() {
    let inputName = document.getElementById('amigo').value;
    
    if(inputName.trim() ==''){
        alert('Por favor insira um nome.');
    }else if(amigos.includes(inputName)){
        alert(`o nome "${inputName}" já foi adicionado!`);
    }else
    {
        amigos.push(inputName.trim());
    }    

    document.getElementById('amigo').value = '';
    atualizarListaDeAmigos();

}

function atualizarListaDeAmigos(){    
    
    const listarNomes = document.getElementById('listaAmigos');
    listarNomes.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){     
        let nomes = document.createElement('li');
        nomes.innerHTML = amigos[i];
        listarNomes.appendChild(nomes);        
    }        

}

function sortearAmigo(){      

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';  
    let sorteioDeAmigos;
    
    if(!amigos.length){
        alert('Não há amigos disponíveis. Por favor adicione amigos para realizar o sorteio.');
        return;
    }
    
    do{
        sorteioDeAmigos = Math.floor(Math.random() * amigos.length);
    }while(listaDeAmigosSorteados.includes(sorteioDeAmigos));

    listaDeAmigosSorteados.push(sorteioDeAmigos);

    const nomeSorteado = document.createElement('li');

    if(nomeSorteado instanceof Node){
        nomeSorteado.innerHTML = `O amigo secreto sorteado é: ${amigos[sorteioDeAmigos]}`;
        resultado.appendChild(nomeSorteado); 
    }

    if(listaDeAmigosSorteados.length === amigos.length){       
        document.getElementById('sortear').setAttribute('disabled', true);         
        setTimeout(()=> {
            alert('Todos os nomes de amigos já foram sorteados! Limpando as listas...');
            reiniciarAmigoSecreto();   
        }, 1000);
    }         

}

function reiniciarAmigoSecreto(){

    amigos = [];
    listaDeAmigosSorteados = [];
    nomeSorteado = null;       
    const resultado = document.getElementById('resultado');
    resultado.innerHTML ='';
    const listarNomes = document.getElementById('listaAmigos');
    listarNomes.innerHTML = '';
    document.getElementById('sortear').removeAttribute('disabled');

}