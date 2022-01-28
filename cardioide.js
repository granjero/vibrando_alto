let deslizadores;
let Xc;
let Yc;

let arr = [0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
    createCanvas(windowWidth, windowHeight);
    Xc = windowWidth / 2;
    Yc = windowHeight / 2;
    background(255);
    //frameRate(1);
    //noLoop();
    noFill();
    strokeWeight(1);
    stroke(1);
    //deslizadores = new Deslizadores();
}

function draw() {
    background(255);
    c = 0;
    c = new Cardioide(arr);
    //console.log(c);
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
            arr[5] += 0.35;
            break;
        case "c":
            arr[5] -= 0.35;
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
            arr[0] += 1;
            break;
        case "p":
            //arr[0] -= 0.75;
            //arr[0] <= 1 ? (arr[0] = 1) : (arr[0] = arr[0]);

            if ((c.cantPuntosInicial + arr[0] - 1) <= 1 ) {
                //arr[0] = c.cantPuntos - 1;
                console.log("reset");
            }
            else {
                arr[0] -= 1;
            }
            console.log("ptos " + c.cantPuntosInicial);
            console.log("arr " + arr[0]);
            console.log("ptos + arr " + (c.cantPuntosInicial + arr[0]));
            console.log("->->->->->->");
            break;

        case "Z":
            arr = [0, 0, 0, 0, 0, 0, 0, 0];
            break;
    }
}

class Cardioide {
    cantPuntosI = 13;
    radioI = 1000;
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

class Deslizadores {
    constructor() {
        // radio
        this.slRadio = createSlider(0, 10000, 1000, 10);
        this.slRadio.position(10, 10);
        this.slRadio.style("width", "200px");
        // modificador radio
        this.slMRadio = createSlider(0, 50, 1, 1);
        this.slMRadio.position(10, 30);
        this.slMRadio.style("width", "200px");
        // B
        this.slB = createSlider(0, 10000, 500, 1);
        this.slB.position(10, 50);
        this.slB.style("width", "200px");
        // modificadorB
        this.slMB = createSlider(-10, 10, 0, 0.1);
        this.slMB.position(10, 70);
        this.slMB.style("width", "200px");
        // C
        this.slC = createSlider(0, 20, 0, 0.01);
        this.slC.position(10, 90);
        this.slC.style("width", "200px");
        // modificadorC
        this.slMC = createSlider(0, 0.005, 0, 0.00001);
        this.slMC.position(10, 110);
        this.slMC.style("width", "200px");
        // puntos
        this.slPuntos = createSlider(5, 25, 13.31, 0.01);
        this.slPuntos.position(10, 130);
        this.slPuntos.style("width", "200px");
        // iteraciones
        this.slIteraciones = createSlider(1, 200, 30, 1);
        this.slIteraciones.position(10, 150);
        this.slIteraciones.style("width", "200px");
    }

    texto() {
        text(
            "radio " + this.slRadio.value(),
            this.slRadio.x * 2 + this.slRadio.width,
            this.slRadio.y + 15
        );
        text(
            "mRadio " + this.slMRadio.value(),
            this.slMRadio.x * 2 + this.slMRadio.width,
            this.slMRadio.y + 15
        );
        text(
            "B " + this.slB.value(),
            this.slB.x * 2 + this.slB.width,
            this.slB.y + 15
        );
        text(
            "mB " + this.slMB.value(),
            this.slMB.x * 2 + this.slMB.width,
            this.slMB.y + 15
        );
        text(
            "C " + this.slC.value(),
            this.slC.x * 2 + this.slC.width,
            this.slC.y + 15
        );
        text(
            "mC " + this.slMC.value(),
            this.slMC.x * 2 + this.slMC.width,
            this.slMC.y + 15
        );
        text(
            "puntos " + this.slPuntos.value(),
            this.slPuntos.x * 2 + this.slPuntos.width,
            this.slPuntos.y + 15
        );
        text(
            "iteraciones " + this.slIteraciones.value(),
            this.slIteraciones.x * 2 + this.slIteraciones.width,
            this.slIteraciones.y + 15
        );
    }
}
