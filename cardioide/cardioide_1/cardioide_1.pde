//Cardioide
// r = a + b * cos(k * fi)

import processing.svg.*;

float r;
float a;
float b;
float c;
float k;
float fi;
float cont = 0.0100;
float [] XY = {0, 0};


void setup()
{
  //size (2480, 3508, SVG, "arte00/####.svg");
  //
  size(1000, 1000);
  //noLoop();
  noFill();
  k = -59;
}

void draw()
{
  background(255);
  translate(width * 0.500, height * 0.500 );
  rotate(1.12 * PI / 7.10);

  beginShape();
  a = -2233;
  b = 0;
  c = 0;
  //cont += 0.0005;
  for (int j = 0; j <= 81; j++)
  {

    a = a + 4.8;
    b += 18.32;
    cont += 0.0003;
    //c += 10.50;
    for (float i = 0; i <= TWO_PI; i += TWO_PI * cont)
    {
      fi = i;
      r = a + b * cos(9.125 * fi);
      //r = a + b * cos(7.486 * fi) + c * sin(fi * 4.91);
      //r = 0;
      XY = polarACartesiano(r, fi);
      curveVertex(XY[0] * 0.10, XY[1] * 0.1);
      //curveVertex(XY[0], XY[1]);
    }
  }
  endShape();
  delay(1000);
}


float[]  polarACartesiano (float R, float FI)
{
  float[] equisy = {0, 0};

  equisy[0] = R * cos(FI); // x
  equisy[1] = R * sin(FI); // y

  return equisy;
}
