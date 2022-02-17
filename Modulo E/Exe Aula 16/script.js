function gerar(){
    let num = document.getElementById('txtnumber')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número')

    } else{
        let n = Number(num.value)
        let c = 1 // contador
        tab.innerHTML = '' // limpeza da area de tabuada
        
        while(c <= 10){
            let item = document.createElement('option') //Js vai criar o elementro na tela
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // quando selecionado no selection, irá saber o item selecionado
            tab.appendChild(item) // adicionar elemento filho
            c++


        }
    }
}