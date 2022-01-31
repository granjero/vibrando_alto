let deslizadores;
let Xc;
let Yc;

let arr = [0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
    createCanvas(windowWidth, windowHeight);
    Xc = windowWidth / 2;
    Yc = windowHeight / 2;
    background(255);
    frameRate(1);
    noFill();
    strokeWeight(1);
    stroke(1);
}

function draw() {
    background(255);
    c = 0;
    c = new Cardioide(arr);
    beginShape();
    for (j = 0; j < c.iteraciones; j++) {
        for (i = 0; i < TWO_PI; i += TWO_PI / c.cantPuntos) {
            R = c.radio + c.B * cos(c.C * i);
            x = R * cos(i);
            y = R * sin(i);
            curveVertex(x * 0.01 + Xc, y * 0.01 + Yc);
            c.radio += c.mRadio;
            c.B += c.mB;
            c.C += c.mC;
        }
    }
    endShape();
}

function keyTyped() {
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
            arr[5] += random(0.15707, 0.31415);
            break;
        case "c":
            arr[5] -= random(0.15707, 0.31415);
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
            arr[0] += .75;
            break;
        case "p":
            //arr[0] -= 0.75;
            //arr[0] <= 1 ? (arr[0] = 1) : (arr[0] = arr[0]);

            if ((c.cantPuntosI + arr[0] - .75) <= 1 ) {
                //arr[0] = c.cantPuntos - 1;
                //console.log("reset");
            }
            else {
                arr[0] -= .75;
            }
            //console.log("ptos " + c.cantPuntosI);
            //console.log("arr " + arr[0]);
            //console.log("ptos + arr " + (c.cantPuntosI + arr[0]));
            //console.log("->->->->->->");
            break;

        case "Z":
            arr = [0, 0, 0, 0, 0, 0, 0, 0];
            break;
    }
}

class Cardioide {
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
        this.mB = this.mBI + mb;
        this.C = this.CI + c;
        this.mC = this.mCI + mc;
        this.iteraciones = this.iteracionesI + it;
    }
}

