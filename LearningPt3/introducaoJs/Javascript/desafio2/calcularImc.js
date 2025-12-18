function calcularImc(peso, altura, callback) {
  if (isNaN(peso) || isNaN(altura)) {
    throw new Error("Insira valores numéricos válidos.");
  }

  if (peso <= 0 || altura <= 0) {
    throw new Error("Peso e altura devem ser maiores que zero.");
  }

  const imc = Number(peso) / (Number(altura) * Number(altura));

  document.getElementById("result").innerHTML =
    "Seu IMC é: " + imc.toFixed(2);

  // console.log(callback);

  // callback recebe o IMC
  if (callback) {
    callback(imc);
  }

  return imc;
}


function classificarImc(imc) {
  const el = document.getElementById("classification");

  if (imc >= 16 && imc <= 16.9) {
    el.innerHTML = "Classificação: Muito abaixo do peso";
  } else if (imc <= 18.4) {
    el.innerHTML = "Classificação: Abaixo do peso";
  } else if (imc <= 24.9) {
    el.innerHTML = "Classificação: Peso normal";
  } else if (imc <= 29.9) {
    el.innerHTML = "Classificação: Acima do peso";
  } else if (imc <= 34.9) {
    el.innerHTML = "Classificação: Obesidade grau I";
  } else if (imc <= 40) {
    el.innerHTML = "Classificação: Obesidade grau II";
  } else {
    el.innerHTML = "Classificação: Obesidade grau III";
  }
}   

// calcularImc(80, 1.75, classificarImc);
