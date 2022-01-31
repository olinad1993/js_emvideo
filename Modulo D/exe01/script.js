function carregar() {
    let msg = window.document.getElementById("msg");
    let img = window.document.getElementById("imagem");
    let data = new Date ();
    let hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.` 

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#c99f90' // alterar cor conforme muda a hora do dia.
    
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#D27A67'

    } else {
        // BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#15354a'
    }
    
}