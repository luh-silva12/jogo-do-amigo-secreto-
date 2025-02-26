    let amigos = [];                                                                       // crie um array para armazenar nome dos amigos.             


    function adicionarAmigo(){                                                               // função para usuario inserir o nome.
    let campo = document.querySelector ('#amigo');                                          // capturar o valor de entrada.
    let nome = campo.value.trim();                                                          //validar a entrada.
    if (nome === ""){                                                                       // validar a entrada e garanti que o campo não está vazio.
    alert ('Por favor, insira um nome.');                                                   //  exibir alerta 
    
    }else {
        amigos.push(nome);                                                                  // atualizar array de amigos.
        campo.value ='';                                                                    //limpar campo de entrada 
        listaAmigos();                                                                      // redefinir para uma string vazia.
    }   
}
    function listaAmigos(){                                          
        let listaAmigos = document.querySelector('#listaAmigos');                           // obtendo o elemento da lista
        listaAmigos.innerHTML = "";                                                         // limpar a lista                        

        amigos.forEach(function(nome) {                         
            let item = document.createElement('li');                                        //Cria um novo elemento <li>
            item.textContent = nome;                                                        //definir o texto com nome do amigo.
            listaAmigos.appendChild(item);                                                   //adicionar o <li> á lista.
        });
    }

    function amigoAleatorio(){                                                             // Verifica se o array de amigos está vazio
        if(amigos.length === 0){
            alert ('A lista de amigos está vazia');                                        //exibir alerta se a lista estiver vazia.
            return null;                                                                  // Retorna null se não houver amigos na lista
        }
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);                     //gerar um indice aleatorio dentro deo intervalo do array amigos.
        let amigoAleatorio = amigos[indiceAleatorio];                                       // Seleciona o amigo correspondente ao índice aleatório
        return amigoAleatorio;                                                              // Retorna o amigo selecionado aleatoriamente
    }
    function sortearAmigo(){
        console.log("Função sortearAmigo chamada");                                         // Exibe uma mensagem no console indicando que a função foi chamada
        let amigoEscolhido = amigoAleatorio();                                              // Chama a função amigoAleatorio para selecionar um amigo aleatoriamente
        if (amigoEscolhido !== null){                                          
            let resultado = document.getElementById ('resultado');                          // Seleciona o elemento HTML onde o resultado será exibido
            resultado.innerHTML = 'Parábens! O  Amigo secreto e : ' + amigoEscolhido;       // Atualiza o conteúdo do elemento com o nome do amigo sorteado
           lancarConfetti();                                                        
        } 
       
   }
  
   function lancarConfetti() {                                                              //função lançar conffeti
    confetti({
        particleCount: 500,
        spread: 160,
        origin: { x: 0.5, y: 0.5 }
    });
}

    function reiniciarJogo() {
    amigos = [];                                                                                     // Limpa o array de amigos
    listaAmigos();                                                                                  // Atualiza a lista de amigos na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';                                                                       // Limpa o resultado do sorteio
}
    document.getElementById('reiniciarJogo').addEventListener('click', reiniciarJogo);

    function reiniciarJogo() {
        amigos = [];                                                                                // Limpa o array de amigos
        listaAmigos();                                                                              // Atualiza a lista de amigos na tela
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';                                                                   // Limpa o resultado do sorteio
    }
    
    document.getElementById('reiniciarJogo').addEventListener('click', reiniciarJogo);