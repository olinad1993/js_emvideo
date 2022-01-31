function verificar() {
    let txtidade = document.getElementById('txtidade')
    let result = document.getElementById('result')
    let idade = Number(txtidade.value)

    if(txtidade.value == 0){
      alert('Idade não informada!')
      txtidade.focus();
      return;
    }
    
    result.innerHTML = `<p>Você tem <strong>${idade} anos.</strong> </p>` 
  
 
    if (idade < 16) {
      result.innerHTML += `<strong>Você ainda não vota!</strong>`
  } else if (idade < 18 || idade > 65) {
      result.innerHTML += `Seu voto é <strong>Opcional!</strong>`
  } else {
      result.innerHTML += `Seu voto é <strong> Obrigatório!</strong>`
    }
  }
  