function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date ();

    var hora = data.getHours ();
    var minutos = data.getMinutes ();
    var segundos = data.getSeconds ();
    document.getElementById('msg')
    innerHTML=hora +":" + minutos +":" + segundos;
    setTimeout('carregar ()', 500);
    innerHTML = data.toLocaleDateString ();


    if (hora >= 0 && hora < 12) {
        //BOM DIA
        msg.innerHTML =  `Bom dia, agora são ${data}}`
        img.src = 'manha.png'
        document.body.style.background = '#c99f90' // alterar cor conforme muda a hora do dia.
    
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        msg.innerHTML =  `Boa Tarde, agora são ${data}`
        img.src = 'tarde.png'
        document.body.style.background = '#D27A67'

    } else {
        // BOA NOITE
        msg.innerHTML =  `Boa Noite, agora são ${data}.`
        img.src = 'noite.png'
        document.body.style.background = '#15354a'
    }
    
}