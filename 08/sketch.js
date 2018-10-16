//SABANA AFRICANA
var miSegundo
var miMinuto
var marvin
var miEjercito = []
var tamx = 110
var tamy = 80
var tamx2 = 150
var tamy2 = 160
var x;
var y;
var tam;
var tam2
var tiempo; //crea una lista de tiempo para guardar el tiempo entre dos clics
var vel; //variable para guardar la velocidad de los clics
var tamm; //tamaño del leopardo
var mtam; //variable para suavizar el tamaño del leopardo


function setup() {
  canvas = createCanvas(600, 400);
  marvin = new avestruz(230, 150)
  for (var i = 0; i < 20; i = i + 1) {
    var tempX = random(0, width)
    var tempY = random(0, height)
    miEjercito[i] = new avestruz(tempX, tempY)
  }
  x = width / 2; //posicion en x
  y = height / 2; //posicion en y
  tam = 180; //tamaño
  tam2 = 150

  tiempo = [0, 0]; //crea una lista de tiempo para guardar el tiempo entre dos clics
  vel = 0; //velocidad inicial es cero

  //tamaño inicial es 10px
  tamm = 10;
  mtam = 10;
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

  //la velocidad de la bola se obtiene de la division de 60 segundos entre el intervalo de dos clics
  //tiempo[1] = tiempo en el que se hizo el primer clic
  //tiempo[0] = tiempo en el que se hizo el segundo clic
  var vel = 60000 / (tiempo[1] - tiempo[0]);

  //si han pasado mas de 200 millisegundos entre un clic y otro se asigna un valor de 0 a la velocidad
  if (millis() - tiempo[1] > 200) {
    vel = 0;
  }
  if (vel != Infinity && floor(vel) > 200) {

    //aumenta el tamaño dependiendo de los clics por minuto
    tamm += vel / 400;

  } else if (tam > 10) { //si la velocidad es menor a 200 y el tamaño es mayor a 10

    //disminuye el tamaño
    tamm -= 3;

  } else {

    //establece 10 como el tamaño mínimo 
    tamm = 10;

  }
  // fondo de sabana africana 
  image(miFondo, 0, 0, width, height)
  textFont("Gloria Hallelujah");
  textSize(15);
  fill(255, 0, 0)
  image(miLeopardo, 300, 350, tamm, tamm)

  //primera escena
  //empieza con las jirafas caminando y las avestruces por todas partes
  // se cruzan con la funcion segundos y minuto
  miSegundomodificado = map(miSegundo, 0, 59, 1, 1200);
  mi2modif = map(miSegundo, 0, 59, 1, 600)
  mi3modif = map(miSegundo, 0, 59, 300, 1)
  mi4modif = map(miSegundo, 0, 59, 600, 1)
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
    // las avestruces y las zebras son muchas
    //pero se mueren por que las caza el leon
    image(miLeon, x - tamx / 2, y - tamy / 2, tam, tam)
    text("haz clic rápido para que el leopardo no crezca", 15, 15)
    text("si mueves al león se come a las avestruces y zebras", 45, 50)



    //Segunda escena
    //otra parte de la sabana africana
    //los elefantes e hipopotamos huyen cuando ven que el leopardo (mouse)
    //se va a comer a la avestruz y a la zebra
    //el leon persigue lentamente a los elefantes 

    if (miSegundomodificado > 610) {
      textFont("Gloria Hallelujah");
      textSize(15);
      fill(100, 240, 20)
      image(miOfondo, 0, 0, width, height)
      image(miElefante, mi2modif, 170, 160, 180);
      image(miElefante, mi2modif + 119, 170, 160, 180);
      image(miElefante, mi2modif + 49, 170, 160, 180);
      image(miLeon, mi2modif - 300, 190, 150, 160)
      image(miHipo, mi3modif, 270, 110, 120)
      image(miHipo, mi3modif - 100, 270, 110, 120)
      image(miLeopardo, x - tamx / 2, y - tamy / 2, tam2, tam2)
      text("ya hay más calma, pero si mueves al leopardo se come lo que dejo el león", 15, 15)



      marvin.dibujarse()
      marvin.moverse()
      if (dist(mouseX, mouseY, marvin.x, marvin.y) < 5) {
        marvin.morirse()
      }
    }
  }

}

function mouseClicked() {

  //el tiempo del segundo clic se corre a la segunda posicion
  tiempo[0] = tiempo[1];

  //se guarda el tiempo del primer clic en el arreglo
  tiempo[1] = millis();
}

function mouseDragged() {

  //revisa si la posición del mouse es cercana a la posicion del animal
  if (dist(mouseX, mouseY, x, y) < tam / 2 + 10) {

    //actualiza la posicion del animal con la posición del mouse
    x = mouseX;
    y = mouseY;
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