function verificar() {
    let txtnome = document.getElementById('txtnome')
    let result = document.getElementById('result')
    let pais = (txtnome.value)
    result.innerHTML = `<p>Vivendo em ${pais}!</p>`

    if(pais == 'Brasil'){
        result.innerHTML += 'Você é um <strong> BRASILEIRO </strong>'

    } else{
        result.innerHTML += 'Você é um <strong> ESTRANGEIRO </strong>'
    }
}
    