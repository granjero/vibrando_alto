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
  //noLoop();
  noFill();
}

void draw()
{  
  translate(width / 2, height / 2);
  rotate(TWO_PI * 0.25);
  background(255);

  float m = 0.047;
  A = 1435;
  B = 523;
  C = 17.332;

  puntos = 24.63;

  //ciclo = new Ciclo(puntos, A, B, C, FI);
  beginShape();

  for (int i = 0; i < 71; i++)
  {    
    ciclo = new Ciclo(puntos, A, B, C);

    A += 110.77;
    B += 14.51;
    C += 0.0779;
    ciclo.dibujar(m, m);
  }
  endShape();
}
