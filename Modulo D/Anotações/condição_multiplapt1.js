/* Condição Multipla
quando usado swith, tem que ser usado o break.
exemplos praticos 

Ao usar getDay pegando dias da semana, ele é contabilizado da forma a baixo
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta 
    5 = Sexta
    6 = Sábado

*/
var agora = new Date()
var diaSem = agora.getDay()

// Se fosse usar IF simples ou composto, iriamos escrever muitos codigos
// Muitos IFs
// é nesse caso que usariamos o comando switch
// Exemplo a baixo:

switch(diaSem){
    case 0:
        console.log('Domingo')
        break // NÃO ESQUECER QUANDO USAR SWITCH
    
    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terça')
        break

    case 3:
        console.log('Quarta')
        break

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sábado')
        break

    default:
        console.log('[ERRO] Dia Invalido!')    
}    
   
