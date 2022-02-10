let tiempoPulsacion;
let XCentro;
let YCentro;

let arr = Array(8).fill(0); // cantPuntosI, radio, modificadorRadioI, BI, mBI, CI, modificadorCI, iteracionesI
let valoresInicio = [12, 3000, 30, 500, 1, 0, 0, 50];

function setup() {
    XCentro = 1366 / 2;
    YCentro = 768 / 2;
    tiempoPulsacion = 0;

    createCanvas(1366, 768);
    background(222);
    noFill();
    strokeWeight(1);
    stroke(1);
    noLoop();
}

function draw() {
    background(222);

    let vibrando = 0;
    vibrando = new Vibrante(valoresInicio, arr);
    vibrando.dibuja();
    //debug(vibrando);
}

class Vibrante {
    cantPuntos;
    radio;
    modificadorRadio;
    B;
    modificadorB;
    C;
    modificadorC;
    iteraciones;

    constructor(
        [
            cantPuntosI,
            radioI,
            modificadorRadioI,
            BI,
            modificadorBI,
            CI,
            modificadorCI,
            iteracionesI,
        ],
        [pts, r, mr, b, mb, c, mc, it]
    ) {
        this.cantPuntos = cantPuntosI + pts;
        this.radio = radioI + r;
        this.modificadorRadio = modificadorRadioI + mr;
        this.B = BI + b;
        this.modificadorB = modificadorBI + mb;
        this.C = CI + c;
        this.modificadorC = modificadorCI + mc;
        this.iteraciones = iteracionesI + it;
    }

    dibuja() {
        beginShape();
        for (let j = 0; j < this.iteraciones; j++) {
            for (let i = 0; i < TWO_PI; i += TWO_PI / this.cantPuntos) {
                let R = this.radio + this.B * cos(this.C * i);
                let x = (R * cos(i)) / 100;
                let y = (R * sin(i)) / 100;
                curveVertex(x + XCentro, y + YCentro);
                this.radio += this.modificadorRadio;
                this.B += this.modificadorB;
                this.C += this.modificadorC;
            }
        }
        endShape();
    }
}

function arrayAlAzar() {
    //console.log("azar");
    return [
        floor(random(-8, 25)), // cantPuntos
        floor(random(-1000, 1000)), // radio
        floor(random(-20, 3)), // modificador radio
        floor(random(-500, 500)), // B
        random(-3, 3), // modificador B
        random(-10, 10), // C
        random(-1, 1), // modificador C
        floor(random(-20, 25)), // iteraciones
    ];
}

function keyTyped() {
    // 100 milisegundos entre tecla y tecla
    if (millis() > tiempoPulsacion + 100) {
        let puntos = 0.5;
        switch (key) {
            // valores al azar
            case "A":
                arr = arrayAlAzar();
                break;
            // radio
            case "R":
                arr[1] += 100;
                break;
            case "r":
                arr[1] -= 100;
                break;
            // modificador radio
            case "E":
                arr[2] += 1;
                break;
            case "e":
                arr[2] -= 1;
                break;
            // B
            case "B":
                arr[3] += 100;
                break;
            case "b":
                arr[3] -= 100;
                break;
            // modificador B
            case "V":
                arr[4] += 0.1;
                break;
            case "v":
                arr[4] -= 0.1;
                break;
            // C
            case "C":
                arr[5] += 0.09;
                break;
            case "c":
                arr[5] -= 0.09;
                break;
            // modificador C
            case "X":
                arr[6] += 0.0001;
                break;
            case "x":
                arr[6] -= 0.0001;
                break;
            // iteraciones
            case "I":
                arr[7] += 1;
                // moximo
                if (arr[7] >= valoresInicio[7] + 50) {
                    arr[7] -= 1;
                }
                break;
            case "i":
                arr[7] -= 1;
                break;
            // puntos
            case "P":
                arr[0] += puntos;
                // maximo
                if (arr[0] >= valoresInicio[0] + 30) {
                    arr[0] -= puntos;
                }
                break;
            case "p":
                arr[0] -= puntos;
                // minimo
                if (arr[0] <= -valoresInicio[0]) {
                    arr[0] += puntos;
                }
                break;
            case "Z":
                window.location.reload();
                break;
        }
        tiempoPulsacion = millis();
    }
    redraw();
}

function debug(objeto) {
    let y = 100;
    text("cant Puntos:  " + objeto.cantPuntos, 50, (y += 20));
    text("radio:              " + objeto.radio, 50, (y += 20));
    text("mod radio:      " + objeto.modificadorRadio, 50, (y += 20));
    text("B:                    " + objeto.B, 50, (y += 20));
    text("mod B:           " + objeto.modificadorB, 50, (y += 20));
    text("C:                   " + objeto.C, 50, (y += 20));
    text("mod C:           " + objeto.modificadorC, 50, (y += 20));
    text("iteraciones:    " + objeto.iteraciones, 50, (y += 20));

    text("ARAY", 50, (y += 30));
    text("cant Puntos:  " + arr[0], 50, (y += 20));
    text("radio:             " + arr[1], 50, (y += 20));
    text("mod radio:     " + arr[2], 50, (y += 20));
    text("B:                   " + arr[3], 50, (y += 20));
    text("mod B:           " + arr[4], 50, (y += 20));
    text("C:                   " + arr[5], 50, (y += 20));
    text("mod C:           " + arr[6], 50, (y += 20));
    text("iteraciones:    " + arr[7], 50, (y += 20));
}
