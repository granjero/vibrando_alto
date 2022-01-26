//Cardioide
// r = a + b * cos(k * fi)

import processing.svg.*;

float r;
float a;
float aumentoA;
float b;
float aumentoB;
float c;
float aumentoC;
//float k;
float fi;
float cont;
float [] XY = {0, 0};


void setup()
{
  //size (2480, 3508, SVG, "arte/caracola_1_####.svg");
  //
  size(1000, 1000);
  //noLoop();
  noFill();

  aumentoA = 12.00;
  aumentoB = -14.00;
  aumentoC = 5.0500;
  cont = 0.0424;
}

void draw()
{ 
  a = -2000.00;
  b = 0.00;
  c = 9.30;
  aumentoA -= 0.10;
  aumentoB += 0.50;
  aumentoC = 0.1000;

  println("a " + a + " - b " + b + " - c " + c);
  background(255);
  translate(width * 0.500, height * 0.500 );
  rotate(1.00 * PI / 3.37);

  beginShape();

  for (int j = 0; j <= 70; j++)
  {
    a += aumentoA;
    b += aumentoB;
    c += aumentoC;
    //cont += 0.00550;
    for (float i = 0; i <= TWO_PI; i += TWO_PI * cont)
    {
      fi = i;
      r = a + b * cos(c * fi);
      XY = polarACartesiano(r, fi);
      curveVertex(XY[0] * 0.20, XY[1] * 0.20);
    }
  }
  endShape();
  delay(100);
}

//===================================================
float[]  polarACartesiano (float R, float FI)
{
  float[] equisy = {0, 0};

  equisy[0] = R * cos(FI); // x
  equisy[1] = R * sin(FI); // y

  return equisy;
}
