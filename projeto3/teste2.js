var prompt = require("prompt-sync")();


        
    
    let resposta = prompt(`Digite sim ou não: `)
    while(resposta !== "seguir" && resposta !== "voltar"){

        resposta = prompt(`Digite sim ou não: `)
    }
    if(resposta == "seguir"){
        console.log(historia2)
        console.log(pergunta2)
    }
    else if(resposta == "voltar"){
        console.log(historia1)
        console.log(pergunta1)
    } break;





    while(resposta !== "seguir" && resposta !== "voltar"){
        console.log('voce encontrou um baú velho no meio do caminho, que deseja fazer?')
        resposta = prompt(`abrir ou ignorar ? `)
    }
    if(resposta == "abrir"){
        personagem.ouro(ctrlOuro(50, true))
        console.log(`você ganhou +50 de ouro`)
        console.log();
        console.log(historia2);
        console.log();
        console.log(pergunta2);
        
    }
    else if(resposta == "ignorar"){
        
        console.log(historia3);
        console.log(pergunta3);