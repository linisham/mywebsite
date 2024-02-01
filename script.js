const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const runButton = document.getElementById("runButton");

let ballX = 100;
let ballY = 50;
let dx = 5;
let dy = 4;

runButton.addEventListener("click", startAnimation);

function startAnimation() {
  setInterval(draw, 10); 
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 

  
  ctx.fillStyle = "lightpink";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();

  
  ballX += dx;
  ballY += dy;

  
  if (ballX + 10 > canvas.width || ballX - 10 < 0) {
    dx = -dx;
  }
  if (ballY + 10 > canvas.height || ballY - 10 < 0) {
    dy = -dy;
  }
}
