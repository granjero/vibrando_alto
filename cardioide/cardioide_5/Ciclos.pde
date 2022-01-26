class Ciclo
{
  float A;
  float B;
  float C;
  float FI;
  float R;
  float cantPuntos;

  Ciclo(float puntos, float a, float b, float c)
  {
    cantPuntos = puntos;    
    A = a;
    B = b;
    C = c;
  }

  void dibujar()
  {
    for (float i = 0; i < TWO_PI; i += cantPuntos)
    {
      FI = i;
      float R = A + B * cos(C * FI);
      float x = R * cos(FI); 
      float y = R * sin(FI);
      curveVertex(x, y);
      strokeWeight(10);  // Beastly
      point(x, y);
      strokeWeight(1);  // Beastly
    }
  }
}
