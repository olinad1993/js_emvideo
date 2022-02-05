function contar(){
    let ini = document.getElementById('txtinicio').valueAsNumber;
    let fim = document.getElementById('txtfim').valueAsNumber;
    let passo = document.getElementById('txtpasso').valueAsNumber;
    let result = document.getElementById('result')

    // Validação caso esteja algo em branco
    if(ini.value == 0 || fim.value == 0 || passo.value == 0){
        alert('Preencha todos os dados')
    } 
    
    else { 
        result.innerHTML = 'Contando: '

        if(passo <= 0){
            alert('Passo invalido')
            passo = 1
        }
    }      
        
        if (ini < fim) {
            // Contagem crescente
            for(let c = ini; c <= fim; c += passo) {
                // adicionando emojis ( unicode emoji list (google))
                result.innerHTML += ` ${c} \u{1F449} `
            }
            
        } else {
            // Contagem regressiva
            for(let c = ini; c >= fim; c -= passo) {
                result.innerHTML += ` ${c} \u{1F449} `
            }           
        }
        result.innerHTML += `\u{2705}`
}
