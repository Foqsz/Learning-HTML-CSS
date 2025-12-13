let canvas = document.getElementById("progress");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#222";

let x = 0;
let y = 0;
let largura = 0;
let altura = 10;
let fator = 1;
let resolucao = canvas.width || 300;
let atualiza = null;

function Animation() {
  // limpa o canvas e desenha a barra com a largura atualizada
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  largura += fator;
  ctx.fillRect(x, y, largura, altura);

  if (largura >= resolucao) {
    clearInterval(atualiza);
    atualiza = null;
  }
}

// inicia a animação: chama Animation a cada 150ms
atualiza = setInterval(Animation, 100);
