#include <Keyboard.h> // https://www.arduino.cc/reference/en/language/functions/usb/keyboard/
#include "button.h" // https://github.com/e-tinkers/button

Button boton;

// módulo codificador rotativo KY-040 
#define A 2 // CLK
#define B 3 // DT
#define C 4 // SW

int modo = 0;
int reset = 0;
int estadoA;
int estadoPrevioA;  

void setup() { 
    pinMode (A,INPUT); // pin 2 
    pinMode (B,INPUT); // pin 3
    boton.begin(C); // pin 4
    estadoPrevioA = digitalRead(A); 
    Serial.begin (9600);
    Keyboard.begin();
} 

void loop() {
    if (perillaMovida()) { 
        reset = 0;
        Serial.println(devuelveCaracter(modo));
        Keyboard.write(devuelveCaracter(modo));
    } 

    if (boton.debounce()) {
        reset++;
        modo = cambiaModo(modo);
    }

    if (reset >= 5) {
        Keyboard.write('z');
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
            return direccionPerilla() > 0 ? 'P' : 'p';
            break;
        case 3:
            return direccionPerilla() > 0 ? 'V' : 'v';
            break;
        case 4:
            return direccionPerilla() > 0 ? 'R' : 'r';
            break;
        case 5:
            return direccionPerilla() > 0 ? 'X' : 'x';
            break;
        case 6:
            return direccionPerilla() > 0 ? 'I' : 'i';
            break;
        case 7:
            return direccionPerilla() > 0 ? 'E' : 'e';
            break;
    }
}
