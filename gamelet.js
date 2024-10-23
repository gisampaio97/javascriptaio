/* 
Gamelet: o primeiro passo para aprender a codar jogos.
Por Giovanna Sampaio.
Versão 1..0

Instruções: incluir gamelet.js em um documento HTML que contém um elemento com id 'ball'.
A bola irá se mover de acordo com a ativação das teclas seta para esquerda ou direita.

*/

const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 300;
  }

  if (e.code === "ArrowRight") {
    position = position + 300;
  }

  if (position < 0) {
    position = 0;
  }
  refresh(); //update the ball's position
}
function refresh() {
  ball.style.left = position + "px";
}
