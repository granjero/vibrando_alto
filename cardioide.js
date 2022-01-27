let segundos = 0;
let slRadio;
let slB;
let slMB;
let slC;
let deslizadores;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    //frameRate(1);
    //noLoop();
    noFill();
    strokeWeight(1);
    stroke(1);
    deslizadores = new Deslizadores();
}

function draw() {
    console.log(deslizadores.slMC.value());
    background(255);
    deslizadores.texto();
    cantPuntos = deslizadores.slPuntos.value();
    radio = deslizadores.slRadio.value();
    mRadio = deslizadores.slMRadio.value();
    B = deslizadores.slB.value();
    mB = deslizadores.slMB.value();
    C = deslizadores.slC.value();
    mC = deslizadores.slMC.value();
    Xc = windowWidth / 2;
    Yc = windowHeight / 2;
    contador = 0;

    R = radio + B * cos(C);
    x = R * cos(0);
    y = R * sin(0);

    beginShape();
    for (j = 0; j < deslizadores.slIteraciones.value(); j++) {
        //curveVertex(x * 0.01 + Xc, y * 0.01 + Yc);
        for (i = 0; i < TWO_PI; i += TWO_PI / cantPuntos) {
            //FI = i;
            R = radio + B * cos(C * i);
            x = R * cos(i);
            y = R * sin(i);
            curveVertex(x * 0.01 + Xc, y * 0.01 + Yc);
            //curveVertex(x + Xc, y + Yc);
            radio += mRadio;
            B += mB;
            C += mC;
            //strokeWeight(5);
            //point(x + Xc, y + Yc);
            //strokeWeight(1);
        }
        //point(x + Xc, y + Yc);
    }
    //curveVertex(x + Xc, y + Yc);
    endShape();
}

function mousePressed() {}

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
