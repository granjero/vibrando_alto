import processing.svg.*;

Ciclo ciclo;

float A, B, C, puntos;


void setup()
{
  //
  //size (5000, 5000, SVG, "arte/cardioide###.svg");
  size(1000, 1000);
  //
  //
  noLoop();
  noFill();
}

void draw()
{  
  translate(width / 2, height / 2);
  rotate(TWO_PI * 0.25);
  background(255);

  float m = 0.053;
  A = 247;
  B = -37;
  C = 15.333;

  puntos = 49.38;

  //ciclo = new Ciclo(puntos, A, B, C, FI);
  beginShape();

  for (int i = 0; i < 196; i++)
  {    
    ciclo = new Ciclo(puntos, A, B, C);

    A += 110.23;
    B += 0.32;
    C += 0.0452;
    ciclo.dibujar(m, m);
  }
  endShape();
}
