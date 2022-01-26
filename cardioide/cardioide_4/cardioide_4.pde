import processing.svg.*;

Ciclo ciclo;

float A, B, C, puntos;


void setup()
{
  //size (2480, 3508, SVG, "arte/005.svg");
  //
  size(1000, 1000);
  //noLoop();
  noFill();
  
  
}

void draw()
{  
  translate(width / 2, height / 2);
  background(255);

  A = 69.0;
  B = -15.0;
  C = 12.0;
  
  puntos = 26.000;

  //ciclo = new Ciclo(puntos, A, B, C, FI);
  beginShape();

  for (int i = 0; i < 44; i++)
  {    
    ciclo = new Ciclo(puntos, A, B, C);

    A += 22.66;
    B += -9.1;
    C += 0.00312;
    ciclo.dibujar();
  }
  endShape();
}
