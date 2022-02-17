function contar(){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let result = document.getElementById('result')

      // Validação caso esteja algo em branco
      if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Preencha todos os dados !')
     } else { 
        result.innerHTML = 'Contando: '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('Passo invalido')
            p = 1
        }      
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                // adicionando emojis ( unicode emoji list (google))
                result.innerHTML += ` ${c} \u{1F449} `
            }
            
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                result.innerHTML += ` ${c} \u{1F449} `
            }           
        }
        result.innerHTML += `\u{2705}`
    }
}
