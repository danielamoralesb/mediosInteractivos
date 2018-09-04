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
  createCanvas(325, 210);
  frameRate(335);
  background(0);
}

function draw() {

  // color espacio
  background(0);

  //sol con ellipse
  fill(245, 195, 64);
  noStroke();
  ellipse(310, 220, 120, 120);


  //primer planeta rotando al rededor del sol (azul)
  fill(161, col2, 10);
  col2 = col2 + 0.15
  ellipse(posx, posy, 30, 30);
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
    ellipse(100, 100, 3, 3);
    ellipse(170, 200, 4, 4);
    ellipse(250, 10, 3, 3);
    ellipse(10, 10, 2, 2);
    ellipse(310, 30, 2, 2);
    ellipse(120, 180, 3, 3);
    ellipse(210, 85, 2, 2);
    ellipse(30, 90, 3, 3);

  }
  //planeta con anillos 
  if (posx > 180) {
    fill(224, 230, 182);
    strokeWeight(0);
    ellipse(80, 40, 40 + (sin(frameCount / 30) * 50), 20);
    fill(152, 148, 154);
    strokeWeight(0);
    fill(181, 201, 127);
    ellipse(80, 40, 5 + (sin(frameCount / 30) * 50), 50);
  }

  // estrellas que aparecen y desaparecen 
  if (posx >= 180 && posx < 300) {
    fill(255);
    ellipse(280, 70, 2, 2);
    ellipse(150, 90, 3, 3);
    ellipse(50, 190, 2, 2);
  }
  // estrellas que aparecen despues y se quedan ahi
  if (posx >= 300) {
    fill(255);
    ellipse(260, 50, 3, 3);
    ellipse(170, 100, 2, 2);
    ellipse(30, 170, 3, 3);
    ellipse(90, 100, 4, 4);
    ellipse(110, 40, 2, 2);
    ellipse(230, 50, 3, 3);
  }
  // nuevo planeta que rota despues del primero
  if (posx > 340) {
    fill(155, col, 20);
    col = col + 0.05
    ellipse(newx, newy, 50, 50);
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
    ellipse(10, 50, 5, 5);
    ellipse(250, 180, 4, 4);
    ellipse(110, 170, 3, 3);
    ellipse(120, 90, 2, 2);
    ellipse(100, 30, 3, 3);
    ellipse(40, 20, 2, 2);
  }

  //hoyo negro 
  if (posx > 180) {
    fill(200);
    strokeWeight(0);
    ellipse(145, 180, 100 + (sin(frameCount / 20) * 50), 10);
    fill(9, 33, 152);
    ellipse(145, 180, 90 + (sin(frameCount / 25) * 50), 10);
    fill(171, 127, 189);
    ellipse(145, 180, 80 + (sin(frameCount / 15) * 50), 10);
    fill(0);
    ellipse(145, 180, 70 + (sin(frameCount / 30) * 50), 10);
    fill(9, 147, 152);
    ellipse(145, 180, 60 + (sin(frameCount / 10) * 50), 10);
    fill(0);
    ellipse(145, 180, 50 + (sin(frameCount / 35) * 50), 10);
  }

  //otro hoyo negro 
  if (newx > 70) {
    fill(171, 127, 189);
    strokeWeight(0);
    ellipse(280, 80, 60 + (sin(frameCount / 35) * 50), 8);
    fill(9, 147, 152);
    ellipse(280, 80, 50 + (sin(frameCount / 10) * 50), 8);
    fill(200);
    ellipse(280, 80, 40 + (sin(frameCount / 30) * 50), 8);
    fill(0);
    ellipse(280, 80, 30 + (sin(frameCount / 15) * 50), 8);
    fill(9, 33, 152);
    ellipse(280, 80, 20 + (sin(frameCount / 25) * 50), 8);
    fill(0);
    ellipse(280, 80, 10 + (sin(frameCount / 20) * 50), 8);
  }


  // estrellas que aparecen y desaparencen con el segundo 
  if (newx >= 80 && newx < 150) {
    fill(255);
    ellipse(30, 100, 2, 2);
    ellipse(120, 40, 3, 3);
    ellipse(320, 100, 4, 4);
    ellipse(255, 160, 3, 3);
    ellipse(50, 30, 3, 3);
    ellipse(310, 110, 4, 4);
  }
  //estrellas que aparecen despues y se quedan con el segundo
  if (newx > 150) {
    fill(255);
    ellipse(40, 110, 3, 3);
    ellipse(130, 30, 4, 4);
    ellipse(315, 80, 2, 2);
    ellipse(320, 110, 3, 3);
    ellipse(220, 80, 2, 2);
  }
}