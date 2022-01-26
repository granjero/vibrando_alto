let segundos = 0;
let slRadio;
let slB;
let slMB;
let slC;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    //frameRate(1);
    //noLoop();
    noFill();
    strokeWeight(1);
    stroke(1);
    //radio
    slRadio = createSlider(0, 150, 0, 0);
    slRadio.position(10, 10);
    slRadio.style('width', '200px');
    //B
    slB = createSlider(0, 30, 0, 0);
    slB.position(10, 30);
    slB.style('width', '200px');
    // modificadorB
    slMB = createSlider(0, .05, 0, 0);
    slMB.position(10, 50);
    slMB.style('width', '200px');
    //C
    slC = createSlider(0, 10, 0, 0);
    slC.position(10, 70);
    slC.style('width', '200px');
    // modificadorC
    slMC = createSlider(1, 1.001, 1, 0);
    slMC.position(10, 90);
    slMC.style('width', '200px');
    // puntos
    slPuntos = createSlider(1, 20, 6, .1);
    slPuntos.position(10, 110);
    slPuntos.style('width', '200px');
}

function draw(){
    console.log(slMC.value());
    background(255);
    text('radio', slRadio.x * 2 + slRadio.width, slRadio.y + 15);
    text('B', slB.x * 2 + slB.width, slB.y + 15);
    text('mB', slMB.x * 2 + slMB.width, slMB.y + 15);
    text('C', slC.x * 2 + slC.width, slC.y + 15);
    text('mC', slMC.x * 2 + slMC.width, slMC.y + 15);
    text('puntos', slPuntos.x * 2 + slPuntos.width, slPuntos.y + 15);
    cantPuntos = TWO_PI / slPuntos.value();    
    radio = slRadio.value();
    mRadio = .1;
    B = slB.value();
    mB = slMB.value();
    C = slC.value();
    mC = slMC.value();
    Xc = windowWidth / 2;
    Yc = windowHeight / 2;
    contador = 0;
    
    beginShape();
    for(j = 0; j < 100; j++) { 
        for ( i = 0; i < TWO_PI; i += cantPuntos)
        {
          FI = i;
          R = radio + B * cos(C);
          x = R * cos(FI); 
          y = R * sin(FI);
          curveVertex(x + Xc, y + Yc);
          radio += i * mRadio ;
          B += i * mB;
          C += i * mC;
          //strokeWeight(10);  
          //point(x + Xc, y + Yc);
          //strokeWeight(1);
        }
    }
    //curveVertex(x + Xc, y + Yc);
    endShape();
}

function mousePressed() {
}

class Ciclo
{
  A;
  B;
  C;
  FI;
  R;
  cantPuntos;

  Ciclo(puntos, a, b, c)
  {
    cantPuntos = puntos;    
    A = a;
    B = b;
    C = c;
  }

  dibujar()
  {
    for ( i = 0; i < TWO_PI; i += cantPuntos)
    {
      FI = i;
      R = A + B * cos(C * FI);
      x = R * cos(FI); 
      y = R * sin(FI);
      curveVertex(x, y);
      strokeWeight(10);  // Beastly
      point(x, y);
      strokeWeight(1);  // Beastly
    }
  }
}
