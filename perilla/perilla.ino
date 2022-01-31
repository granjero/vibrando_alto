/*#include <Keyboard.h> // https://www.arduino.cc/reference/en/language/functions/usb/keyboard/*/
#include "JC_Button.h" // https://github.com/JChristensen/JC_Button

// módulo codificador rotativo KY-040 
#define A 2 // CLK
#define B 3 // DT
#define C 4 // SW

int modo = 0;
int reset = 0;
int estadoA;
int estadoPrevioA;  

Button boton(C);

void setup() { 
    pinMode (A,INPUT); // pin 2 
    pinMode (B,INPUT); // pin 3
    boton.begin(); // pin 4
    estadoPrevioA = digitalRead(A); 
    Serial.begin (9600);
    /*Keyboard.begin();*/
} 

void loop() {
    boton.read();
    if (perillaMovida()) { 
        reset = 0;
        Serial.println(devuelveCaracter(modo));
        /*Keyboard.write(devuelveCaracter(modo));*/
    } 

    if (boton.wasPressed()) {
        reset++;
        modo = cambiaModo(modo);
    }

    if (reset >= 5) {
        /*Keyboard.write('Z');*/
        reset = 0;
        Serial.println("Z reset");
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
bool perillaMovida() {
    estadoA = digitalRead(A); 
    /*return estadoA != estadoPrevioA ? true : false; */
    return (estadoA != estadoPrevioA); 
} 

// devuelve el caracter que corresponde segun el modo y la direccion
char devuelveCaracter(int modo) {
    switch (modo) {
        case 0:
            return direccionPerilla() > 0 ? 'C' : 'c';
            break;
        case 1:
            return direccionPerilla() > 0 ? 'B' : 'b';
            break;
        case 2:
            return direccionPerilla() > 0 ? 'X' : 'x';
            break;
        case 3:
            return direccionPerilla() > 0 ? 'V' : 'v';
            break;
        case 4:
            return direccionPerilla() > 0 ? 'R' : 'r';
            break;
        case 5:
            return direccionPerilla() > 0 ? 'E' : 'e';
            break;
        case 6:
            return direccionPerilla() > 0 ? 'I' : 'i';
            break;
        case 7:
            return direccionPerilla() > 0 ? 'P' : 'p';
            break;
    }
}
