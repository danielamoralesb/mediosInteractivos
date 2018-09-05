// variables
var posx = 200;
var posy = 200;
var dir = 1;
var vel = 3;
var newx = 10;
var newy = 210;
var col = 20;
var col2 = 10;
//tamaños 
function setup() {
  createCanvas(1700, 1100);
  frameRate(4);
  background(0);
}

function draw() {

  // color espacio
  background(0);

  //sol con ellipse
  fill(245, 195, 64);
  noStroke();
  ellipse(310 * width / 335, 220 * height / 220, 120 * width / 335, 120 * height / 220);


  //primer planeta rotando al rededor del sol (azul)
  fill(161, col2, 10);
  col2 = col2 + 0.15
  ellipse(posx * width / 335, posy * height / 220, 30 * width / 335, 30 * height / 220);
  posx = posx + vel * dir;

  // velocidad a la que rota
  if (posx >= 180 && posx < 330) {
    vel = 0.2;
  }
  //para que suba en diagonal
  if (posx >= 180 && posx < 335) {
    posy = posy - 0.2;
  }
  // estrellas quietas 
  if (posx > 180) {
    fill(255);
    ellipse(100 * width / 335, 100 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(170 * width / 335, 200 * height / 220, 4 * width / 335, 4 * height / 220);
    ellipse(250 * width / 335, 10 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(10 * width / 335, 10 * height / 220, 2 * width / 335, 2 * height / 220);
    ellipse(310 * width / 335, 30 * height / 220, 2 * width / 335, 2 * height / 220);
    ellipse(120 * width / 335, 180 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(210 * width / 335, 85 * height / 220, 2 * width / 335, 2 * height / 220);
    ellipse(30 * width / 335, 90 * height / 220, 3 * width / 335, 3 * height / 220);

  }
  //planeta con anillos 
  if (posx > 180) {
    fill(224, 230, 182);
    strokeWeight(0);
    ellipse(80 * width / 335, 40 * height / 220, (40 + (sin(frameCount / 30) * 50)) * width / 335, 20 * height / 220);
    fill(152, 148, 154);
    strokeWeight(0);
    fill(181, 201, 127);
    ellipse(80 * width / 335, 40 * height / 220, (5 + (sin(frameCount / 30) * 50)) * width / 335, 50 * height / 220);
  }

  // estrellas que aparecen y desaparecen 
  if (posx >= 180 && posx < 300) {
    fill(255);
    ellipse(280 * width / 335, 70 * height / 220, 2 * width / 335, 2 * height / 220);
    ellipse(150 * width / 335, 90 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(50 * width / 335, 190 * height / 220, 2 * width / 335, 2 * height / 220);
  }
  // estrellas que aparecen despues y se quedan ahi
  if (posx >= 300) {
    fill(255);
    ellipse(260 * width / 335, 50 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(170 * width / 335, 100 * height / 220, 2 * width / 335, 2 * height / 220);
    ellipse(30 * width / 335 * height / 220, 170, 3 * width / 335, 3 * height / 220);
    ellipse(90 * width / 335, 100 * height / 220, 4 * width / 335, 4 * height / 220);
    ellipse(110 * width / 335, 40 * height / 220, 2 * width / 335, 2 * height / 220);
    ellipse(230 * width / 335, 50 * height / 220, 3 * width / 335, 3 * height / 220);
  }
  // nuevo planeta que rota despues del primero
  if (posx > 340) {
    fill(155, col, 20);
    col = col + 0.05
    ellipse(newx * width / 335, newy * height / 220, 50 * width / 335, 50 * height / 220);
    newx = newx + vel * dir;
  }
  // velocidad con la que rota
  if (newx >= 20 && newx < 300) {
    vel = 0.4;
  }
  //para hacer que vaya hacia arriba diagonal
  if (newx >= 20 && newx < 300) {
    newy = newy - 0.3;
  }
  // estrellas que aparecen con el segundo planeta
  if (newx > 20) {
    fill(255);
    ellipse(10 * width / 335, 50 * height / 220, 5 * width / 335, 5 * height / 220);
    ellipse(250 * width / 335, 180 * height / 220, 4 * width / 335, 4 * height / 220);
    ellipse(110 * width / 335, 170 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(120 * width / 335, 90 * height / 220, 2 * width / 335, 2 * height / 220);
    ellipse(100 * width / 335, 30 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(40 * width / 335, 20 * height / 220, 2 * width / 335, 2 * height / 220);
  }

  //hoyo negro 
  if (posx > 180) {
    fill(200);
    strokeWeight(0);
    ellipse(145 * width / 335, 180 * height / 220, (100 + (sin(frameCount / 20) * 50)) * width / 335, 10 * height / 220);
    fill(9, 33, 152);
    ellipse(145 * width / 335, 180 * height / 220, (90 + (sin(frameCount / 25) * 50)) * width / 335, 10 * height / 220);
    fill(171, 127, 189);
    ellipse(145 * width / 335, 180 * height / 220, (80 + (sin(frameCount / 15) * 50)) * width / 335, 10 * height / 220);
    fill(0);
    ellipse(145 * width / 335, 180 * height / 220, (70 + (sin(frameCount / 30) * 50)) * width / 335, 10 * height / 220);
    fill(9, 147, 152);
    ellipse(145 * width / 335, 180 * height / 220, (60 + (sin(frameCount / 10) * 50)) * width / 335, 10 * height / 220);
    fill(0);
    ellipse(145 * width / 335, 180 * height / 220, (50 + (sin(frameCount / 35) * 50)) * width / 335, 10 * height / 220);
  }

  //otro hoyo negro 
  if (newx > 70) {
    fill(171, 127, 189);
    strokeWeight(0);
    ellipse(280 * width / 335, 80 * height / 220, (60 + (sin(frameCount / 35) * 50)) * width / 335, 8 * height / 220);
    fill(9, 147, 152);
    ellipse(280 * width / 335, 80 * height / 220, (50 + (sin(frameCount / 10) * 50)) * width / 335, 8 * height / 220);
    fill(200);
    ellipse(280 * width / 335, 80 * height / 220, (40 + (sin(frameCount / 30) * 50)) * width / 335, 8 * height / 220);
    fill(0);
    ellipse(280 * width / 335, 80 * height / 220, (30 + (sin(frameCount / 15) * 50)) * width / 335, 8 * height / 220);
    fill(9, 33, 152);
    ellipse(280 * width / 335, 80 * height / 220, (20 + (sin(frameCount / 25) * 50)) * width / 335, 8 * height / 220);
    fill(0);
    ellipse(280 * width / 335, 80 * height / 220, (10 + (sin(frameCount / 20) * 50)) * width / 335, 8 * height / 220);
  }


  // estrellas que aparecen y desaparencen con el segundo 
  if (newx >= 80 && newx < 150) {
    fill(255);
    ellipse(30 * width / 335, 100 * height / 220, 2 * width / 335, 2 * height / 220);
    ellipse(120 * width / 335, 40 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(320 * width / 335, 100 * height / 220, 4 * width / 335, 4 * height / 220);
    ellipse(255 * width / 335, 160 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(50 * width / 335, 30 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(310 * width / 335, 110 * height / 220, 4 * width / 335, 4 * height / 220);
  }
  //estrellas que aparecen despues y se quedan con el segundo
  if (newx > 150) {
    fill(255);
    ellipse(40 * width / 335, 110 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(130 * width / 335, 30 * height / 220, 4 * width / 335, 4 * height / 220);
    ellipse(315 * width / 335, 80 * height / 220, 2 * width / 335, 2 * height / 220);
    ellipse(320 * width / 335, 110 * height / 220, 3 * width / 335, 3 * height / 220);
    ellipse(220 * width / 335, 80 * height / 220, 2 * width / 335, 2 * height / 220);
  }

  //if (frameCount <= 1636){
  //if (frameCount % 8 == 0){
  //saveCanvas ("elflipbookk" + frameCount, 'jpg');
  //}
  //}

  print(frameCount);
}