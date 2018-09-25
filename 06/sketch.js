//variables
var miFotico
var miFoto
var miFotoo
var miFooto
var miFfoto
var miCancion
var nivel

//carga de canciones y fotos
function preload() {
  miFotico = loadImage('assets/fotto.jpg');
  miFoto = loadImage('assets/foto.jpg');
  miFotoo = loadImage('assets/fotoo.jpg');
  miFooto = loadImage('assets/footo.jpg');
  miFfoto = loadImage('assets/ffoto.jpg');
  //cancion violent crimes de Kanye West
  miCancion = loadSound('assets/Cancion.mp3');
}

//para visualizar el sonido en figuras
function setup() {
  createCanvas(400, 500);

  miAnalizador = new p5.Amplitude();
  miAnalizador.setInput(miCancion);


  background(255);

}
//primera foto
function draw() {
  image(miFotico, 0, 0, width, height);

  //Suena la musica cuando el mouse esta presionado, cuando se
  //suelta queda en pausa
  if (mouseIsPressed == true) {
    if (miCancion.isPlaying() == false) {
      miCancion.play();
    }
  } else {
    miCancion.pause();
  }

  // el volumen sube con el mouse y baja con el mouse
  var miVol = map(mouseY, 400, 0, 0, 1);
  miCancion.setVolume(miVol);
  
  miCancion.rate(1.5)

  //para que el efecto de sonido se oiga mas de un lado que de 
  // el otro
  var miPan = map(mouseX, 0, width, -1, 1);
  miCancion.pan(miPan);

  // primera figura que visualiza el sonido
  var nivel = miAnalizador.getLevel();
  if (nivel > 0.3) {
    for (var i = 0; i < 400; i = i + 1) {
      var posX = random(0, width);
      var posY = random(0, height);
      strokeWeight(0.2)
      stroke(0)
      fill(0, 0, 0, 10);
      triangle(posX, posY, 200, 250);
    }
  }
  if (nivel < 0.5) {
    var posX2 = random(390, width);
    ellipse(posX2, posY, 20, 25)
  }

  // siguiente parte de la cancion, un background y triangulos
  if (miCancion.currentTime() > 38) {
    background(255);
    if (miCancion.currentTime() > 40) {
      fill(68, 101, 108);
      triangle(150, 300, 250, 300, 200, 200)
    }
    if (miCancion.currentTime() > 42) {
      fill(255);
      triangle(150, 300, 250, 300, 200, 200)
    }
    if (miCancion.currentTime() > 45) {
      fill(255, 213, 0);
      triangle(150, 200, 250, 200, 200, 300)
    }
    if (miCancion.currentTime() > 47) {
      fill(255);
      triangle(190, 300, 210, 300, 200, 200)
    }
    if (miCancion.currentTime() > 50) {
      fill(179, 0, 59);
      triangle(190, 200, 210, 200, 200, 300)
    }
    if (miCancion.currentTime() > 52) {
      fill(255);
      triangle(100, 300, 300, 300, 200, 200)
    }
    if (miCancion.currentTime() > 56) {
      fill(68, 101, 108);
      triangle(100, 200, 300, 200, 200, 300)
    }
    if (miCancion.currentTime() > 58) {
      fill(255);
      triangle(150, 300, 250, 300, 200, 200)
    }
    if (miCancion.currentTime() > 60) {
      fill(255, 213, 0);
      triangle(190, 260, 210, 260, 200, 240)
    }
    if (miCancion.currentTime() > 62) {
      fill(255);
      triangle(190, 240, 210, 240, 200, 260)
    }
    if (miCancion.currentTime() > 64) {
      fill(179, 0, 59);
      triangle(180, 400, 220, 400, 200, 100)
    }
    if (miCancion.currentTime() > 66) {
      background(68, 101, 108);
      stroke(0)
      fill(0)
      textFont("Shadows Into Light");
      textSize(20);
      text("colors", 200, 250)
    }
    if (miCancion.currentTime() > 67) {
      background(255, 213, 0);
      stroke(0)
      fill(0)
      textFont("Shadows Into Light");
      textSize(20);
      text("drippin", 200, 250)
    }
    if (miCancion.currentTime() > 68) {
      background(179, 0, 59);
      stroke(0)
      fill(0)
      textFont("Shadows Into Light");
      textSize(20);
      text("off", 200, 250)
    }
    if (miCancion.currentTime() > 69) {
      background(0);
    }
  }

  // parte de rap 1 cambio de foto y de visualizacion del sonido
  if (miCancion.currentTime() > 70) {
    image(miFoto, 0, 0, width, height);
  }

  if (miCancion.currentTime() > 71) {
    noFill()
    ellipse(10, 10, nivel * 400, nivel * 400);
    fill(68, 101, 108);
    ellipse(50, 50, nivel * 400, nivel * 400);
    noFill()
    ellipse(90, 90, nivel * 400, nivel * 400);
    fill(68, 101, 108);
    ellipse(130, 130, nivel * 400, nivel * 400);
    noFill()
    ellipse(170, 170, nivel * 400, nivel * 400);
    fill(68, 101, 108);
    ellipse(390, 490, nivel * 400, nivel * 400);
    noFill()
    ellipse(350, 450, nivel * 400, nivel * 400);
    fill(68, 101, 108);
    ellipse(310, 410, nivel * 400, nivel * 400);
    noFill()
    ellipse(270, 370, nivel * 400, nivel * 400);
    fill(68, 101, 108);
    ellipse(230, 330, nivel * 400, nivel * 400);
    noFill()
    ellipse(190, 290, nivel * 400, nivel * 400);
  }
  //parte de rap2
  if (miCancion.currentTime() > 94) {
    image(miFotoo, 0, 0, width, height);
    noFill()
    ellipse(390, 10, nivel * 400, nivel * 400);
    fill(255, 213, 0);
    ellipse(350, 50, nivel * 400, nivel * 400);
    noFill()
    ellipse(310, 90, nivel * 400, nivel * 400);
    fill(255, 213, 0);
    ellipse(270, 130, nivel * 400, nivel * 400);
    noFill()
    ellipse(230, 170, nivel * 400, nivel * 400);
    fill(255, 213, 0);
    ellipse(10, 490, nivel * 400, nivel * 400);
    noFill()
    ellipse(50, 450, nivel * 400, nivel * 400);
    fill(255, 213, 0);
    ellipse(90, 410, nivel * 400, nivel * 400);
    noFill()
    ellipse(130, 370, nivel * 400, nivel * 400);
    fill(255, 213, 0);
    ellipse(170, 330, nivel * 400, nivel * 400);
    noFill()
    ellipse(210, 290, nivel * 400, nivel * 400);
  }
  //parte de rap 3
  if (miCancion.currentTime() > 120) {
    image(miFooto, 0, 0, width, height);
    noFill()
    ellipse(10, 10, nivel * 400, nivel * 400);
    fill(179, 0, 59);
    ellipse(50, 50, nivel * 400, nivel * 400);
    noFill()
    ellipse(90, 90, nivel * 400, nivel * 400);
    fill(179, 0, 59);
    ellipse(130, 130, nivel * 400, nivel * 400);
    noFill()
    ellipse(170, 170, nivel * 400, nivel * 400);
    fill(179, 0, 59);
    ellipse(390, 490, nivel * 400, nivel * 400);
    noFill()
    ellipse(350, 450, nivel * 400, nivel * 400);
    fill(179, 0, 59);
    ellipse(310, 410, nivel * 400, nivel * 400);
    noFill()
    ellipse(270, 370, nivel * 400, nivel * 400);
    fill(179, 0, 59);
    ellipse(230, 330, nivel * 400, nivel * 400);
    noFill()
    ellipse(190, 290, nivel * 400, nivel * 400);
  }
  //parte de rap 4
  if (miCancion.currentTime() > 150) {
    image(miFfoto, 0, 0, width, height);
    noFill()
    ellipse(390, 10, nivel * 400, nivel * 400);
    fill(0);
    ellipse(350, 50, nivel * 400, nivel * 400);
    noFill()
    ellipse(310, 90, nivel * 400, nivel * 400);
    fill(0);
    ellipse(270, 130, nivel * 400, nivel * 400);
    noFill()
    ellipse(230, 170, nivel * 400, nivel * 400);
    fill(0);
    ellipse(10, 490, nivel * 400, nivel * 400);
    noFill()
    ellipse(50, 450, nivel * 400, nivel * 400);
    fill(0);
    ellipse(90, 410, nivel * 400, nivel * 400);
    noFill()
    ellipse(130, 370, nivel * 400, nivel * 400);
    fill(0);
    ellipse(170, 330, nivel * 400, nivel * 400);
    noFill()
    ellipse(210, 290, nivel * 400, nivel * 400);
  }

  // "bridge" visualizacion parecida a la anterior de triangulos
  if (miCancion.currentTime() > 165) {
    background(255);
    if (miCancion.currentTime() > 166) {
      fill(0);
      triangle(150, 300, 250, 300, 200, 200)
    }
  }
  if (miCancion.currentTime() > 168) {
    fill(255);
    triangle(180, 400, 220, 400, 200, 100)
  }
  if (miCancion.currentTime() > 169) {
    fill(0);
    triangle(190, 240, 210, 240, 200, 260)
  }
  // misma foto del principio y misma visualizacion
  if (miCancion.currentTime() > 170) {
    image(miFotico, 0, 0, width, height);

    if (nivel > 0.3) {
      for (var i = 0; i < 400; i = i + 1) {
        var posX = random(0, width);
        var posY = random(0, height);
        strokeWeight(0.2)
        fill(0, 0, 0, 10);
        triangle(posX, posY, 200, 250);
      }
    }
    if (nivel < 0.5) {
      var posX2 = random(390, width);
      ellipse(posX2, posY, 20, 25)
    }
    // final de la cancion   
  }
  if (miCancion.currentTime() > 197) {
    background(68, 101, 108);
    stroke(0)
    fill(0)
    textFont("Shadows Into Light");
    textSize(20);
    text("colors", 170, 250)
  }
  if (miCancion.currentTime() > 198) {
    background(255, 213, 0);
    stroke(0)
    fill(0)
    textFont("Shadows Into Light");
    textSize(20);
    text("drippin", 170, 250)
  }
  if (miCancion.currentTime() > 199) {
    background(179, 0, 59);
    stroke(0)
    fill(0)
    textFont("Shadows Into Light");
    textSize(20);
    text("off", 170, 250)
  }
  if (miCancion.currentTime() > 200) {
    background(0);
    if (miCancion.currentTime() > 205) {
      stroke(255)
      fill(255)
      textFont("Shadows Into Light");
      textSize(20);
      text("Violent Crimes", 170, 250)
    }
    if (miCancion.currentTime() > 208) {
      stroke(255)
      fill(255)
      textFont("Shadows Into Light");
      textSize(20);
      text("Kanye West", 200, 300)
    }

  }
}