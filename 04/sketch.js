//variables boton 1 
var posxbot1 = 20
var posybot1 = 20
var tambot1 = 30
//Variables boton 2
var posxbot2 = 60
var posybot2 = 20
var tambot2 = 30
// variables boton 3
var posxbot3 = 100
var posybot3 = 20
var tambot3 = 30
// variables boton 4
var posxbot4 = 140
var posybot4 = 20
var tambot4 = 30
// variables boton 5
var posxbot5 = 180
var posybot5 = 20
var tambot5 = 30
// variables boton 6
var posxbot6 = 220
var posybot6 = 20
var tambot6 = 30
// variables boton 7
var posxbot7 = 260
var posybot7 = 20
var tambot7 = 30
// variable boton 8
var posxbot8 = 300
var posybot8 = 20
var tambot8 = 30
// variable boton 9
var posxbot9 = 340
var posybot9 = 20
var tambot9 = 30
// variable boton 10
var posxbot10 = 380
var posybot10 = 20
var tambot10 = 30
// variable boton color 1
var posxcol1 = 380
var posycol1 = 380
var tamcol1 = 30
// variable boton color 2
var posxcol2 = 340
var posycol2 = 380
var tamcol2 = 30
// variable boton color 3
var posxcol3 = 300
var posycol3 = 380
var tamcol3 = 30
// variable boton color 4
var posxcol4 = 260
var posycol4 = 380
var tamcol4 = 30
// variable boton color 5
var posxcol5 = 220
var posycol5 = 380
var tamcol5 = 30
// variable boton color 6
var posxcol6 = 180
var posycol6 = 380
var tamcol6 = 30
// variable boton color 7
var posxcol7 = 140
var posycol7 = 380
var tamcol7 = 30
// variable boton color 8
var posxcol8 = 100
var posycol8 = 380
var tamcol8 = 30
// variable boton color 9
var posxcol9 = 60
var posycol9 = 380
var tamcol9 = 30
// variable boton color 10
var posxcol10 = 20
var posycol10 = 380
var tamcol10 = 30
// herramienta seleccionada
var hersel = 0
// herramienta color
var hercol = 0
// herramienta borrar todo
var borraarx = 210
var borraary = 415
var tamborraar = 10

function setup() {
  createCanvas(430, 430);
  background(225);
}

function draw() {
  //botones
  //1
  fill(255)
  rect(posxbot1, posybot1, tambot1, tambot1)
  line(40, 25, 25, 45)
  //2
  fill(255)
  rect(posxbot2, posybot2, tambot2, tambot2)
  quad(75, 23, 65, 43, 75, 48, 85, 43)
  //3
  fill(255)
  rect(posxbot3, posybot3, tambot3, tambot3)
  fill(0)
  arc(115, 35, 20, 20, radians(40), radians(320))
  //4
  fill(255)
  rect(posxbot4, posybot4, tambot4, tambot4)
  fill(0)
  arc(148, 30, 30, 30, 0, HALF_PI);
  //5
  fill(255)
  rect(posxbot5, posybot5, tambot5, tambot5)
  line(208, 25, 185, 45)
  line(185, 45, 185, 30)
  line(185, 45, 200, 45)
  //6
  rect(posxbot6, posybot6, tambot6, tambot6)
  fill(0)
  beginShape()
  vertex(242, 20)
  vertex(237, 30)
  vertex(222, 35)
  vertex(237, 40)
  vertex(242, 50)
  endShape()
  //7
  fill(255)
  rect(posxbot7, posybot7, tambot7, tambot7)
  fill(0)
  beginShape()
  vertex(269, 20)
  vertex(274, 30)
  vertex(289, 35)
  vertex(274, 40)
  vertex(269, 50)
  endShape()
  //8
  fill(255)
  rect(posxbot8, posybot8, tambot8, tambot8)
  beginShape()
  vertex(315, 45)
  vertex(305, 30)
  vertex(315, 35)
  vertex(325, 30)
  vertex(315, 45)
  endShape()
  //9
  rect(posxbot9, posybot9, tambot9, tambot9)
  beginShape()
  vertex(345, 27)
  vertex(350, 32)
  vertex(355, 22)
  vertex(360, 32)
  vertex(365, 27)
  vertex(365, 42)
  vertex(345, 42)
  vertex(345, 27)
  endShape()
  //10
  rect(posxbot10, posybot10, tambot10, tambot10)
  fill(0)
  arc(398, 35, 20, 20, QUARTER_PI, PI + QUARTER_PI);

  //11 COLOR 
  fill(255)
  rect(posxcol1, posycol1, tamcol1, tamcol1)
  noStroke()
  fill(68, 152, 165)
  ellipse(395, 395, 10, 10)
  //12
  stroke(1)
  fill(255)
  rect(posxcol2, posycol2, tamcol2, tamcol2)
  noStroke()
  fill(240, 206, 114)
  ellipse(355, 395, 10, 10)
  //13
  stroke(1)
  fill(255)
  rect(posxcol3, posycol3, tamcol3, tamcol3)
  noStroke()
  fill(239, 144, 119)
  ellipse(315, 395, 10, 10)
  //14
  stroke(1)
  fill(255)
  rect(posxcol4, posycol4, tamcol4, tamcol4)
  noStroke()
  fill(188, 58, 60)
  ellipse(275, 395, 10, 10)
  //15
  stroke(1)
  fill(255)
  rect(posxcol5, posycol5, tamcol5, tamcol5)
  noStroke()
  fill(220, 111, 76)
  ellipse(235, 395, 10, 10)
  //16
  stroke(1)
  fill(255)
  rect(posxcol6, posycol6, tamcol6, tamcol6)
  noStroke()
  fill(118, 33, 57)
  ellipse(195, 395, 10, 10)
  //17
  stroke(1)
  fill(255)
  rect(posxcol7, posycol7, tamcol7, tamcol7)
  noStroke()
  fill(177, 205, 102)
  ellipse(155, 395, 10, 10)
  //18
  stroke(1)
  fill(255)
  rect(posxcol8, posycol8, tamcol8, tamcol8)
  noStroke()
  fill(128, 181, 185)
  ellipse(115, 395, 10, 10)
  //19
  stroke(1)
  fill(255)
  rect(posxcol9, posycol9, tamcol9, tamcol9)
  noStroke()
  fill(247, 201, 213)
  ellipse(75, 395, 10, 10)
  //20
  stroke(1)
  fill(255)
  rect(posxcol10, posycol10, tamcol10, tamcol10)
  noStroke()
  fill(226, 195, 243)
  ellipse(35, 395, 10, 10)
  fill(255)
  stroke(1)

  //para borrar lo que se pinta 
  rect(borraarx, borraary, tamborraar, tamborraar)
  //colores
  //11
  if (hercol == 11) {
    fill(68, 152, 165)

  }
  //12
  if (hercol == 12) {
    fill(240, 206, 114)
  }
  //13
  if (hercol == 13) {
    fill(239, 144, 119)
  }
  //14
  if (hercol == 14) {
    fill(188, 58, 60)
  }
  //15
  if (hercol == 15) {
    fill(220, 111, 76)
  }
  //16
  if (hercol == 16) {
    fill(118, 33, 57)
  }
  //17
  if (hercol == 17) {
    fill(177, 205, 102)
  }
  //18
  if (hercol == 18) {
    fill(128, 181, 185)
  }
  //19
  if (hercol == 19) {
    fill(247, 201, 213)
  }
  //20
  if (hercol == 20) {
    fill(226, 195, 243)
  }

  // herramientas seleccionadas
  if (mouseIsPressed) {
    // figras que aparecen
    if (hersel == 0) {
      ellipse(mouseX, mouseY, 10, 10)
    }
    if (hersel == 1) {
      line(mouseX + 30, mouseY + 30, mouseX - 30, mouseY - 30);
    }
    if (hersel == 2) {
      quad(mouseX + 30, mouseY + 10, mouseX + 50, mouseY + 40, mouseX + 30, mouseY + 58, mouseX + 10, mouseY + 40)
    }

    if (hersel == 3) {
      arc(mouseX + 40, mouseY + 40, 50, 50, radians(40), radians(320))
    }
    if (hersel == 4) {
      arc(mouseX + 90, mouseY + 60, 80, 80, 0, HALF_PI);
    }
    if (hersel == 5) {
      beginShape();
      vertex(mouseX + 150, mouseY + 52);
      vertex(mouseX + 177, mouseY + 6);
      vertex(mouseX + 184, mouseY + 33);
      vertex(mouseX + 377, mouseY + 1);
      vertex(mouseX + 392, mouseY + 0);
      vertex(mouseX + 189, mouseY + 52);
      vertex(mouseX + 196, mouseY + 79);
      endShape();
    }

    if (hersel == 6) {
      beginShape()
      vertex(mouseX + 42, mouseY + 20)
      vertex(mouseX + 37, mouseY + 30)
      vertex(mouseX + 22, mouseY + 35)
      vertex(mouseX + 37, mouseY + 40)
      vertex(mouseX + 42, mouseY + 50)
      endShape()
    }
    if (hersel == 7) {
      beginShape()
      vertex(mouseX + 69, mouseY + 20)
      vertex(mouseX + 74, mouseY + 30)
      vertex(mouseX + 89, mouseY + 35)
      vertex(mouseX + 74, mouseY + 40)
      vertex(mouseX + 69, mouseY + 50)
      endShape()
    }
    if (hersel == 8) {
      beginShape()
      vertex(mouseX + 15, mouseY + 45)
      vertex(mouseX + 5, mouseY + 30)
      vertex(mouseX + 15, mouseY + 35)
      vertex(mouseX + 25, mouseY + 30)
      vertex(mouseX + 15, mouseY + 45)
      endShape()
    }

    if (hersel == 9) {
      beginShape()
      vertex(mouseX + 45, mouseY + 27)
      vertex(mouseX + 55, mouseY + 37)
      vertex(mouseX + 65, mouseY + 22)
      vertex(mouseX + 75, mouseY + 37)
      vertex(mouseX + 85, mouseY + 27)
      vertex(mouseX + 85, mouseY + 62)
      vertex(mouseX + 45, mouseY + 62)
      vertex(mouseX + 45, mouseY + 27)
      endShape()
    }
    if (hersel == 10) {
      arc(mouseX + 30, mouseY + 30, 20, 20, QUARTER_PI, PI + QUARTER_PI);
    }

    //borrar
    if (hersel == 21) {
      background(225)
    }

    // para que pase cada opcion del boton
    // primer boton
    if (mouseX > posxbot1 && mouseX < posxbot1 + tambot1 && mouseY > posybot1 && mouseY < posybot1 + tambot1) {
      hersel = 1
    }
    // segundo boton
    if (mouseX > posxbot2 && mouseX < posxbot2 + tambot2 && mouseY > posybot2 && mouseY < posybot2 + tambot2) {
      hersel = 2
    }
    // tercer boton
    if (mouseX > posxbot3 && mouseX < posxbot3 + tambot3 && mouseY > posybot3 && mouseY < posybot3 + tambot3) {
      hersel = 3
    }
    // cuarto 
    if (mouseX > posxbot4 && mouseX < posxbot4 + tambot4 && mouseY > posybot4 && mouseY < posybot4 + tambot4) {
      hersel = 4
    }
    // quinto
    if (mouseX > posxbot5 && mouseX < posxbot5 + tambot5 && mouseY > posybot5 && mouseY < posybot5 + tambot5) {
      hersel = 5
    }
    // sexto
    if (mouseX > posxbot6 && mouseX < posxbot6 + tambot6 && mouseY > posybot6 && mouseY < posybot6 + tambot6) {
      hersel = 6
    }
    // septimo
    if (mouseX > posxbot7 && mouseX < posxbot7 + tambot7 && mouseY > posybot7 && mouseY < posybot7 + tambot7) {
      hersel = 7
    }
    // octavo
    if (mouseX > posxbot8 && mouseX < posxbot8 + tambot8 && mouseY > posybot8 && mouseY < posybot8 + tambot8) {
      hersel = 8
    }
    // noveno
    if (mouseX > posxbot9 && mouseX < posxbot9 + tambot9 && mouseY > posybot9 && mouseY < posybot9 + tambot9) {
      hersel = 9
    }
    // decimo
    if (mouseX > posxbot10 && mouseX < posxbot10 + tambot10 && mouseY > posybot10 && mouseY < posybot10 + tambot10) {
      hersel = 10
    }
    //boton de borrar
    if (mouseX > borraarx && mouseX < borraarx + tamborraar && mouseY > borraary && mouseY < borraary + tamborraar) {
      hersel = 21
    }
    //once 
    if (mouseX > posxcol1 && mouseX < posxcol1 + tamcol1 && mouseY > posycol1 && mouseY < posycol1 + tamcol1) {
      hercol = 11
    }
    //doce
    if (mouseX > posxcol2 && mouseX < posxcol2 + tamcol2 && mouseY > posycol2 && mouseY < posycol2 + tamcol2) {
      hercol = 12
    }
    //trece
    if (mouseX > posxcol3 && mouseX < posxcol3 + tamcol3 && mouseY > posycol3 && mouseY < posycol3 + tamcol3) {
      hercol = 13
    }
    // catorce
    if (mouseX > posxcol4 && mouseX < posxcol4 + tamcol4 && mouseY > posycol4 && mouseY < posycol4 + tamcol4) {
      hercol = 14
    }
    //quince
    if (mouseX > posxcol5 && mouseX < posxcol5 + tamcol5 && mouseY > posycol5 && mouseY < posycol5 + tamcol5) {
      hercol = 15
    }
    //dieciseis 
    if (mouseX > posxcol6 && mouseX < posxcol6 + tamcol6 && mouseY > posycol6 && mouseY < posycol6 + tamcol6) {
      hercol = 16
    }
    //diecisiete
    if (mouseX > posxcol7 && mouseX < posxcol7 + tamcol7 && mouseY > posycol7 && mouseY < posycol7 + tamcol7) {
      hercol = 17
    }
    //dieciocho
    if (mouseX > posxcol8 && mouseX < posxcol8 + tamcol8 && mouseY > posycol8 && mouseY < posycol8 + tamcol8) {
      hercol = 18
    }
    //diecinueve
    if (mouseX > posxcol9 && mouseX < posxcol9 + tamcol9 && mouseY > posycol9 && mouseY < posycol9 + tamcol9) {
      hercol = 19
    }
    // veinte
    if (mouseX > posxcol10 && mouseX < posxcol10 + tamcol10 && mouseY > posycol10 && mouseY < posycol10 + tamcol10) {
      hercol = 20
    }
  }
}