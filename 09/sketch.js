//fotos comida
var mihamburguesa
var mipizza
var mispapas
var mihelado
var mimalteada
var milechuga
var mibrocoli
var mizanahoria
//personaje
var mioso
//acciones
var x = 0
var y = 0
var tam
//estados del juego
var estado = 0
var inicio = 1
var instrucciones = 2
var nivelham = 3
var nivelpiz = 4
var nivelpap = 5
var nivelmal = 6
var nivelhel = 7
var perdiste = 9
var ganaste = 8

function preload() {
  mihamburguesa = loadImage('assets/hamburguesa.png')
  mipizza = loadImage('assets/pizza.png')
  mispapas = loadImage('assets/papas.png')
  mihelado = loadImage('assets/helado.png')
  mimalteada = loadImage('assets/malteada.png')
  milechuga = loadImage('assets/lechuga.png')
  mibrocoli = loadImage('assets/brocoli.png')
  mizanahoria = loadImage('assets/zana.png')
  mioso = loadImage('assets/personaje.png')
  fondoganaste = loadImage('assets/fondo.jpg')
  fondoinicio = loadImage('assets/intro.jpg')
  fondo0 = loadImage('assets/00.jpg')
  miCancion = loadSound('assets/Cancion.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0
  y = 450
  tam = 60
}

function draw() {
  if (mouseIsPressed == true) {
    if (miCancion.isPlaying() == false) {
      miCancion.play();
    }
  } else {
    miCancion.pause();
  }
  if (estado == 0) {
    image(fondo0, 0, 0, width, height)
  }
  if (estado == 1) {
    image(fondoinicio, 0, 0, width, height)
    image(mioso, 200, 10, 200, 250)
    textFont("Shadows Into Light");
    textSize(100)
    text("veggie skip", 100, 440)

  }
  if (estado == 2) {
    image(fondo0, 0, 0, width, height)
    textFont("Shadows Into Light");
    textSize(20)
    text("1. usa tu mouse para hacer que el oso pase el laberinto", 10, 50)
    text("2. llega hasta la comida deliciosa para pasar al siguiente nivel", 10, 150)
    text("3. cuidado con los vegetales! si te tocan pierdes", 10, 250)
    image(mioso, 400, 300, 200, 250)
  }
  if (estado == 3) {
    background(255, 153, 204);
    strokeWeight(50)
    stroke(255)
    line(0 * width / 700, 480 * height / 550, 650 * width / 700, 480 * height / 550)
    line(650 * width / 700, 480 * height / 550, 650 * width / 700, 400 * height / 550)
    line(650 * width / 700, 400 * height / 550, 50 * width / 700, 400 * height / 550)
    line(50 * width / 700, 400 * height / 550, 50 * width / 700, 320 * height / 550)
    line(50 * width / 700, 320 * height / 550, 380 * width / 700, 320 * height / 550)
    line(380 * width / 700, 320 * height / 550, 380 * width / 700, 260 * height / 550)
    line(380 * width / 700, 260 * height / 550, 100 * width / 700, 260 * height / 550)
    line(100 * width / 700, 260 * height / 550, 100 * width / 700, 180 * height / 550)
    line(100 * width / 700, 180 * height / 550, 650 * width / 700, 180 * height / 550)
    line(650 * width / 700, 180 * height / 550, 650 * width / 700, 100 * height / 550)
    line(650 * width / 700, 100 * height / 550, 30 * width / 700, 100 * height / 550)
    image(mihamburguesa, 20 * width / 700, 75 * height / 550, 50, 50)
    image(mioso, x * width / 700, y * height / 550, tam, tam)
    if (dist(mouseX, mouseY, 40 * width / 700, 100 * height / 550) < 5) {
      estado = 4
    }
  }
  if (estado == 4) {
    background(240, 153, 255)
    strokeWeight(50)
    stroke(255)
    line(0 * width / 700, 480 * height / 550, 650 * width / 700, 480 * height / 550)
    line(650 * width / 700, 480 * height / 550, 650 * width / 700, 100 * height / 550)
    line(650 * width / 700, 100 * height / 550, 30 * width / 700, 100 * height / 550)
    line(30 * width / 700, 100 * height / 550, 30 * width / 700, 400 * height / 550)
    line(30 * width / 700, 400 * height / 550, 550 * width / 700, 400 * height / 550)
    line(550 * width / 700, 400 * height / 550, 550 * width / 700, 200 * height / 550)
    line(550 * width / 700, 200 * height / 550, 100 * width / 700, 200 * height / 550)
    line(100 * width / 700, 200 * height / 550, 100 * width / 700, 300 * height / 550)
    line(100 * width / 700, 300 * height / 550, 460 * width / 700, 300 * height / 550)
    image(mipizza, 430 * width / 700, 275 * height / 550, 50, 50)
    image(mioso, x * width / 700, y * height / 550, tam, tam)
    if (dist(mouseX, mouseY, 430 * width / 700, 275 * height / 550) < 5) {
      estado = 5
    }
  }
  if (estado == 5) {
    background(255, 153, 153)
    strokeWeight(50)
    stroke(255)
    line(0 * width / 700, 480 * height / 550, 200 * width / 700, 480 * height / 550)
    line(200 * width / 700, 480 * height / 550, 200 * width / 700, 400 * height / 550)
    line(200 * width / 700, 400 * height / 550, 400 * width / 700, 400 * height / 550)
    line(400 * width / 700, 400 * height / 550, 400 * width / 700, 320 * height / 550)
    line(400 * width / 700, 320 * height / 550, 600 * width / 700, 320 * height / 550)
    line(600 * width / 700, 320 * height / 550, 600 * width / 700, 240 * height / 550)
    line(600 * width / 700, 240 * height / 550, 700 * width / 700, 240 * height / 550)
    line(700 * width / 700, 240 * height / 550, 700 * width / 700, 110 * height / 550)
    line(700 * width / 700, 110 * height / 550, 400 * width / 700, 110 * height / 550)
    line(400 * width / 700, 110 * height / 550, 400 * width / 700, 190 * height / 550)
    line(400 * width / 700, 190 * height / 550, 200 * width / 700, 190 * height / 550)
    line(200 * width / 700, 190 * height / 550, 200 * width / 700, 250 * height / 550)
    line(200 * width / 700, 250 * height / 550, 330 * width / 700, 250 * height / 550)
    line(330 * width / 700, 250 * height / 550, 330 * width / 700, 330 * height / 550)
    line(330 * width / 700, 330 * height / 550, 130 * width / 700, 330 * height / 550)
    line(130 * width / 700, 330 * height / 550, 130 * width / 700, 400 * height / 550)
    line(130 * width / 700, 400 * height / 550, 50 * width / 700, 400 * height / 550)
    line(50 * width / 700, 400 * height / 550, 50 * width / 700, 130 * height / 550)
    image(mispapas, 25 * width / 700, 120 * height / 550, 50, 50)
    image(mioso, x * width / 700, y * height / 550, tam, tam)
    if (dist(mouseX, mouseY, 25 * width / 700, 120 * height / 550) < 5) {
      estado = 6
    }
  }
  if (estado == 6) {
    background(153, 204, 255)
    strokeWeight(50)
    stroke(255)
    line(30 * width / 700, 530 * height / 550, 30 * width / 700, 80 * height / 550)
    line(30 * width / 700, 80 * height / 550, 110 * width / 700, 80 * height / 550)
    line(110 * width / 700, 80 * height / 550, 110 * width / 700, 530 * height / 550)
    line(110 * width / 700, 530 * height / 550, 190 * width / 700, 530 * height / 550)
    line(190 * width / 700, 530 * height / 550, 190 * width / 700, 80 * height / 550)
    line(190 * width / 700, 80 * height / 550, 270 * width / 700, 80 * height / 550)
    line(270 * width / 700, 80 * height / 550, 270 * width / 700, 530 * height / 550)
    line(270 * width / 700, 530 * height / 550, 350 * width / 700, 530 * height / 550)
    line(350 * width / 700, 530 * height / 550, 350 * width / 700, 80 * height / 550)
    line(350 * width / 700, 80 * height / 550, 410 * width / 700, 80 * height / 550)
    line(410 * width / 700, 80 * height / 550, 410 * width / 700, 350 * height / 550)
    line(410 * width / 700, 350 * height / 550, 470 * width / 700, 350 * height / 550)
    line(470 * width / 700, 350 * height / 550, 470 * width / 700, 530 * height / 550)
    line(470 * width / 700, 530 * height / 550, 530 * width / 700, 530 * height / 550)
    line(530 * width / 700, 530 * height / 550, 530 * width / 700, 420 * height / 550)
    line(530 * width / 700, 420 * height / 550, 590 * width / 700, 420 * height / 550)
    line(590 * width / 700, 420 * height / 550, 590 * width / 700, 530 * height / 550)
    line(590 * width / 700, 530 * height / 550, 680 * width / 700, 530 * height / 550)
    image(mimalteada, 630 * width / 700, 490 * height / 550, 80, 100)
    image(mioso, x * width / 700, y * height / 550, tam, tam)
    if (dist(mouseX, mouseY, 610 * width / 700, 480 * height / 550) < 5) {
      estado = 7
    }
  }
  if (estado == 7) {
    background(153, 153, 255)
    strokeWeight(50)
    stroke(255)
    line(30 * width / 700, 480 * height / 550, 650 * width / 700, 100 * height / 550)
    line(650 * width / 700, 100 * height / 550, 650 * width / 700, 480 * height / 550)
    line(650 * width / 700, 480 * height / 550, 150 * width / 700, 480 * height / 550)
    line(150 * width / 700, 480 * height / 550, 150 * width / 700, 100 * height / 550)
    line(150 * width / 700, 100 * height / 550, 550 * width / 700, 100 * height / 550)
    line(550 * width / 700, 100 * height / 550, 550 * width / 700, 400 * height / 550)
    line(550 * width / 700, 400 * height / 550, 290 * width / 700, 400 * height / 550)
    line(290 * width / 700, 400 * height / 550, 490 * width / 700, 270 * height / 550)
    line(490 * width / 700, 270 * height / 550, 490 * width / 700, 330 * height / 550)
    line(490 * width / 700, 330 * height / 550, 210 * width / 700, 250 * height / 550)
    line(210 * width / 700, 250 * height / 550, 210 * width / 700, 170 * height / 550)
    line(210 * width / 700, 170 * height / 550, 380 * width / 700, 170 * height / 550)
    line(380 * width / 700, 170 * height / 550, 330 * width / 700, 220 * height / 550)
    image(mihelado, 315 * width / 700, 190 * height / 550, 40, 50)
    image(mioso, x * width / 700, y * height / 550, tam, tam)
    if (dist(mouseX, mouseY, 330 * width / 700, 220 * height / 550) < 5) {
      estado = 8
    }
  }
  if (estado == 8) {
    image(fondoganaste, 0, 0, width, height)
    textFont("Shadows Into Light");
    textSize(150)
    text("Ganaste!!!", 80, 300)
  }
  if (estado == 9) {
    image(fondoganaste, 0, 0, width, height)
    textFont("Shadows Into Light");
    textSize(150)
    text("Perdiste", 80, 300)
    text(":/", 270, 450)
  }

  // if se toca la comida que quiere, se pasa al siguiente nivel que es mas dificil
  // hacer que las verduras caigan del cielo y hay que esquivarlas
  // que el oso se mueva con el mouse sin tocar las verduras que caen 
}

function mousePressed() {
  if (estado == 8) {
    estado = 1
  }
  if (estado == 1) {
    estado = 2
  }
  if (estado == 2) {
    estado = 3
  }
  if (estado == 0) {
    estado = 1
  }
  if (estado == 8) {
    estado = 0
  }
}

function mouseDragged() {

  //revisa si la posición del mouse es cercana a la posicion de la comida 
  if (dist(mouseX, mouseY, x, y) < tam / 2 + 10) {

    //actualiza la posicion del oso con la posición del mouse
    x = mouseX;
    y = mouseY;
  }
}