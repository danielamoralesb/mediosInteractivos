var ejex = 0

function setup() {
  createCanvas(320, 320);
  background(255, 251, 248);
  for (var ejex = 0; ejex < 320; ejex = ejex + 40) {
    fill(245, 195, 64)
    noStroke();
    triangle(0, 0, 40, 0, 40, 40)
    triangle(ejex, 160 - ejex, 40 + ejex, 200 - ejex, 40 + ejex, 160 - ejex);
    triangle(ejex, 120 - ejex, ejex, 160 - ejex, 40 + ejex, 160 - ejex);
    triangle(ejex, 80 - ejex, ejex, 120 - ejex, 40 + ejex, 120 - ejex);
    triangle(ejex, 40 - ejex, 40 + ejex, 80 - ejex, 40 + ejex, 40 - ejex);
    triangle(ejex, 200 - ejex, 40 + ejex, 240 - ejex, 40 + ejex, 200 - ejex);
    triangle(ejex, 240 - ejex, ejex, 280 - ejex, ejex + 40, 280 - ejex);
    triangle(ejex, 280 - ejex, ejex, 320 - ejex, ejex + 40, 320 - ejex);
    triangle(ejex + 40, 280 - ejex, ejex + 80, 280 - ejex, ejex + 80, 320 - ejex);
    triangle(ejex + 80, 280 - ejex, ejex + 120, 280 - ejex, ejex + 120, 320 - ejex);
    triangle(ejex + 120, 280 - ejex, ejex + 120, 320 - ejex, ejex + 160, 320 - ejex);
    triangle(ejex + 160, 280 - ejex, ejex + 160, 320 - ejex, ejex + 200, 320 - ejex);
    triangle(ejex + 200, 280 - ejex, ejex + 240, 280 - ejex, ejex + 240, 320 - ejex);
    triangle(ejex + 240, 280 - ejex, ejex + 280, 280 - ejex, ejex + 280, 320 - ejex);
    triangle(ejex + 280, 280 - ejex, ejex + 280, 320 - ejex, ejex + 320, 320 - ejex);
  }
}


function draw() {

}