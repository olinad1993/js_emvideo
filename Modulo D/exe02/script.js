function verificar() {
    var data = new Date ();
    var ano = data.getFullYear() // Pegar com 4 digitos
    var fano = document.getElementById("txtano")
    var result = document.getElementById("result")
    

    if(fano. value.length == 0 || fano.value > ano ) { // Verificar se o campo esta vazio ( value.length)
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {

        var fsex = document.getElementsByName('radsex') // pegando o nome do input. [1 ou 0 ] para pegar mas ou fem
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Importar imagem atraves do JAVASCRIPT
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){ // verificar sexo masculino
            genero = 'Homem'
            if(idade >=0 && idade <10){
                // Criança 
                img.setAttribute('src' , 'bebe-menino.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src' , 'jovem-homem.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src' , 'adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src' , 'idoso-homem.png')
            }

        } else if (fsex[1].checked) { // verificar sexo feminino
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                // Criança 
                img.setAttribute('src' , 'bebe-menina.png')
            } else if (idade < 21){
                // Jovem
                img.setAttribute('src' , 'jovem-mulher.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src' , 'adulto-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src' , 'idoso-mulher.png')
            }
        }

        result.style.textAlign = 'center' // Alinhando via Java Script
        result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        result.appendChild(img)
    }
}