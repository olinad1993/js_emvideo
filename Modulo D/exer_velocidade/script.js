function calcular() {
    const vel_max = 63
    var txtvel = window.document.getElementById('txtvel')
    var result = window.document.getElementById('result')
    var vel_atual = Number(txtvel.value)
    result.innerHTML = `<p> Sua velocidade atual é de <strong> ${vel_atual} KM/h </strong> </p> `

    if (vel_atual > vel_max) {
        result.innerHTML +=
            `<p> <strong>VOCÊ FOI MULTADO!! </strong> <u>Motivo:</u> A cima da velocidade máxima.`


    } else {
        result.innerHTML += '<p>Dirija sempre com cinto de segurança!</p>'

    }

    if (vel_atual == 62) {
        result.innerHTML += `<p>CUIDADO, a velocidade maxima é de <strong> ${vel_max} </strong> </p>`
    }
}