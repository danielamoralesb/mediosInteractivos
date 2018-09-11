//primera linea de triangulos del primer cuadrado 
var tritri = 0
var fondo = 15
function setup() {
  createCanvas(360,360);
  background(255,251,248);
  noStroke ()
  fill (0,0,0)
  triangle (tritri,0,0,fondo,15,0)
  tritri = 45
  triangle (tritri,0,45,fondo,60,0)
  tritri = 60
  triangle (tritri,0,60,fondo,75,0)
  tritri = 105
  triangle (tritri,0,105,fondo,120,0)
  //triangulos volteados
  tritri = 30
  triangle (tritri,0,30,fondo,15,fondo)
  tritri = 90
  triangle (tritri,0,90,fondo,75,fondo)
  tritri = 105
  triangle (tritri,0,105,fondo,90,fondo)
  //segunda linea 
  tritri = 0
  fondo = 30
  triangle (tritri,15,0,fondo,15,15)
  tritri =15
  triangle (tritri,15,15,fondo,30,15)
  tritri = 60
  triangle (tritri,15, 60,fondo,75,15)
  tritri=75
  triangle (tritri,15,75,fondo,90,15)
  //volteados
  tritri =45
  triangle (tritri,15,45,fondo,30,fondo)
  tritri =60
  triangle (tritri,15,60,fondo,45,fondo)
  tritri = 105
  triangle (tritri,15,105,fondo,90,fondo)
  tritri =120
  triangle (tritri,15,120,fondo,105,fondo)
  
  //tercera linea
  tritri = 15
  fondo = 45
  triangle (tritri,30,15,fondo,0,fondo)
  tritri = 60
  triangle (tritri,30,60,fondo,45,fondo)
  tritri = 75
  triangle (tritri,30,75,fondo,60,fondo)
  tritri=120
  triangle (tritri,30,120,fondo,105,fondo)
  // volteados
  tritri = 15
  triangle (tritri,30,15,fondo,30,30)
  tritri = 30
  triangle (tritri,30,30,fondo,45,30)
  tritri =75
  triangle (tritri,30,75,fondo,90,30)
  tritri=90
  triangle (tritri,30,90,fondo,105,30)
  // cuarta fila
  tritri = 15
  fondo = 60
  triangle (tritri,45,15,fondo,0,fondo)
  tritri = 30
  triangle (tritri,45,30,fondo,15,fondo)
  tritri = 75
  triangle (tritri,45,75,fondo,60,fondo)
  tritri=90
  triangle (tritri,45,90,fondo,75,fondo)
  //volteados
  tritri = 30
  triangle (tritri,45,30,fondo,45,45)
  tritri = 45
  triangle (tritri, 45,45,fondo,60,45)
  tritri =90
  triangle (tritri,45,90,fondo,105,45)
  tritri =105
  triangle (tritri,45,105,fondo,120,45)
  
  // filas 5-8 usando mismo codigo pero cambiando valor y y valor fondo
  
  //linea 5
  tritri = 0
  fondo=75
  triangle (tritri,60,0,fondo,15,60)
  tritri = 45
  triangle (tritri,60,45,fondo,60,60)
  tritri = 60
  triangle (tritri,60,60,fondo,75,60)
  tritri = 105
  triangle (tritri,60,105,fondo,120,60)
  //triangulos volteados
  tritri = 30
  triangle (tritri,60,30,fondo,15,fondo)
  tritri = 90
  triangle (tritri,60,90,fondo,75,fondo)
  tritri = 105
  triangle (tritri,60,105,fondo,90,fondo)
  //linea 6
  tritri = 0
  fondo = 90
  triangle (tritri,75,0,fondo,15,75)
  tritri =15
  triangle (tritri,75,15,fondo,30,75)
  tritri = 60
  triangle (tritri,75, 60,fondo,75,75)
  tritri=75
  triangle (tritri,75,75,fondo,90,75)
  //volteados
  tritri =45
  triangle (tritri,75,45,fondo,30,fondo)
  tritri =60
  triangle (tritri,75,60,fondo,45,fondo)
  tritri = 105
  triangle (tritri,75,105,fondo,90,fondo)
  tritri =120
  triangle (tritri,75,120,fondo,105,fondo)
  
  //linea 7
  tritri = 15
  fondo = 105
  triangle (tritri,90,15,fondo,0,fondo)
  tritri = 60
  triangle (tritri,90,60,fondo,45,fondo)
  tritri = 75
  triangle (tritri,90,75,fondo,60,fondo)
  tritri=120
  triangle (tritri,90,120,fondo,105,fondo)
  // volteados
  tritri = 15
  triangle (tritri,90,15,fondo,30,90)
  tritri = 30
  triangle (tritri,90,30,fondo,45,90)
  tritri =75
  triangle (tritri,90,75,fondo,90,90)
  tritri=90
  triangle (tritri,90,90,fondo,105,90)
  // linea 8
  tritri = 15
  fondo = 120
  triangle (tritri,105,15,fondo,0,fondo)
  tritri = 30
  triangle (tritri,105,30,fondo,15,fondo)
  tritri = 75
  triangle (tritri,105,75,fondo,60,fondo)
  tritri=90
  triangle (tritri,105,90,fondo,75,fondo)
  //volteados
  tritri = 30
  triangle (tritri,105,30,fondo,45,105)
  tritri = 45
  triangle (tritri, 105,45,fondo,60,105)
  tritri =90
  triangle (tritri,105,90,fondo,105,105)
  tritri =105
  triangle (tritri,105,105,fondo,120,105)
  
  //cuadrado numero 2 (esquina inferior izquierda) copiando y pegando
  //cambiando valor de y y de fondo
  //primera linea
  tritri = 0
  fondo = 255
  triangle (tritri,240,0,fondo,15,240)
  tritri = 45
  triangle (tritri,240,45,fondo,60,240)
  tritri = 60
  triangle (tritri,240,60,fondo,75,240)
  tritri = 105
  triangle (tritri,240,105,fondo,120,240)
  //triangulos volteados
  tritri = 30
  triangle (tritri,240,30,fondo,15,fondo)
  tritri = 90
  triangle (tritri,240,90,fondo,75,fondo)
  tritri = 105
  triangle (tritri,240,105,fondo,90,fondo)
  //segunda linea 
  tritri = 0
  fondo = 270
  triangle (tritri,255,0,fondo,15,255)
  tritri =15
  triangle (tritri,255,15,fondo,30,255)
  tritri = 60
  triangle (tritri,255, 60,fondo,75,255)
  tritri=75
  triangle (tritri,255,75,fondo,90,255)
  //volteados
  tritri =45
  triangle (tritri,255,45,fondo,30,fondo)
  tritri =60
  triangle (tritri,255,60,fondo,45,fondo)
  tritri = 105
  triangle (tritri,255,105,fondo,90,fondo)
  tritri =120
  triangle (tritri,255,120,fondo,105,fondo)
  
  //tercera linea
  tritri = 15
  fondo = 285
  triangle (tritri,270,15,fondo,0,fondo)
  tritri = 60
  triangle (tritri,270,60,fondo,45,fondo)
  tritri = 75
  triangle (tritri,270,75,fondo,60,fondo)
  tritri=120
  triangle (tritri,270,120,fondo,105,fondo)
  // volteados
  tritri = 15
  triangle (tritri,270,15,fondo,30,270)
  tritri = 30
  triangle (tritri,270,30,fondo,45,270)
  tritri =75
  triangle (tritri,270,75,fondo,90,270)
  tritri=90
  triangle (tritri,270,90,fondo,105,270)
  // cuarta fila
  tritri = 15
  fondo = 300
  triangle (tritri,285,15,fondo,0,fondo)
  tritri = 30
  triangle (tritri,285,30,fondo,15,fondo)
  tritri = 75
  triangle (tritri,285,75,fondo,60,fondo)
  tritri=90
  triangle (tritri,285,90,fondo,75,fondo)
  //volteados
  tritri = 30
  triangle (tritri,285,30,fondo,45,285)
  tritri = 45
  triangle (tritri, 285,45,fondo,60,285)
  tritri =90
  triangle (tritri,285,90,fondo,105,285)
  tritri =105
  triangle (tritri,285,105,fondo,120,285)
  
  // filas 5-8 usando mismo codigo pero cambiando valor y y valor fondo
  
  //linea 5
  tritri = 0
  fondo=315
  triangle (tritri,300,0,fondo,15,300)
  tritri = 45
  triangle (tritri,300,45,fondo,60,300)
  tritri = 60
  triangle (tritri,300,60,fondo,75,300)
  tritri = 105
  triangle (tritri,300,105,fondo,120,300)
  //triangulos volteados
  tritri = 30
  triangle (tritri,300,30,fondo,15,fondo)
  tritri = 90
  triangle (tritri,300,90,fondo,75,fondo)
  tritri = 105
  triangle (tritri,300,105,fondo,90,fondo)
  //linea 6
  tritri = 0
  fondo = 330
  triangle (tritri,315,0,fondo,15,315)
  tritri =15
  triangle (tritri,315,15,fondo,30,315)
  tritri = 60
  triangle (tritri,315, 60,fondo,75,315)
  tritri=75
  triangle (tritri,315,75,fondo,90,315)
  //volteados
  tritri =45
  triangle (tritri,315,45,fondo,30,fondo)
  tritri =60
  triangle (tritri,315,60,fondo,45,fondo)
  tritri = 105
  triangle (tritri,315,105,fondo,90,fondo)
  tritri =120
  triangle (tritri,315,120,fondo,105,fondo)
  
  //linea 7
  tritri = 15
  fondo = 345
  triangle (tritri,330,15,fondo,0,fondo)
  tritri = 60
  triangle (tritri,330,60,fondo,45,fondo)
  tritri = 75
  triangle (tritri,330,75,fondo,60,fondo)
  tritri=120
  triangle (tritri,330,120,fondo,105,fondo)
  // volteados
  tritri = 15
  triangle (tritri,330,15,fondo,30,330)
  tritri = 30
  triangle (tritri,330,30,fondo,45,330)
  tritri =75
  triangle (tritri,330,75,fondo,90,330)
  tritri=90
  triangle (tritri,330,90,fondo,105,330)
  // linea 8
  tritri = 15
  fondo = 360
  triangle (tritri,345,15,fondo,0,fondo)
  tritri = 30
  triangle (tritri,345,30,fondo,15,fondo)
  tritri = 75
  triangle (tritri,345,75,fondo,60,fondo)
  tritri=90
  triangle (tritri,345,90,fondo,75,fondo)
  //volteados
  tritri = 30
  triangle (tritri,345,30,fondo,45,345)
  tritri = 45
  triangle (tritri, 345,45,fondo,60,345)
  tritri =90
  triangle (tritri,345,90,fondo,105,345)
  tritri =105
  triangle (tritri,345,105,fondo,120,345)
  
  //copiar segundo cuadrado y cambiando los valores de x y tritri
  
  //tercer cuadrado 
  
  tritri = 240
  fondo = 255
  triangle (tritri,240,240,fondo,255,240)
  tritri = 285
  triangle (tritri,240,285,fondo,300,240)
  tritri = 300
  triangle (tritri,240,300,fondo,315,240)
  tritri = 345
  triangle (tritri,240,345,fondo,360,240)
  //triangulos volteados
  tritri = 270
  triangle (tritri,240,270,fondo,255,fondo)
  tritri = 330
  triangle (tritri,240,330,fondo,315,fondo)
  tritri = 345
  triangle (tritri,240,345,fondo,330,fondo)
  //segunda linea 
  tritri = 240
  fondo = 270
  triangle (tritri,255,240,fondo,255,255)
  tritri =255
  triangle (tritri,255,255,fondo,270,255)
  tritri =300
  triangle (tritri,255,300,fondo,315,255)
  tritri=315
  triangle (tritri,255,315,fondo,330,255)
  //volteados
  tritri =285
  triangle (tritri,255,285,fondo,270,fondo)
  tritri =300
  triangle (tritri,255,300,fondo,285,fondo)
  tritri = 345
  triangle (tritri,255,345,fondo,330,fondo)
  tritri =360
  triangle (tritri,255,360,fondo,345,fondo)
  
  //tercera linea
  tritri = 255
  fondo = 285
  triangle (tritri,270,255,fondo,240,fondo)
  tritri = 300
  triangle (tritri,270,300,fondo,285,fondo)
  tritri = 315
  triangle (tritri,270,315,fondo,300,fondo)
  tritri=360
  triangle (tritri,270,360,fondo,345,fondo)
  //volteados
  tritri = 255
  triangle (tritri,270,255,fondo,270,270)
  tritri = 270
  triangle (tritri,270,270,fondo,285,270)
  tritri =315
  triangle (tritri,270,315,fondo,330,270)
  tritri=330
  triangle (tritri,270,330,fondo,345,270)
  // cuarta fila
  tritri = 255
  fondo = 300
  triangle (tritri,285,255,fondo,240,fondo)
  tritri = 270
  triangle (tritri,285,270,fondo,255,fondo)
  tritri = 315
  triangle (tritri,285,315,fondo,300,fondo)
  tritri=330
  triangle (tritri,285,330,fondo,315,fondo)
   //volteados
  tritri = 270
  triangle (tritri,285,270,fondo,285,285)
  tritri = 285
  triangle (tritri, 285,285,fondo,300,285)
  tritri =330
  triangle (tritri,285,330,fondo,345,285)
  tritri =345
  triangle (tritri,285,345,fondo,360,285)
  
  // filas 5-8 usando mismo codigo pero cambiando valor y y valor fondo
  
  //linea 5
  tritri = 240
  fondo=315
  triangle (tritri,300,240,fondo,255,300)
  tritri = 285
  triangle (tritri,300,285,fondo,300,300)
  tritri = 300
  triangle (tritri,300,300,fondo,315,300)
  tritri = 345
  triangle (tritri,300,345,fondo,360,300)
  //triangulos volteados
  tritri = 270
  triangle (tritri,300,270,fondo,255,fondo)
  tritri = 330
  triangle (tritri,300,330,fondo,315,fondo)
  tritri = 345
  triangle (tritri,300,345,fondo,330,fondo)
  //linea 6
  tritri = 240
  fondo = 330
  triangle (tritri,315,240,fondo,255,315)
  tritri =255
  triangle (tritri,315,255,fondo,270,315)
  tritri = 300
  triangle (tritri,315, 300,fondo,315,315)
  tritri=315
  triangle (tritri,315,315,fondo,330,315)
  //volteados
  tritri =285
  triangle (tritri,315,285,fondo,270,fondo)
  tritri =300
  triangle (tritri,315,300,fondo,285,fondo)
  tritri = 345
  triangle (tritri,315,345,fondo,330,fondo)
  tritri =360
  triangle (tritri,315,360,fondo,345,fondo)
  
  //linea 7
  tritri = 255
  fondo = 345
  triangle (tritri,330,255,fondo,240,fondo)
  tritri = 300
  triangle (tritri,330,300,fondo,285,fondo)
  tritri = 315
  triangle (tritri,330,315,fondo,300,fondo)
  tritri=360
  triangle (tritri,330,360,fondo,345,fondo)
  //volteados
  tritri = 255
  triangle (tritri,330,255,fondo,270,330)
  tritri = 270
  triangle (tritri,330,270,fondo,285,330)
  tritri =315
  triangle (tritri,330,315,fondo,330,330)
  tritri=330
  triangle (tritri,330,330,fondo,345,330)
    // linea 8
  tritri = 255
  fondo = 360
  triangle (tritri,345,255,fondo,240,fondo)
  tritri = 270
  triangle (tritri,345,270,fondo,255,fondo)
  tritri = 315
  triangle (tritri,345,315,fondo,300,fondo)
  tritri=330
  triangle (tritri,345,330,fondo,315,fondo)
  //volteados
  tritri = 270
  triangle (tritri,345,270,fondo,285,345)
  tritri = 285
  triangle (tritri, 345,285,fondo,300,345)
  tritri =330
  triangle (tritri,345,330,fondo,345,345)
  tritri =345
  triangle (tritri,345,345,fondo,360,345)

  //copiar primer cuadrado y cambiar valores x y de tritri
  //cambiar fill
  //tercer cuadrado
  fill (245,195,64)
  tritri = 240
  fondo =15
   triangle (tritri,0,240,fondo,255,0)
  tritri = 285
  triangle (tritri,0,285,fondo,300,0)
  tritri = 300
  triangle (tritri,0,300,fondo,315,0)
  tritri = 345
  triangle (tritri,0,345,fondo,360,0)
  //triangulos volteados
  tritri = 270
  triangle (tritri,0,270,fondo,255,fondo)
  tritri = 330
  triangle (tritri,0,330,fondo,315,fondo)
  tritri = 345
  triangle (tritri,0,345,fondo,330,fondo)
  //segunda linea 
  tritri = 240
  fondo = 30
  triangle (tritri,15,240,fondo,255,15)
  tritri =255
  triangle (tritri,15,255,fondo,270,15)
  tritri = 300
  triangle (tritri,15, 300,fondo,315,15)
  tritri=315
  triangle (tritri,15,315,fondo,330,15)
  //volteados
  tritri =285
  triangle (tritri,15,285,fondo,270,fondo)
  tritri =300
  triangle (tritri,15,300,fondo,285,fondo)
  tritri = 345
  triangle (tritri,15,345,fondo,330,fondo)
  tritri =360
  triangle (tritri,15,360,fondo,345,fondo)
  
  //tercera linea
  tritri = 255
  fondo = 45
  triangle (tritri,30,255,fondo,240,fondo)
  tritri = 300
  triangle (tritri,30,300,fondo,285,fondo)
  tritri = 315
  triangle (tritri,30,315,fondo,300,fondo)
  tritri=360
  triangle (tritri,30,360,fondo,345,fondo)
  // volteados
  tritri = 255
  triangle (tritri,30,255,fondo,270,30)
  tritri = 270
  triangle (tritri,30,270,fondo,285,30)
  tritri =315
  triangle (tritri,30,315,fondo,330,30)
  tritri=330
  triangle (tritri,30,330,fondo,345,30)
  // cuarta fila
  tritri = 255
  fondo = 60
  triangle (tritri,45,255,fondo,240,fondo)
  tritri = 270
  triangle (tritri,45,270,fondo,255,fondo)
  tritri = 315
  triangle (tritri,45,315,fondo,300,fondo)
  tritri= 330
  triangle (tritri,45,330,fondo,315,fondo)
  //volteados
  tritri = 270
  triangle (tritri,45,270,fondo,285,45)
  tritri = 285
  triangle (tritri, 45,285,fondo,300,45)
  tritri =330
  triangle (tritri,45,330,fondo,345,45)
  tritri =345
  triangle (tritri,45,345,fondo,360,45)
  
  // filas 5-8 usando mismo codigo pero cambiando valor y y valor fondo
  
  //linea 5
  tritri = 240
  fondo=75
  triangle (tritri,60,240,fondo,255,60)
  tritri = 285
  triangle (tritri,60,285,fondo,300,60)
  tritri = 300
  triangle (tritri,60,300,fondo,315,60)
  tritri = 345
  triangle (tritri,60,345,fondo,360,60)
  //triangulos volteados
  tritri = 270
  triangle (tritri,60,270,fondo,255,fondo)
  tritri = 330
  triangle (tritri,60,330,fondo,315,fondo)
  tritri = 345
  triangle (tritri,60,345,fondo,330,fondo)
  //linea 6
  tritri = 240
  fondo = 90
  triangle (tritri,75,240,fondo,255,75)
  tritri =255
  triangle (tritri,75,255,fondo,270,75)
  tritri = 300
  triangle (tritri,75, 300,fondo,315,75)
  tritri=315
  triangle (tritri,75,315,fondo,330,75)
  //volteados
  tritri =285
  triangle (tritri,75,285,fondo,270,fondo)
  tritri =300
  triangle (tritri,75,300,fondo,285,fondo)
  tritri = 345
  triangle (tritri,75,345,fondo,330,fondo)
  tritri =360
  triangle (tritri,75,360,fondo,345,fondo)
  
  //linea 7
  tritri = 255
  fondo = 105
  triangle (tritri,90,255,fondo,240,fondo)
  tritri = 300
  triangle (tritri,90,300,fondo,285,fondo)
  tritri = 315
  triangle (tritri,90,315,fondo,300,fondo)
  tritri=360
  triangle (tritri,90,360,fondo,345,fondo)
  // volteados
  tritri = 255
  triangle (tritri,90,255,fondo,270,90)
  tritri = 270
  triangle (tritri,90,270,fondo,285,90)
  tritri =315
  triangle (tritri,90,315,fondo,330,90)
  tritri=330
  triangle (tritri,90,330,fondo,345,90)
  // linea 8
  tritri = 255
  fondo = 120
  triangle (tritri,105,255,fondo,240,fondo)
  tritri = 270
  triangle (tritri,105,270,fondo,255,fondo)
  tritri = 315
  triangle (tritri,105,315,fondo,300,fondo)
  tritri=330
  triangle (tritri,105,330,fondo,315,fondo)
  //volteados
  tritri = 270
  triangle (tritri,105,270,fondo,285,105)
  tritri = 285
  triangle (tritri, 105,285,fondo,300,105)
  tritri =330
  triangle (tritri,105,330,fondo,345,105)
  tritri =345
  triangle (tritri,105,345,fondo,360,105)
  
  //cuadrado 5 
  //linea 1
  fill (0)
  tritri = 0
  fondo =135
  triangle (tritri,120,0,fondo,15,fondo)
  tritri = 15
  triangle (tritri,120,15,fondo,30,fondo)
  tritri = 60
  triangle (tritri,120,60,fondo,75,fondo)
  tritri = 75
  triangle (tritri,120,75,fondo,90,fondo)
  //volteados
  tritri = 45
  triangle (tritri,120,45,fondo, 30,120)
  tritri = 60
  triangle (tritri, 120,60,fondo,45,120)
  tritri = 105
  triangle (tritri, 120,105,fondo,90,120)
  tritri = 120
  triangle (tritri, 120, 120,fondo,105,120)
  //sengunda linea
  tritri = 0
  fondo = 150
  triangle (tritri,135,0,fondo,15,fondo)
  tritri=45
  triangle (tritri,135,45,fondo,60,fondo)
  tritri = 60
  triangle (tritri,135,60,fondo,75,fondo)
  tritri =105 
  triangle (tritri,135,105,fondo,120,fondo)
  //volteados
  tritri= 30
  triangle (tritri,135,30,fondo,15,135)
  tritri =45
  triangle (tritri,135,45,fondo,30,135)
  tritri =90
  triangle (tritri,135,90,fondo,75,135)
  tritri = 105
  triangle (tritri,135,105,fondo,90,135)
  //tercera linea
  tritri =15
  fondo =165
  triangle (tritri,150,15,fondo,0,150)
  tritri=30
  triangle (tritri,150,30,fondo,15,150)
  tritri = 75
  triangle (tritri,150,75,fondo,60,150)
  tritri =90
  triangle (tritri,150,90,fondo,75,150)
  //volteados
  tritri =30
  triangle (tritri,150,30,fondo,45,fondo)
  tritri =45
  triangle (tritri,150,45,fondo,60,fondo)
  tritri =90
  triangle (tritri,150,90,fondo,105,fondo)
  tritri =105
  triangle (tritri,150,105,fondo,120,fondo)
  //linea 4
  tritri=15
  fondo=180
  triangle (tritri,165,15,fondo,0,165)
  tritri = 60
  triangle (tritri,165,60,fondo,45,165)
  tritri = 75
  triangle (tritri,165,75,fondo,60,165)
  tritri =120
  triangle (tritri,165,120,fondo,105,165)
  //volteados
  tritri = 15
  triangle (tritri,165,15,fondo,30,fondo)
  tritri =30
  triangle (tritri,165,30,fondo,45,fondo)
  tritri =75
  triangle (tritri,165,75,fondo,90,fondo)
  tritri=90
  triangle (tritri,165,90,fondo,105,fondo)
  
  //linea 5
   tritri = 0
  fondo =195
  triangle (tritri,180,0,fondo,15,fondo)
  tritri = 15
  triangle (tritri,180,15,fondo,30,fondo)
  tritri = 60
  triangle (tritri,180,60,fondo,75,fondo)
  tritri = 75
  triangle (tritri,180,75,fondo,90,fondo)
  //volteados
  tritri = 45
  triangle (tritri,180,45,fondo, 30,180)
  tritri = 60
  triangle (tritri, 180,60,fondo,45,180)
  tritri = 105
  triangle (tritri, 180,105,fondo,90,180)
  tritri = 120
  triangle (tritri, 180, 120,fondo,105,180)
  //sexta linea
  tritri = 0
  fondo = 210
  triangle (tritri,195,0,fondo,15,fondo)
  tritri=45
  triangle (tritri,195,45,fondo,60,fondo)
  tritri = 60
  triangle (tritri,195,60,fondo,75,fondo)
  tritri =105 
  triangle (tritri,195,105,fondo,120,fondo)
  //volteados
  tritri= 30
  triangle (tritri,195,30,fondo,15,195)
  tritri =45
  triangle (tritri,195,45,fondo,30,195)
  tritri =90
  triangle (tritri,195,90,fondo,75,195)
  tritri = 105
  triangle (tritri,195,105,fondo,90,195)
  //septima linea
  tritri =15
  fondo =225
  triangle (tritri,210,15,fondo,0,210)
  tritri=30
  triangle (tritri,210,30,fondo,15,210)
  tritri = 75
  triangle (tritri,210,75,fondo,60,210)
  tritri =90
  triangle (tritri,210,90,fondo,75,210)
  //volteados
  tritri =30
  triangle (tritri,210,30,fondo,45,fondo)
  tritri =45
  triangle (tritri,210,45,fondo,60,fondo)
  tritri =90
  triangle (tritri,210,90,fondo,105,fondo)
  tritri =105
  triangle (tritri,210,105,fondo,120,fondo)
  //linea 8
  tritri=15
  fondo=240
  triangle (tritri,225,15,fondo,0,225)
  tritri = 60
  triangle (tritri,225,60,fondo,45,225)
  tritri = 75
  triangle (tritri,225,75,fondo,60,225)
  tritri =120
  triangle (tritri,225,120,fondo,105,225)
  //volteados
  tritri = 15
  triangle (tritri,225,15,fondo,30,fondo)
  tritri =30
  triangle (tritri,225,30,fondo,45,fondo)
  tritri =75
  triangle (tritri,225,75,fondo,90,fondo)
  tritri=90
  triangle (tritri,225,90,fondo,105,fondo)
  
  //cuadrado 6
  
  //copiar cuadrado 5 y cambiar valor de x y tritri
  
  fill (245,195,64)
   tritri = 240
  fondo =135
  triangle (tritri,120,240,fondo,255,fondo)
  tritri = 255
  triangle (tritri,120,255,fondo,270,fondo)
  tritri = 315
  triangle (tritri,120,315,fondo,330,fondo)
  tritri = 300
  triangle (tritri,120,300,fondo,315,fondo)
  //volteados
  tritri = 285
  triangle (tritri,120,285,fondo, 270,120)
  tritri = 300
  triangle (tritri, 120,300,fondo,285,120)
  tritri = 345
  triangle (tritri, 120,345,fondo,330,120)
  tritri = 360
  triangle (tritri, 120, 360,fondo,345,120)
  //sengunda linea
  tritri = 240
  fondo = 150
  triangle (tritri,135,240,fondo,255,fondo)
  tritri=285
  triangle (tritri,135,285,fondo,300,fondo)
  tritri = 300
  triangle (tritri,135,300,fondo,315,fondo)
  tritri =345 
  triangle (tritri,135,345,fondo,360,fondo)
  //volteados
  tritri= 270
  triangle (tritri,135,270,fondo,255,135)
  tritri =285
  triangle (tritri,135,285,fondo,270,135)
  tritri =330
  triangle (tritri,135,330,fondo,315,135)
  tritri = 345
  triangle (tritri,135,345,fondo,330,135)
  //tercera linea
  tritri =255
  fondo =165
  triangle (tritri,150,255,fondo,240,150)
  tritri=270
  triangle (tritri,150,270,fondo,255,150)
  tritri = 315
  triangle (tritri,150,315,fondo,300,150)
  tritri =330
  triangle (tritri,150,330,fondo,315,150)
  //volteados
  tritri =270
  triangle (tritri,150,270,fondo,285,fondo)
  tritri =285
  triangle (tritri,150,285,fondo,300,fondo)
  tritri =330
  triangle (tritri,150,330,fondo,345,fondo)
  tritri =345
  triangle (tritri,150,345,fondo,360,fondo)
  //linea 4
  tritri=255
  fondo=180
  triangle (tritri,165,255,fondo,240,165)
  tritri = 300
  triangle (tritri,165,300,fondo,285,165)
  tritri = 315
  triangle (tritri,165,315,fondo,300,165)
  tritri =360
  triangle (tritri,165,360,fondo,345,165)
  //volteados
  tritri = 255
  triangle (tritri,165,255,fondo,270,fondo)
  tritri =270
  triangle (tritri,165,270,fondo,285,fondo)
  tritri =315
  triangle (tritri,165,315,fondo,330,fondo)
  tritri=330
  triangle (tritri,165,330,fondo,345,fondo)
  
  //linea 5
   tritri = 240
  fondo =195
  triangle (tritri,180,240,fondo,255,fondo)
  tritri = 255
  triangle (tritri,180,255,fondo,270,fondo)
  tritri = 300
  triangle (tritri,180,300,fondo,315,fondo)
  tritri = 315
  triangle (tritri,180,315,fondo,330,fondo)
  //volteados
  tritri = 285
  triangle (tritri,180,285,fondo, 270,180)
  tritri = 300
  triangle (tritri, 180,300,fondo,285,180)
  tritri = 345
  triangle (tritri, 180,345,fondo,330,180)
  tritri = 360
  triangle (tritri, 180, 360,fondo,345,180)
  //sexta linea
  tritri = 240
  fondo = 210
  triangle (tritri,195,240,fondo,255,fondo)
  tritri=285
  triangle (tritri,195,285,fondo,300,fondo)
  tritri = 300
  triangle (tritri,195,300,fondo,315,fondo)
  tritri =345 
  triangle (tritri,195,345,fondo,360,fondo)
  //volteados
  tritri= 270
  triangle (tritri,195,270,fondo,255,195)
  tritri =285
  triangle (tritri,195,285,fondo,270,195)
  tritri =330
  triangle (tritri,195,330,fondo,315,195)
  tritri = 345
  triangle (tritri,195,345,fondo,330,195)
  //septima linea
  tritri =255
  fondo =225
  triangle (tritri,210,255,fondo,240,210)
  tritri=270
  triangle (tritri,210,270,fondo,255,210)
  tritri = 315
  triangle (tritri,210,315,fondo,300,210)
  tritri =330
  triangle (tritri,210,330,fondo,315,210)
  //volteados
  tritri =270
  triangle (tritri,210,270,fondo,285,fondo)
  tritri =285
  triangle (tritri,210,285,fondo,300,fondo)
  tritri =330
  triangle (tritri,210,330,fondo,345,fondo)
  tritri =345
  triangle (tritri,210,345,fondo,360,fondo)
  //linea 8
  tritri=255
  fondo=240
  triangle (tritri,225,255,fondo,240,225)
  tritri = 300
  triangle (tritri,225,300,fondo,285,225)
  tritri = 315
  triangle (tritri,225,315,fondo,300,225)
  tritri =360
  triangle (tritri,225,360,fondo,345,225)
  //volteados
  tritri = 255
  triangle (tritri,225,255,fondo,270,fondo)
  tritri =270
  triangle (tritri,225,270,fondo,285,fondo)
  tritri =315
  triangle (tritri,225,315,fondo,330,fondo)
  tritri=330
  triangle (tritri,225,330,fondo,345,fondo)
  
  //cuadrado 7
  fill (245,195,64)
  fondo =15
  tritri = 120
  triangle (tritri,0,120,fondo,135,fondo)
  tritri =165
  triangle (tritri,0,165,fondo,180,fondo)
  tritri=180
  triangle (tritri,0,180,fondo,195,fondo)
  tritri = 225
  triangle (tritri,0,225,fondo,240,fondo)
  //volteados
  tritri = 150
  triangle (tritri,0,150,fondo,135,0)
  tritri =165
  triangle (tritri, 0,165,fondo,150,0)
  tritri =210
  triangle (tritri,0,210,fondo,195,0)
  tritri = 225
  triangle (tritri,0,225,fondo,210,0)
  //segunda fila
  tritri= 135
  fondo =30
  triangle (tritri,15,135,fondo,120,15)
  tritri = 150
  triangle (tritri,15,150,fondo,135,15)
  tritri = 195
  triangle (tritri,15,195,fondo,180,15)
  tritri = 210
  triangle (tritri,15,210,fondo,195,15)
  //volteados
  tritri =150
  triangle (tritri, 15,150,fondo,165,fondo)
  tritri =165
  triangle (tritri,15,165,fondo,180,fondo)
  tritri =225
  triangle (tritri,15,225,fondo,240,fondo)
  tritri =210
  triangle (tritri,15,210,fondo,225,fondo)
  //linea 3
  tritri =135
  fondo = 45
  triangle (tritri,30,135,fondo,120,30)
  tritri =180
  triangle (tritri,30,180,fondo,165,30)
  tritri =195
  triangle (tritri,30,195,fondo,180,30)
  tritri =240
  triangle (tritri,30,240,fondo,225,30)
  //volteados
  tritri = 135
  triangle (tritri,30,135,fondo,150,fondo)
  tritri = 150
  triangle (tritri,30,150,fondo,165,fondo)
  tritri =195
  triangle (tritri,30,195,fondo,210,fondo)
  tritri =210
  triangle (tritri,30,210,fondo,225,fondo)
  //linea 4
  tritri =120
  fondo=60
  triangle (tritri,45,120,fondo,135,fondo)
  tritri = 135
  triangle (tritri, 45,135,fondo,150,fondo)
  tritri = 195
  triangle (tritri,45,195,fondo,210,fondo)
  tritri =180
  triangle (tritri,45,180,fondo,195,fondo)
  //volteados
  tritri =165
  triangle (tritri,45,165,fondo,150,45)
  tritri = 180
  triangle (tritri,45,180,fondo,165,45)
  tritri = 225
  triangle (tritri,45,225,fondo,210,45)
  tritri = 240
  triangle (tritri,45,240,fondo,225,45)
  //fila 5
  fondo = 75
  tritri = 120
  triangle (tritri,60,120,fondo,135,fondo)
  tritri =165
  triangle (tritri,60,165,fondo,180,fondo)
  tritri=180
  triangle (tritri,60,180,fondo,195,fondo)
  tritri = 225
  triangle (tritri,60,225,fondo,240,fondo)
  //volteados
  tritri = 150
  triangle (tritri,60,150,fondo,135,60)
  tritri =165
  triangle (tritri, 60,165,fondo,150,60)
  tritri =210
  triangle (tritri,60,210,fondo,195,60)
  tritri = 225
  triangle (tritri,60,225,fondo,210,60)
  //fila 6
  tritri= 135
  fondo =90
  triangle (tritri,75,135,fondo,120,75)
  tritri = 150
  triangle (tritri,75,150,fondo,135,75)
  tritri = 195
  triangle (tritri,75,195,fondo,180,75)
  tritri = 210
  triangle (tritri,75,210,fondo,195,75)
  //volteados
  tritri =150
  triangle (tritri, 75,150,fondo,165,fondo)
  tritri =165
  triangle (tritri,75,165,fondo,180,fondo)
  tritri =225
  triangle (tritri,75,225,fondo,240,fondo)
  tritri =210
  triangle (tritri,75,210,fondo,225,fondo)
  //linea 7
  tritri =135
  fondo = 105
  triangle (tritri,90,135,fondo,120,90)
  tritri =180
  triangle (tritri,90,180,fondo,165,90)
  tritri =195
  triangle (tritri,90,195,fondo,180,90)
  tritri =240
  triangle (tritri,90,240,fondo,225,90)
  //volteados
  tritri = 135
  triangle (tritri,90,135,fondo,150,fondo)
  tritri = 150
  triangle (tritri,90,150,fondo,165,fondo)
  tritri =195
  triangle (tritri,90,195,fondo,210,fondo)
  tritri =210
  triangle (tritri,90,210,fondo,225,fondo)
  //linea 8
  tritri =120
  fondo=120
  triangle (tritri,105,120,fondo,135,fondo)
  tritri = 135
  triangle (tritri, 105,135,fondo,150,fondo)
  tritri = 195
  triangle (tritri,105,195,fondo,210,fondo)
  tritri =180
  triangle (tritri,105,180,fondo,195,fondo)
  //volteados
  tritri =165
  triangle (tritri,105,165,fondo,150,105)
  tritri = 180
  triangle (tritri,105,180,fondo,165,105)
  tritri = 225
  triangle (tritri,105,225,fondo,210,105)
  tritri = 240
  triangle (tritri,105,240,fondo,225,105)
  
  //cuadrado 8
  //copiando y pegando el 7 y cambiando valor de y y fondo
  fill (0)
  fondo =255
  tritri = 120
  triangle (tritri,240,120,fondo,135,fondo)
  tritri =165
  triangle (tritri,240,165,fondo,180,fondo)
  tritri=180
  triangle (tritri,240,180,fondo,195,fondo)
  tritri = 225
  triangle (tritri,240,225,fondo,240,fondo)
  //volteados
  tritri = 150
  triangle (tritri,240,150,fondo,135,240)
  tritri =165
  triangle (tritri, 240,165,fondo,150,240)
  tritri =210
  triangle (tritri,240,210,fondo,195,240)
  tritri = 225
  triangle (tritri,240,225,fondo,210,240)
  //segunda fila
  tritri= 135
  fondo =270
  triangle (tritri,255,135,fondo,120,255)
  tritri = 150
  triangle (tritri,255,150,fondo,135,255)
  tritri = 195
  triangle (tritri,255,195,fondo,180,255)
  tritri = 210
  triangle (tritri,255,210,fondo,195,255)
  //volteados
  tritri =150
  triangle (tritri, 255,150,fondo,165,fondo)
  tritri =165
  triangle (tritri,255,165,fondo,180,fondo)
  tritri =225
  triangle (tritri,255,225,fondo,240,fondo)
  tritri =210
  triangle (tritri,255,210,fondo,225,fondo)
  //linea 3
  tritri =135
  fondo = 285
  triangle (tritri,270,135,fondo,120,270)
  tritri =180
  triangle (tritri,270,180,fondo,165,270)
  tritri =195
  triangle (tritri,270,195,fondo,180,270)
  tritri =240
  triangle (tritri,270,240,fondo,225,270)
  //volteadoss
  tritri = 135
  triangle (tritri,270,135,fondo,150,fondo)
  tritri = 150
  triangle (tritri,270,150,fondo,165,fondo)
  tritri =195
  triangle (tritri,270,195,fondo,210,fondo)
  tritri =210
  triangle (tritri,270,210,fondo,225,fondo)
  //linea 4
  tritri =120
  fondo=300
  triangle (tritri,285,120,fondo,135,fondo)
  tritri = 135
  triangle (tritri, 285,135,fondo,150,fondo)
  tritri = 195
  triangle (tritri,285,195,fondo,210,fondo)
  tritri =180
  triangle (tritri,285,180,fondo,195,fondo)
  //volteados
  tritri =165
  triangle (tritri,285,165,fondo,150,285)
  tritri = 180
  triangle (tritri,285,180,fondo,165,285)
  tritri = 225
  triangle (tritri,285,225,fondo,210,285)
  tritri = 240
  triangle (tritri,285,240,fondo,225,285)
  //fila 5
  fondo = 315
  tritri = 120
  triangle (tritri,300,120,fondo,135,fondo)
  tritri =165
  triangle (tritri,300,165,fondo,180,fondo)
  tritri=180
  triangle (tritri,300,180,fondo,195,fondo)
  tritri = 225
  triangle (tritri,300,225,fondo,240,fondo)
  //volteados
  tritri = 150
  triangle (tritri,300,150,fondo,135,300)
  tritri =165
  triangle (tritri, 300,165,fondo,150,300)
  tritri =210
  triangle (tritri,300,210,fondo,195,300)
  tritri = 225
  triangle (tritri,300,225,fondo,210,300)
  //fila 6
  tritri= 135
  fondo =330
  triangle (tritri,315,135,fondo,120,315)
  tritri = 150
  triangle (tritri,315,150,fondo,135,315)
  tritri = 195
  triangle (tritri,315,195,fondo,180,315)
  tritri = 210
  triangle (tritri,315,210,fondo,195,315)
  //volteados
  tritri =150
  triangle (tritri, 315,150,fondo,165,fondo)
  tritri =165
  triangle (tritri,315,165,fondo,180,fondo)
  tritri =225
  triangle (tritri,315,225,fondo,240,fondo)
  tritri =210
  triangle (tritri,315,210,fondo,225,fondo)
  //linea 7
  tritri =135
  fondo = 345
  triangle (tritri,330,135,fondo,120,330)
  tritri =180
  triangle (tritri,330,180,fondo,165,330)
  tritri =195
  triangle (tritri,330,195,fondo,180,330)
  tritri =240
  triangle (tritri,330,240,fondo,225,330)
  //volteados
  tritri = 135
  triangle (tritri,330,135,fondo,150,fondo)
  tritri = 150
  triangle (tritri,330,150,fondo,165,fondo)
  tritri =195
  triangle (tritri,330,195,fondo,210,fondo)
  tritri =210
  triangle (tritri,330,210,fondo,225,fondo)
  //linea 8
  tritri =120
  fondo=360
  triangle (tritri,345,120,fondo,135,fondo)
  tritri = 135
  triangle (tritri, 345,135,fondo,150,fondo)
  tritri = 195
  triangle (tritri,345,195,fondo,210,fondo)
  tritri =180
  triangle (tritri,345,180,fondo,195,fondo)
  //volteados
  tritri =165
  triangle (tritri,345,165,fondo,150,345)
  tritri = 180
  triangle (tritri,345,180,fondo,165,345)
  tritri = 225
  triangle (tritri,345,225,fondo,210,345)
  tritri = 240
  triangle (tritri,345,240,fondo,225,345)
  
  //ultimo cuadrado 9
  //linea 1
  fill (245,195,64)
  tritri =135
  fondo =135
  triangle (tritri,120,135,fondo,120,fondo)
  tritri = 150
  triangle (tritri,120,150,fondo,135,fondo)
  tritri = 195
  triangle (tritri, 120,195, fondo, 180,fondo)
  tritri = 210
  triangle (tritri, 120,210,fondo,195,fondo)
  //volteados
  tritri = 150
  triangle (tritri,120,150,fondo,165,120)
  tritri = 165
  triangle (tritri,120,165,fondo,180,120)
  tritri = 210
  triangle (tritri,120,210,fondo,225,120)
  tritri = 225
  triangle (tritri,120,225,fondo,240,120)
  //linea 2
  tritri =120
  fondo =150
  triangle (tritri,135,120,fondo,135,135)
  tritri = 165
  triangle (tritri,135,165,fondo,180,135)
  tritri = 180
  triangle (tritri,135,180,fondo,195,135)
  tritri =225
  triangle (tritri,135,225,fondo,240,135)
  //volteados
  tritri = 150
  triangle (tritri,135,150,fondo,135,fondo)
  tritri = 165
  triangle (tritri,135,165,fondo,150,fondo)
  tritri =210
  triangle (tritri, 135,210,fondo,195,fondo)
  tritri =225
  triangle (tritri,135,225,fondo,210,fondo)
  //linea 3
  tritri =120
  fondo = 165
  triangle (tritri, 150,120,fondo,135,150)
  tritri = 135
  triangle (tritri,150,135,fondo,150,150)
  tritri = 180
  triangle (tritri,150,180,fondo,195,150)
  tritri = 195
  triangle (tritri,150,195,fondo,210,150)
  //volteados
  tritri =165
  triangle (tritri,150,165,fondo,150,fondo)
  tritri =180
  triangle (tritri,150,180,fondo,165,fondo)
  tritri =225
  triangle (tritri,150,225,fondo,210,fondo)
  tritri = 240
  triangle (tritri,150,240,fondo,225,fondo)
  // linea 4 
  tritri = 135
  fondo =180
  triangle (tritri,165,135,fondo,120,fondo)
  tritri = 180
  triangle (tritri, 165, 180,fondo,165,fondo)
  tritri =195
  triangle (tritri,165,195,fondo,180,fondo)
  tritri =240
  triangle (tritri,165,240,fondo,225,fondo)
  //volteados
  tritri = 135
  triangle (tritri,165,135,fondo,150,165)
  tritri = 150
  triangle (tritri,165,150,fondo,165,165)
  tritri =195
  triangle (tritri,165,195,fondo,210,165)
  tritri =210
  triangle (tritri,165,210,fondo,225,165)
  //linea 5
   tritri =135
  fondo =195
  triangle (tritri,180,135,fondo,120,fondo)
  tritri = 150
  triangle (tritri,180,150,fondo,135,fondo)
  tritri = 195
  triangle (tritri, 180,195, fondo, 180,fondo)
  tritri = 210
  triangle (tritri, 180,210,fondo,195,fondo)
  //volteados
  tritri = 150
  triangle (tritri,180,150,fondo,165,180)
  tritri = 165
  triangle (tritri,180,165,fondo,180,180)
  tritri = 210
  triangle (tritri,180,210,fondo,225,180)
  tritri = 225
  triangle (tritri,180,225,fondo,240,180)
  //linea 6
  tritri =120
  fondo =210
  triangle (tritri,195,120,fondo,135,195)
  tritri = 165
  triangle (tritri,195,165,fondo,180,195)
  tritri = 180
  triangle (tritri,195,180,fondo,195,195)
  tritri =225
  triangle (tritri,195,225,fondo,240,195)
  //volteados
  tritri = 150
  triangle (tritri,195,150,fondo,135,fondo)
  tritri = 165
  triangle (tritri,195,165,fondo,150,fondo)
  tritri =210
  triangle (tritri, 195,210,fondo,195,fondo)
  tritri =225
  triangle (tritri,195,225,fondo,210,fondo)
  //linea 7
  tritri =120
  fondo = 225
  triangle (tritri, 210,120,fondo,135,210)
  tritri = 135
  triangle (tritri,210,135,fondo,150,210)
  tritri = 180
  triangle (tritri,210,180,fondo,195,210)
  tritri = 195
  triangle (tritri,210,195,fondo,210,210)
  //volteados
  tritri =165
  triangle (tritri,210,165,fondo,150,fondo)
  tritri =180
  triangle (tritri,210,180,fondo,165,fondo)
  tritri =225
  triangle (tritri,210,225,fondo,210,fondo)
  tritri = 240
  triangle (tritri,210,240,fondo,225,fondo)
  // linea 8 
  tritri = 135
  fondo =240
  triangle (tritri,225,135,fondo,120,fondo)
  tritri = 180
  triangle (tritri, 225, 180,fondo,165,fondo)
  tritri =195
  triangle (tritri,225,195,fondo,180,fondo)
  tritri =240
  triangle (tritri,225,240,fondo,225,fondo)
  //volteados
  tritri = 135
  triangle (tritri,225,135,fondo,150,225)
  tritri = 150
  triangle (tritri,225,150,fondo,165,225)
  tritri =195
  triangle (tritri,225,195,fondo,210,225)
  tritri =210
  triangle (tritri,225,210,fondo,225,225)
  
  //unos triangulos que me faltaron
  fill (0)
  triangle (45,60,45,75,30,75)
  triangle (45,300,45,315,30,315)
  triangle (285,300,285,315,270,315)
  triangle (45,0,45,15,30,15)
  triangle (45,240,45,255,30,255)
  triangle (285,240,285,255,270,255)
  fill (245,195,64)
  triangle (285,60,285,75,270,75)
  triangle (285,0,285,15,270,15)
  
}