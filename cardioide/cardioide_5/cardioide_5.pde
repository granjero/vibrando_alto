import processing.svg.*;

Ciclo ciclo;

float A, B, C, puntos;
boolean dibujar;

void setup()
{
  //size (1000, 1000, SVG, "arte/AV_004.svg");
  size(1000, 1000);
  //noLoop();
  noFill();
}



void draw()
{ 
  if(dibujar)
  {
      beginRecord(SVG, "arte/tmp/AV_####.svg");
  }
  
  translate(height / 2, width / 2);
  background(255);

  A = 149;
  B = 0;
  C = 10.78;
  
  puntos = 0.2758;
  
  //ciclo = new Ciclo(puntos, A, B, C, FI);
  beginShape();

  for (int i = 0; i < 87; i++)
  {    
    ciclo = new Ciclo(puntos, A, B, C);

    A += 3.64;
    B += -0.789;
    C += 0.00080;
    ciclo.dibujar();
  }
  endShape();
  if(dibujar)
  {
    endRecord();
    dibujar = false;
  }
}


void mouseClicked()
{
  dibujar = true;
  println("click");
}
