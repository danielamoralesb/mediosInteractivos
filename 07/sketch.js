//SABANA AFRICANA
var miSegundo
var miMinuto
var marvin
var miEjercito = []
var tamx = 110
var tamy = 80
var tamx2 = 150
var tamy2 = 160


function setup() {
  createCanvas(600, 400);
  marvin = new avestruz(230, 150)
  for (var i = 0; i < 20; i = i + 1) {
    var tempX = random(0, width)
    var tempY = random(0, height)
    miEjercito[i] = new avestruz(tempX, tempY)
  }

}

//imagenes que voy a usar 
function preload() {
  miFondo = loadImage('assets/fondo.jpg')
  miElefante = loadImage('assets/elef.png');
  miHipo = loadImage('assets/hipo.png');
  miJirafa = loadImage('assets/jirafa.png');
  miLeon = loadImage('assets/leon.png');
  miLeopardo = loadImage('assets/leop.png');
  miAvestruz = loadImage('assets/truz.png');
  miZebra = loadImage('assets/zebra.png');
  miOfondo = loadImage('assets/hola.jpg')
}

function draw() {
  background(220);
  //primera escena
  //empieza con las jirafas caminando y las avestruces por todas partes
  // se cruzan con la funcion segundos y minuto
  miSegundomodificado = map(miSegundo, 0, 59, 1, 1200);
  mi2modif = map(miSegundo, 0, 59, 1, 600)
  mi3modif = map(miSegundo, 0, 59, 300, 1)
  mi4modif = map(miSegundo, 0, 59, 600, 1)
  // fondo de sabana africana 
  image(miFondo, 0, 0, width, height)
  miSegundo = second();
  miMinuto = minute();
  // las avestruces se llaman marvin 
  marvin.dibujarse()
  marvin.moverse()
  if (dist(mouseX, mouseY, marvin.x, marvin.y) < 5) {
    marvin.morirse()
  }

  for (var i = 0; i < miEjercito.length; i = i + 1) {
    miEjercito[i].dibujarse()
    miEjercito[i].moverse()
    if (dist(mouseX, mouseY, miEjercito[i].x, miEjercito[i].y) < 5) {
      miEjercito[i].morirse()
    }
    //las jirafas son tres y van lento y pacifico
    //el leopardo solo camina porque el leon esta cazando
    image(miJirafa, miSegundomodificado, 170, 160, 200);
    image(miJirafa, miSegundomodificado + 119, 170, 160, 200);
    image(miJirafa, miSegundomodificado + 49, 170, 160, 200);
    image(miLeopardo, mi4modif, 280, 110, 80)
    // las avestruces y las zebras son muchas
    //pero se mueren por que las caza el leon
    image(miLeon, mouseX, mouseY, tamx2, tamy2)
    tamx2 = tamx2 + 0.001
    tamy2 = tamy2 + 0.001


    //Segunda escena
    //otra parte de la sabana africana
    //los elefantes e hipopotamos huyen cuando ven que el leopardo (mouse)
    //se va a comer a la avestruz y a la zebra
    //el leon persigue lentamente a los elefantes 
    if (miSegundomodificado > 610) {
      image(miOfondo, 0, 0, width, height)
      image(miElefante, mi2modif, 170, 160, 180);
      image(miElefante, mi2modif + 119, 170, 160, 180);
      image(miElefante, mi2modif + 49, 170, 160, 180);
      image(miLeon, mi2modif - 300, 190, 150, 160)
      image(miHipo, mi3modif, 270, 110, 120)
      image(miHipo, mi3modif - 100, 270, 110, 120)
      image(miLeopardo, mouseX, mouseY, tamx, tamy)
      tamx = tamx + 0.001
      tamy = tamy + 0.001


      marvin.dibujarse()
      marvin.moverse()
      if (dist(mouseX, mouseY, marvin.x, marvin.y) < 5) {
        marvin.morirse()
      }

    }
  }
}

function avestruz(miX, miY) {
  //caracteristicas
  this.x = miX
  this.y = miY
  this.estaVivo = true
  //habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(miAvestruz, this.x, this.y, 50, 80)
      image(miZebra, this.x + 80, this.y + 10, 70, 80)
    }
    this.moverse = function() {
      this.x = this.x + random(-1, 1);
      this.y = this.y + random(-1, 1);
    }
  }

  this.morirse = function() {
    this.estaVivo = false
  }

}