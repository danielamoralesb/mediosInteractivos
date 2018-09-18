var miDia;
var miMes;
var miSegundo
var miSegundomodificado;
var miSegundomodificado2;
var miDiamodificado;
var miDiamodificado2;
var miMesmodificado;
var col = 205;
var miAngulo = 0;

// como siento el trancon
//el tiempo representa como siento el tiempo de los trancones de manera 
//psicologica, para esto hice 
//muchos carros en una ciudad que se mueven muy lentamente y se cruzan,
//ya que solo cambian de posicion una vez cada dia por dos meses
//a diferencia de los barcos, que como no hay trancon, cambian
//muy rapido cada segundo

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  //tiempo modificado
  miDia = day();
  miMes = month();
  miSegundo = second();
  miDiamodificado = map(miDia, 0, 31, 155, 325);
  miDiamodificado2 = map(miDia, 0, 31, 325, 155);
  miSegundomodificado = map(miSegundo, 0, 59, 155, 325);
  miSegundomodificado2 = map(miSegundo, 0, 59, 325, 155);

  //cambio background 
  background(83, col, 242);
  col = col - 0.01;

  //sol-luna
  push();
  translate(width / 2, height / 2);
  rotate(miAngulo);
  noStroke();
  fill(255, 238, 153);
  ellipse(150, -80, 30, 30);
  pop();
  miAngulo = miAngulo + 0.01;

  //ciudad (lo que no cambia) - dibujo
  //mar (no cambia)
  fill(0, 102, 204);
  quad(0, 220, 400, 220, 400, 400, 0, 400);
  fill(255);
  //puente (no cambia)
  fill(153, 0, 0);
  quad(150, 280, 340, 280, 340, 300, 150, 300);
  fill(179, 0, 0);
  quad(340, 280, 340, 275, 150, 275, 150, 280);
  strokeWeight(0.8);
  line(150, 280, 245, 200);
  line(245, 200, 340, 280);
  line(245, 200, 160, 279);
  line(245, 200, 339, 273);
  strokeWeight(0.2);
  line(245, 200, 245, 280);
  strokeWeight(0.8);

  //los carros posicion cada dia por dos meses 
  //los barcos camnbian de posicion cada segundo (rapido)
  // carros
  beginShape();
  fill(195, 185, 0);
  rect(miDiamodificado, 272, 10, 5);
  fill(0);
  ellipse(miDiamodificado, 277, 5, 5);
  ellipse(miDiamodificado + 10, 277, 5, 5);
  endShape();

  beginShape();
  fill(0, 153, 0);
  rect(miDiamodificado2, 272, 10, 5);
  fill(0);
  ellipse(miDiamodificado2, 277, 5, 5);
  ellipse(miDiamodificado2 + 10, 277, 5, 5);
  endShape();

  beginShape();
  fill(0, 153, 0);
  rect(miDiamodificado + 20, 272, 10, 5);
  fill(0);
  ellipse(miDiamodificado + 20, 277, 5, 5);
  ellipse(miDiamodificado + 30, 277, 5, 5);
  endShape();

  beginShape();
  fill(195, 185, 0);
  rect(miDiamodificado2 - 20, 272, 10, 5);
  fill(0);
  ellipse(miDiamodificado2 - 20, 277, 5, 5);
  ellipse(miDiamodificado2 - 10, 277, 5, 5);
  endShape();

  beginShape();
  fill(195, 185, 0);
  rect(miDiamodificado + 40, 272, 10, 5);
  fill(0);
  ellipse(miDiamodificado + 40, 277, 5, 5);
  ellipse(miDiamodificado + 50, 277, 5, 5);
  endShape();

  beginShape();
  fill(0, 153, 0);
  rect(miDiamodificado2 - 40, 272, 10, 5);
  fill(0);
  ellipse(miDiamodificado2 - 40, 277, 5, 5);
  ellipse(miDiamodificado2 - 30, 277, 5, 5);
  endShape();

  beginShape();
  fill(0, 153, 0);
  rect(miDiamodificado + 60, 272, 10, 5);
  fill(0);
  ellipse(miDiamodificado + 60, 277, 5, 5);
  ellipse(miDiamodificado + 70, 277, 5, 5);
  endShape();

  beginShape();
  fill(195, 185, 0);
  rect(miDiamodificado2 - 60, 272, 10, 5);
  fill(0);
  ellipse(miDiamodificado2 - 60, 277, 5, 5);
  ellipse(miDiamodificado2 - 50, 277, 5, 5);
  endShape();

  //barcos
  beginShape();
  fill(230, 115, 0);
  rect(miSegundomodificado, 375, 15, 9);
  stroke(0);
  line(miSegundomodificado, 375, miSegundomodificado, 365);
  fill(0, 179, 149);
  triangle(miSegundomodificado, 365, miSegundomodificado, 355, miSegundomodificado + 7, 360);
  endShape();

  beginShape();
  fill(0, 179, 149);
  rect(miSegundomodificado2, 375, 15, 9);
  stroke(0);
  line(miSegundomodificado2 + 15, 375, miSegundomodificado2 + 15, 365);
  fill(230, 115, 0);
  triangle(miSegundomodificado2 + 15, 365, miSegundomodificado2 + 15, 355, miSegundomodificado2 + 7, 360);
  endShape();

  beginShape();
  fill(0, 179, 149);
  rect(miSegundomodificado + 40, 375, 15, 9);
  stroke(0);
  line(miSegundomodificado + 40, 375, miSegundomodificado + 40, 365);
  fill(230, 115, 0);
  triangle(miSegundomodificado + 40, 365, miSegundomodificado + 40, 355, miSegundomodificado + 47, 360);
  endShape();

  beginShape();
  fill(230, 115, 0);
  rect(miSegundomodificado2 - 40, 375, 15, 9);
  stroke(0);
  line(miSegundomodificado2 - 25, 375, miSegundomodificado2 - 25, 365);
  fill(0, 179, 149);
  triangle(miSegundomodificado2 - 25, 365, miSegundomodificado2 - 24, 355, miSegundomodificado2 - 33, 360);
  endShape();

  //dibujo ciudad (los edificios no cambian)
  //primer edificio
  strokeWeight(0.8);
  fill(128, 128, 128);
  quad(0, 200, 40, 200, 40, 400, 0, 400);
  quad(40, 200, 30, 180, 0, 180, 0, 200);
  rect(5, 210, 35, 210, 35, 215, 5, 215);
  fill(0, 25, 153);
  quad(8, 230, 35, 230, 35, 235, 8, 235);
  quad(8, 260, 35, 260, 35, 265, 8, 265);
  quad(8, 290, 35, 290, 35, 295, 8, 295);
  //segundo edificio
  fill(160, 160, 160);
  quad(40, 250, 100, 250, 100, 400, 40, 400);
  quad(100, 250, 90, 240, 40, 240, 40, 250);
  fill(225);
  rect(60, 300, 30, 50);
  rect(60, 270, 20, 20);
  //tercer edificio
  fill(96, 96, 96);
  quad(100, 230, 150, 230, 150, 400, 100, 400);
  quad(150, 230, 140, 210, 85, 210, 100, 230);
  fill(128, 128, 128);
  quad(85, 211, 85, 240, 90, 240, 100, 250);
  triangle(100, 250, 100, 230, 85, 211);
  fill(255, 236, 175);
  rect(120, 250, 10, 120);
  //cuarto edificio
  fill(64, 64, 64);
  quad(340, 240, 400, 240, 400, 400, 340, 400);
  quad(340, 240, 350, 230, 400, 230, 400, 240)
  fill(204, 238, 255);
  rect(345, 250, 10, 80);
  rect(360, 250, 10, 80);
  rect(375, 250, 10, 80);

  // cambio de posicion por dias por dos meses
  // mes 9 = septiembre
  //mes 10 = octubre 
  //lunes=1
  //martes=2
  //miercoles=3
  //jueves=4
  //viernes=5
  //sabado=6
  //domingo=7

  //septiembre
  if (miMes == 9) {
    if (miDia == 3, miDia == 10, miDia == 17, miDia == 24) {
      miDiamodificado = 1;
    }
  }
  if (miMes == 9) {
    if (miDia == 4, miDia == 11, miDia == 18, miDia == 25) {
      miDiamodificado = 2;
    }
  }
  if (miMes == 9) {
    if (miDia == 5, miDia == 12, miDia == 19, miDia == 26) {
      miDiamodificado = 3;
    }
  }
  if (miMes == 9) {
    if (miDia == 6, miDia == 13, miDia == 20, miDia == 27) {
      miDiamodificado = 4;
    }
  }
  if (miMes == 9) {
    if (miDia == 7, miDia == 14, miDia == 21, miDia == 28) {
      miDiamodificado = 5;
    }
  }
  if (miMes == 9) {
    if (miDia == 1, miDia == 8, miDia == 15, miDia == 22, miDia == 29) {
      miDiamodificado = 6;
    }
  }
  if (miMes == 9) {
    if (miDia == 2, miDia == 9, miDia == 16, miDia == 23, miDia == 30) {
      miDiamodificado = 7;
    }
  }

  //octubre
  if (miMes == 10) {
    if (miDia == 1, miDia == 8, miDia == 15, miDia == 22, miDia == 29) {
      miDiamodificado = 1;
    }
  }
  if (miMes == 10) {
    if (miDia == 2, miDia == 9, miDia == 16, miDia == 23, miDia == 30) {
      miDiamodificado = 2;
    }
  }
  if (miMes == 10) {
    if (miDia == 3, miDia == 10, miDia == 17, miDia == 24, miDia == 31) {
      miDiamodificado = 3;
    }
  }
  if (miMes == 10) {
    if (miDia == 4, miDia == 11, miDia == 18, miDia == 25) {
      miDiamodificado = 4;
    }
  }
  if (miMes == 10) {
    if (miDia == 5, miDia == 12, miDia == 19, miDia == 26) {
      miDiamodificado = 5;
    }
  }
  if (miMes == 10) {
    if (miDia == 6, miDia == 13, miDia == 20, miDia == 27) {
      miDiamodificado = 6;
    }
  }
  if (miMes == 10) {
    if (miDia == 7, miDia == 14, miDia == 21, miDia == 28) {
      miDiamodificado = 7;
    }
  }

  //septiembre 2
  if (miMes == 9) {
    if (miDia == 3, miDia == 10, miDia == 17, miDia == 24) {
      miDiamodificado2 = 1;
    }
  }
  if (miMes == 9) {
    if (miDia == 4, miDia == 11, miDia == 18, miDia == 25) {
      miDiamodificado2 = 2;
    }
  }
  if (miMes == 9) {
    if (miDia == 5, miDia == 12, miDia == 19, miDia == 26) {
      miDiamodificado2 = 3;
    }
  }
  if (miMes == 9) {
    if (miDia == 6, miDia == 13, miDia == 20, miDia == 27) {
      miDiamodificado2 = 4;
    }
  }
  if (miMes == 9) {
    if (miDia == 7, miDia == 14, miDia == 21, miDia == 28) {
      miDiamodificado2 = 5;
    }
  }
  if (miMes == 9) {
    if (miDia == 1, miDia == 8, miDia == 15, miDia == 22, miDia == 29) {
      miDiamodificado2 = 6;
    }
  }
  if (miMes == 9) {
    if (miDia == 2, miDia == 9, miDia == 16, miDia == 23, miDia == 30) {
      miDiamodificado2 = 7;
    }
  }

  //octubre 2
  if (miMes == 10) {
    if (miDia == 1, miDia == 8, miDia == 15, miDia == 22, miDia == 29) {
      miDiamodificado2 = 1;
    }
  }
  if (miMes == 10) {
    if (miDia == 2, miDia == 9, miDia == 16, miDia == 23, miDia == 30) {
      miDiamodificado2 = 2;
    }
  }
  if (miMes == 10) {
    if (miDia == 3, miDia == 10, miDia == 17, miDia == 24, miDia == 31) {
      miDiamodificado2 = 3;
    }
  }
  if (miMes == 10) {
    if (miDia == 4, miDia == 11, miDia == 18, miDia == 25) {
      miDiamodificado2 = 4;
      vel = 10
    }
  }
  if (miMes == 10) {
    if (miDia == 5, miDia == 12, miDia == 19, miDia == 26) {
      miDiamodificado2 = 5;
    }
  }
  if (miMes == 10) {
    if (miDia == 6, miDia == 13, miDia == 20, miDia == 27) {
      miDiamodificado2 = 6;
    }
  }
  if (miMes == 10) {
    if (miDia == 7, miDia == 14, miDia == 21, miDia == 28) {
      miDiamodificado2 = 7;
    }
  }
}