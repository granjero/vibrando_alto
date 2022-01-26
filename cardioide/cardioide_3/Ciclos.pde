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

  void dibujar(float modX, float modY)
  {
    for (float i = 0; i < TWO_PI; i += TWO_PI / cantPuntos)
    {
      FI = i;
      float R = A + B * cos(C * FI);
      float x = R * cos(FI);
      float y = R * sin(FI);
      curveVertex(x * modX, y * modY);
    }
  }
}
