#include "button.h"

Button boton;

#define A 2
#define B 3

int modo = 0;
int estadoA;
int estadoPrevioA;  

void setup() { 
    pinMode (A,INPUT); // pin 2 
    pinMode (B,INPUT); // pin 3
    boton.begin(4);
    Serial.begin (9600);
    estadoPrevioA = digitalRead(A); 
} 

void loop() {
    if (perillaMovida()) { 
        Serial.println(devuelveCaracter(modo));
    } 

    if (boton.debounce()) {
        modo = cambiaModo(modo);
    }

    estadoPrevioA = estadoA;
}

// devuelve el valor de modo.
int cambiaModo(int modo) {
    modo++;
    return modo > 7 ? 0 : modo;
}
// devuelve la direccón de giro
int direccionPerilla () {
    return digitalRead(B) != estadoA ? 1 : -1; // si B es diferente a estadoA gira como el reloj
}

// devuelve true si la perilla se movio
boolean perillaMovida() {
    estadoA = digitalRead(A); 
    return estadoA != estadoPrevioA ? true : false; 
} 

// devuelve el caracter que corresponde segun el modo y la direccion
char devuelveCaracter(int modo) {
    switch (modo) {
        case 0:
            return direccionPerilla() > 0 ? 'R' : 'r';
            break;
        case 1:
            return direccionPerilla() > 0 ? 'E' : 'e';
            break;
        case 2:
            return direccionPerilla() > 0 ? 'B' : 'b';
            break;
        case 3:
            return direccionPerilla() > 0 ? 'V' : 'v';
            break;
        case 4:
            return direccionPerilla() > 0 ? 'C' : 'c';
            break;
        case 5:
            return direccionPerilla() > 0 ? 'X' : 'x';
            break;
        case 6:
            return direccionPerilla() > 0 ? 'I' : 'i';
            break;
        case 7:
            return direccionPerilla() > 0 ? 'P' : 'p';
            break;
    }
}
