let timer;
let tiempo;
let Xc;
let Yc;

let arr = [0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
    createCanvas(1366, 768);
    Xc = 1366 / 2;
    Yc = 768 / 2;
    background(235);
    noFill();
    strokeWeight(1);
    stroke(1);
    noLoop();
}

function draw() {
    background(200);
    timer = millis();
    vibrando = 0;
    vibrando = new Vibrante(arr);
    vibrando.dibuja();
    if (timer - tiempo <= 3000) {
        text(key, 10, 10);
    }
    //debug(vibrando);
}

function keyTyped() {
    tiempo = millis();
    let puntos = .5;
    switch (key) {
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
            break;
        case "i":
            arr[7] -= 1;
            break;
        // puntos
        case "P":
            arr[0] += puntos;
            break;
        case "p":
            arr[0] -= puntos;
            if (arr[0] <= -vibrando.cantPuntosI) {
                arr[0] += puntos;
            }
            break;

        case "Z":
            window.location.reload();
            //arr = [0, 0, 0, 0, 0, 0, 0, 0];

            break;
    }
    redraw();
}

class Vibrante {
    cantPuntosI = 12;
    radioI = 3000;
    mRadioI = 30;
    BI = 500;
    mBI = 1;
    CI = 0;
    mCI = 0;
    iteracionesI = 50;

    constructor([pts, r, mr, b, mb, c, mc, it]) {
        this.cantPuntos = this.cantPuntosI + pts;
        this.radio = this.radioI + r;
        this.mRadio = this.mRadioI + mr;
        this.B = this.BI + b;
        this.mB = this.mBI +mb;
        this.C = this.CI + c;
        this.mC = this.mCI + mc;
        this.iteraciones = this.iteracionesI + it;
    }

    dibuja() {
        beginShape();
        for (let j = 0; j < this.iteraciones; j++) {
            for (let i = 0; i < TWO_PI; i += TWO_PI / this.cantPuntos) {
                let R = this.radio + this.B * cos(this.C * i);
                let x = R * cos(i) / 100;
                let y = R * sin(i) / 100;
                curveVertex(x + Xc, y + Yc);
                this.radio += this.mRadio;
                this.B += this.mB;
                this.C += this.mC;
            }
        }
        endShape();
    }
}

function debug(vibrando) {
    let y = 100;
    text('cant Puntos:  ' + vibrando.cantPuntos, 50, y += 20);
    text('radio:             ' + vibrando.radio, 50, y += 20);
    text('mod radio:         ' + vibrando.mRadio, 50, y += 20);
    text('B:                    ' + vibrando.B, 50, y += 20);
    text('mod B:           ' + vibrando.mB, 50, y += 20);
    text('C:                   ' + vibrando.C, 50, y += 20);
    text('mod C:           ' + vibrando.mC, 50, y += 20);
    text('iteraciones:    ' + vibrando.iteraciones, 50, y += 20);

    text('ARAY', 50, y += 30);
    text('cant Puntos:  ' + arr[0], 50, y += 20);
    text('radio:             ' + arr[1], 50, y += 20);
    text('mod radio:         ' + arr[2], 50, y += 20);
    text('B:                    ' + arr[3], 50, y += 20);
    text('mod B:           ' + arr[4], 50, y += 20);
    text('C:                   ' + arr[5], 50, y += 20);
    text('mod C:           ' + arr[6], 50, y += 20);
    text('iteraciones:    ' + arr[7], 50, y += 20);
}
