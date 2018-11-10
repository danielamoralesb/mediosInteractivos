//figuras invisibles nivel 1
var posxinv1 = 18
var posyinv1 = 550
var taminvx1 = 10
var taminvy1 = 50
var posxinv2 = 30
var posyinv2 = 528
var taminvx2 = 887
var taminvy2 = 20
var posxinv3 = 30
var posyinv3 = 602
var taminvx3 = 940
var taminvy3 = 20
var posxinv4 = 972
var posyinv4 = 300
var taminvx4 = 10
var taminvy4 = 300
var posxinv5 = 907
var posyinv5 = 352
var taminvx5 = 10
var taminvy5 = 190
var posxinv6 = 80
var posyinv6 = 352
var taminvx6 = 827
var taminvy6 = 20
var posxinv7 = 67
var posyinv7 = 110
var taminvx7 = 10
var taminvy7 = 240
var posxinv8 = 80
var posyinv8 = 87
var taminvx8 = 880
var taminvy8 = 20
var posxinv9 = 132
var posyinv9 = 163
var taminvx9 = 827
var taminvy9 = 133
// figuras invisibles nivel 2 
var posxin1 = 83
var posyin1 = 88
var taminx1 = 870
var taminy1 = 20
var posxin2 = 58
var posyin2 = 110
var taminx2 = 20
var taminy2 = 490
var posxin3 = 80
var posyin3 = 601
var taminx3 = 880
var taminy3 = 20
var posxin4 = 961
var posyin4 = 110
var taminx4 = 20
var taminy4 = 490
var posxin5 = 131
var posyin5 = 161
var taminx5 = 827
var taminy5 = 87
var posxin6 = 131
var posyin6 = 248
var taminx6 = 67
var taminy6 = 300
var posxin7 = 198
var posyin7 = 441
var taminx7 = 710
var taminy7 = 107
var posxin8 = 251
var posyin8 = 301
var taminx8 = 657
var taminy8 = 87
var posxin9 = 801
var posyin9 = 389
var taminx9 = 107
var taminy9 = 51
//figuras invisibles nivel 3
var posxi1 = 931
var posyi1 = 119
var tamix1 = 20
var tamiy1 = 530
var posxi2 = 480
var posyi2 = 98
var tamix2 = 449
var tamiy2 = 20
var posxi3 = 531
var posyi3 = 171
var tamix3 = 347
var tamiy3 = 147
var posxi4 = 681
var posyi4 = 319
var tamix4 = 197
var tamiy4 = 69
var posxi5 = 681
var posyi5 = 389
var tamix5 = 67
var tamiy5 = 260
var posxi6 = 801
var posyi6 = 389
var tamix6 = 77
var tamiy6 = 209
var posxi7 = 99
var posyi7 = 601
var tamix7 = 581
var tamiy7 = 20
var posxi8 = 251
var posyi8 = 80
var tamix8 = 227
var tamiy8 = 468
var posxi9 = 478
var posyi9 = 371
var tamix9 = 150
var tamiy9 = 177
var posxi10 = 78
var posyi10 = 400
var tamix10 = 20
var tamiy10 = 200
var posxi11 = 30
var posyi11 = 131
var tamix11 = 168
var tamiy11 = 267
var posxi12 = 30
var posyi12 = 58
var tamix12 = 300
var tamiy12 = 20
var posxi13 = 151
var posyi13 = 451
var tamix13 = 99
var tamiy13 = 97

//fotos comida
var mihamburguesa
var mipizza
var mispapas
var mizanahoria
var zanaa
var miEjercito = []
//ZANAHORIAS que matan
//personaje
var mioso
//acciones
var x = 0
var y = 0
var tam
//estados del juego
var estado = 0
var inicio = 1
var nivelham = 3
var nivelpiz = 4
var nivelpap = 5
var perdiste = 9
var ganaste = 8

function preload() {
  mihamburguesa = loadImage('assets/hamburguesa.png')
  mipizza = loadImage('assets/pizza.png')
  mispapas = loadImage('assets/papas.png')
  mizanahoria = loadImage('assets/zana.png')
  mioso = loadImage('assets/personaje.png')
  miCancion = loadSound('assets/super.mp3');
}

function setup() {
  createCanvas(1000, 700);
  x = 60
  y = 575
  tam = 60
  zanaa = new carrot(230, 150)
  for (var i = 0; i < 20; i = i + 1) {
    var tempX = random(0, width)
    var tempY = random(0, height)
    miEjercito[i] = new carrot(tempX, tempY)
  }
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
    background(255)
    textFont("Shadows Into Light");
    textSize(100)
    text("carrot skip", 300, 350)
    image(mioso, 350, 500, 300, 350)
    image(mioso, 350, -200, 300, 350)
    image(mizanahoria, 656, 305, 25, 25)
    image(mizanahoria, 307, 307, 25, 25)
  }
  //introduccion
  if (estado == 1) {
    background(153, 153, 255)
    textFont("Shadows Into Light");
    textSize(25)
    stroke(255)
    fill(255)
    text("1. Arrastra el oso con tu mouse por el laberinto", 20, 60)
    text("2. Llega hasta la comida mas rica para pasar al siguiente nivel", 20, 100)
    text("3. OJO! si las zanahoras te tocan, pierdes", 20, 140)
    text("4. Si intentas hacer trampa y salirte del laberinto, tambien vas a perder", 20, 180)
    text("5. Si pierdes vuelves a empezar", 20, 220)
    text("6. Si pierdes, desliza el mouse hasta volver a encontrar al oso", 20, 260)
    text ("7. Suerte! disfruta tu comida",20,300)
    textSize(15)
    text("* haz click en la zanahoria para empezar", 30, 620)
    image(mispapas, 100, 320, 70, 70)
    image(mihamburguesa, 450, 275, 70, 70)
    image(mipizza, 630, 100, 70, 70)
    image(mioso, 680, 350, 300, 320)
    image(mizanahoria, 45, 555, 40, 40)


  }
  //primer nivel
  if (estado == 3) {
    background(255, 153, 204);
    strokeWeight(1)
    stroke(255)
    fill(255)
    // cuadraddos para hacer el laberinto
    quad(30, 600, 30, 550, 970, 550, 970, 600)
    quad(920, 550, 970, 550, 970, 300, 920, 300)
    quad(920, 350, 920, 300, 80, 300, 80, 350)
    quad(80, 300, 130, 300, 130, 110, 80, 110)
    quad(130, 110, 130, 160, 960, 160, 960, 110)
    //para que se muera si se sale del laberinto 
    fill(255, 153, 204)
    stroke(255, 153, 204)
    rect(posxinv1, posyinv1, taminvx1, taminvy1)
    rect(posxinv2, posyinv2, taminvx2, taminvy2)
    rect(posxinv3, posyinv3, taminvx3, taminvy3)
    rect(posxinv4, posyinv4, taminvx4, taminvy4)
    rect(posxinv5, posyinv5, taminvx5, taminvy5)
    rect(posxinv6, posyinv6, taminvx6, taminvy6)
    rect(posxinv7, posyinv7, taminvx7, taminvy7)
    rect(posxinv8, posyinv8, taminvx8, taminvy8)
    rect(posxinv9, posyinv9, taminvx9, taminvy9)
    zanaa.dibujarse()
    zanaa.moverse()
    if (dist(mouseX, mouseY, zanaa.x, zanaa.y) < 12) {
      estado = 9
    }
    //HACER ESTO CON CUADRADOS INVISIBLESS CON TAM Y TODO
    if (mouseX > posxinv1 && mouseX < posxinv1 + taminvx1 && mouseY > posyinv1 && mouseY < posyinv1 + taminvy1) {
      estado = 9
    }
    if (mouseX > posxinv2 && mouseX < posxinv2 + taminvx2 && mouseY > posyinv2 && mouseY < posyinv2 + taminvy2) {
      estado = 9
    }
    if (mouseX > posxinv3 && mouseX < posxinv3 + taminvx3 && mouseY > posyinv3 && mouseY < posyinv3 + taminvy3) {
      estado = 9
    }
    if (mouseX > posxinv4 && mouseX < posxinv4 + taminvx4 && mouseY > posyinv4 && mouseY < posyinv4 + taminvy4) {
      estado = 9
    }
    if (mouseX > posxinv5 && mouseX < posxinv5 + taminvx5 && mouseY > posyinv5 && mouseY < posyinv5 + taminvy5) {
      estado = 9
    }
    if (mouseX > posxinv6 && mouseX < posxinv6 + taminvx6 && mouseY > posyinv6 && mouseY < posyinv6 + taminvy6) {
      estado = 9
    }
    if (mouseX > posxinv7 && mouseX < posxinv7 + taminvx7 && mouseY > posyinv7 && mouseY < posyinv7 + taminvy7) {
      estado = 9
    }
    if (mouseX > posxinv8 && mouseX < posxinv8 + taminvx8 && mouseY > posyinv8 && mouseY < posyinv8 + taminvy8) {
      estado = 9
    }
    if (mouseX > posxinv9 && mouseX < posxinv9 + taminvx9 && mouseY > posyinv9 && mouseY < posyinv9 + taminvy9) {
      estado = 9
    }

    for (var i = 0; i < miEjercito.length; i = i + 1) {
      miEjercito[i].dibujarse()
      miEjercito[i].moverse()
      if (dist(mouseX, mouseY, miEjercito[i].x, miEjercito[i].y) < 12) {
        estado = 9
      }
    }
    image(mihamburguesa, 910, 110, 50, 50)
    image(mioso, x - 60 / 2, y - 60 / 2, tam, tam)
    if (dist(mouseX, mouseY, 920, 120) < 20) {
      estado = 4
    }
  }
  if (estado == 4) {
    background(240, 153, 255)
    strokeWeight(1)
    stroke(255)
    fill(255)
    quad(130, 110, 130, 160, 960, 160, 960, 110)
    quad(130, 110, 80, 110, 80, 600, 130, 600)
    quad(130, 600, 130, 550, 960, 550, 960, 600)
    quad(960, 600, 910, 600, 910, 250, 960, 250)
    quad(910, 250, 910, 300, 200, 300, 200, 250)
    quad(200, 300, 250, 300, 250, 440, 200, 440)
    quad(250, 440, 250, 390, 800, 390, 800, 440)
    // figuras invisibles 
    stroke(240, 153, 255)
    fill(240, 153, 255)
    rect(posxin1, posyin1, taminx1, taminy1)
    rect(posxin2, posyin2, taminx2, taminy2)
    rect(posxin3, posyin3, taminx3, taminy3)
    rect(posxin4, posyin4, taminx4, taminy4)
    rect(posxin5, posyin5, taminx5, taminy5)
    rect(posxin6, posyin6, taminx6, taminy6)
    rect(posxin7, posyin7, taminx7, taminy7)
    rect(posxin8, posyin8, taminx8, taminy8)
    rect(posxin9, posyin9, taminx9, taminy9)
    zanaa.dibujarse()
    zanaa.moverse()
    if (dist(mouseX, mouseY, zanaa.x, zanaa.y) < 12) {
      estado = 9
    }

    //HACER ESTO CON CUADRADOS INVISIBLESS CON TAM Y TODO
    if (mouseX > posxin1 && mouseX < posxin1 + taminx1 && mouseY > posyin1 && mouseY < posyin1 + taminy1) {
      estado = 9
    }
    if (mouseX > posxin2 && mouseX < posxin2 + taminx2 && mouseY > posyin2 && mouseY < posyin2 + taminy2) {
      estado = 9
    }
    if (mouseX > posxin3 && mouseX < posxin3 + taminx3 && mouseY > posyin3 && mouseY < posyin3 + taminy3) {
      estado = 9
    }
    if (mouseX > posxin4 && mouseX < posxin4 + taminx4 && mouseY > posyin4 && mouseY < posyin4 + taminy4) {
      estado = 9
    }
    if (mouseX > posxin5 && mouseX < posxin5 + taminx5 && mouseY > posyin5 && mouseY < posyin5 + taminy5) {
      estado = 9
    }
    if (mouseX > posxin6 && mouseX < posxin6 + taminx6 && mouseY > posyin6 && mouseY < posyin6 + taminy6) {
      estado = 9
    }
    if (mouseX > posxin7 && mouseX < posxin7 + taminx7 && mouseY > posyin7 && mouseY < posyin7 + taminy7) {
      estado = 9
    }
    if (mouseX > posxin8 && mouseX < posxin8 + taminx8 && mouseY > posyin8 && mouseY < posyin8 + taminy8) {
      estado = 9
    }
    if (mouseX > posxin9 && mouseX < posxin9 + taminx9 && mouseY > posyin9 && mouseY < posyin9 + taminy9) {
      estado = 9
    }
    for (var i = 0; i < miEjercito.length; i = i + 1) {
      miEjercito[i].dibujarse()
      miEjercito[i].moverse()
      if (dist(mouseX, mouseY, miEjercito[i].x, miEjercito[i].y) < 12) {
        estado = 9
      }
    }

    image(mipizza, 750, 390, 50, 50)
    image(mioso, x - 60 / 2, y - 60 / 2, tam, tam)
    if (dist(mouseX, mouseY, 765, 405) < 20) {
      estado = 5
    }
  }
  if (estado == 5) {
    background(255, 153, 153)
    strokeWeight(1)
    stroke(255)
    fill(255)
    quad(750, 390, 800, 390, 800, 650, 750, 650)
    quad(800, 650, 800, 600, 930, 600, 930, 650)
    quad(930, 650, 880, 650, 880, 120, 930, 120)
    quad(880, 120, 880, 170, 480, 170, 480, 120)
    quad(480, 170, 530, 170, 530, 370, 480, 370)
    quad(480, 370, 480, 320, 680, 320, 680, 370)
    quad(680, 370, 630, 370, 630, 600, 680, 600)
    quad(680, 600, 680, 550, 100, 550, 100, 600)
    quad(100, 600, 150, 600, 150, 400, 100, 400)
    quad(150, 400, 150, 450, 250, 450, 250, 400)
    quad(250, 400, 200, 400, 200, 80, 250, 80)
    quad(200, 80, 200, 130, 30, 130, 30, 80)
    //figuras invisibles 
    fill(255, 153, 153)
    stroke(255, 153, 153)
    rect(posxi1, posyi1, tamix1, tamiy1)
    rect(posxi2, posyi2, tamix2, tamiy2)
    rect(posxi3, posyi3, tamix3, tamiy3)
    rect(posxi4, posyi4, tamix4, tamiy4)
    rect(posxi5, posyi5, tamix5, tamiy5)
    rect(posxi6, posyi6, tamix6, tamiy6)
    rect(posxi7, posyi7, tamix7, tamiy7)
    rect(posxi8, posyi8, tamix8, tamiy8)
    rect(posxi9, posyi9, tamix9, tamiy9)
    rect(posxi10, posyi10, tamix10, tamiy10)
    rect(posxi11, posyi11, tamix11, tamiy11)
    rect(posxi12, posyi12, tamix12, tamiy12)
    rect(posxi13, posyi13, tamix13, tamiy13)

    if (mouseX > posxi1 && mouseX < posxi1 + tamix1 && mouseY > posyi1 && mouseY < posyi1 + tamiy1) {
      estado = 9
    }
    if (mouseX > posxi2 && mouseX < posxi2 + tamix2 && mouseY > posyi2 && mouseY < posyi2 + tamiy2) {
      estado = 9
    }
    if (mouseX > posxi3 && mouseX < posxi3 + tamix3 && mouseY > posyi3 && mouseY < posyi3 + tamiy3) {
      estado = 9
    }
    if (mouseX > posxi4 && mouseX < posxi4 + tamix4 && mouseY > posyi4 && mouseY < posyi4 + tamiy4) {
      estado = 9
    }
    if (mouseX > posxi5 && mouseX < posxi5 + tamix5 && mouseY > posyi5 && mouseY < posyi5 + tamiy5) {
      estado = 9
    }
    if (mouseX > posxi6 && mouseX < posxi6 + tamix6 && mouseY > posyi6 && mouseY < posyi6 + tamiy6) {
      estado = 9
    }
    if (mouseX > posxi7 && mouseX < posxi7 + tamix7 && mouseY > posyi7 && mouseY < posyi7 + tamiy7) {
      estado = 9
    }
    if (mouseX > posxi8 && mouseX < posxi8 + tamix8 && mouseY > posyi8 && mouseY < posyi8 + tamiy8) {
      estado = 9
    }
    if (mouseX > posxi9 && mouseX < posxi9 + tamix9 && mouseY > posyi9 && mouseY < posyi9 + tamiy9) {
      estado = 9
    }

    zanaa.dibujarse()
    zanaa.moverse()
    if (dist(mouseX, mouseY, zanaa.x, zanaa.y) < 12) {
      estado = 9
    }

    for (var i = 0; i < miEjercito.length; i = i + 1) {
      miEjercito[i].dibujarse()
      miEjercito[i].moverse()
      if (dist(mouseX, mouseY, miEjercito[i].x, miEjercito[i].y) < 12) {
        estado = 9
      }
    }
    image(mispapas, 30, 78, 50, 50)
    image(mioso, x - 60 / 2, y - 60 / 2, tam, tam)
    if (dist(mouseX, mouseY, 37, 82) < 20) {
      estado = 8
    }
  }
  if (estado == 8) {
    background(255)
    textFont("Shadows Into Light");
    textSize(150)
    stroke(0)
    fill(0)
    text("Ganaste!!!", 250, 370)
    image(mioso, 350, 500, 300, 350)
    image(mihamburguesa, 270, 315, 25, 25)
    image(mipizza, 425, 315, 25, 25)
    image(mispapas, 703, 320, 25, 25)
  }
  if (estado == 9) {
    background(255)
    textFont("Shadows Into Light");
    textSize(150)
    stroke(0)
    fill(0)
    text("Perdiste", 260, 300)
    text(":/", 460, 450)
    image(mioso, 350, -200, 300, 350)
    image(mizanahoria, 473, 490, 25, 25)
  }

  // if se toca la comida que quiere, se pasa al siguiente nivel que es mas dificil
  // hacer que las verduras caigan del cielo y hay que esquivarlas
  // que el oso se mueva con el mouse sin tocar las verduras que caen 
}

function mousePressed() {
  if (estado == 8) {
    estado = 0
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
  if (estado == 9) {
    estado = 0
  }
}


function mouseDragged() {

  //revisa si la posición del mouse es cercana a la posicion de la comida 
  if (dist(mouseX, mouseY, x, y) < tam / 2) {

    //actualiza la posicion del oso con la posición del mouse
    x = mouseX;
    y = mouseY;
  }
}

function carrot(miX, miY) {
  //caracteristicas
  this.x = miX
  this.y = miY
  this.estaVivo = true
  //habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      image(mizanahoria, this.x, this.y, 50, 80)
    }
    this.moverse = function() {
      this.x = this.x + random(0, 0);
      this.y = this.y + random(-20, 20);
    }
  }

  this.morirse = function() {
    this.estaVivo = false
  }
}