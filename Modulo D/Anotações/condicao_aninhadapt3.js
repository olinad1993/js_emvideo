// Outro Exemplo de Condição Aninhada PT3
var agora = new Date() // Sempre date para pegar hora
var hora = agora.getHours () // pegar a hora atual, ano, dia, minuto, mes etc...


if (hora < 12) {
    console.log(`São ${hora} horas, BOM DIA!`)
    
} else if(hora <= 18){
    console.log(`São ${hora} horas, BOA TARDE!`)
} else{
    console.log(`São ${hora} horas, BOA NOITE`)
}