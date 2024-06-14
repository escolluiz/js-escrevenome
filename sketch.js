let xBolinha = 300;
let yBolinha = 150;
let diametro = 20;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raio = diametro/2
let xRaquete = 5;
let yRaquete = 150;
let Raquetecom = 10;
let Raquetealt = 90;
let colidiu = false;
let xRaqueteop = 585;
let yRaqueteop = 150;
//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
//placar
let meusPontos = 0;
let pontosDoOponente = 0

//sons do jogo
let raquetada;
let ponto;
let trilha;

let chanceDeErrar = 0;




function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
    background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraraquete();
  movimentaminharaquete();
  colisaoMinhaRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  colisaoMinhaRaqueteBiblioteca(xRaquete, yRaquete);
  movimentaRaqueteOponente();
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  incluirPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
  
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  
}

function movimentaRaqueteOponente() {
      if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
   if (keyIsDown(83)){ 
    yRaqueteOponente += 10;
   }
}

function mostraRaquete(x,y) {
    rect(x, y, Raquetecom, Raquetealt);
    
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}


function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) 
        velocidadeXBolinha *= -1;
    
    if (yBolinha + raio > height || yBolinha - raio < 0) 
        velocidadeYBolinha *= -1;
    }
function mostraraquete() {
  rect(xRaquete, yRaquete, Raquetecom, Raquetealt);
}

function mostraraqueteop() {
  rect(xRaqueteop, yRaqueteop, Raquetecom, Raquetealt);
 }

function movimentaminharaquete() {
  if (keyIsDown(UP_ARROW)){ 
    yRaquete -= 10;
  }
   if (keyIsDown(DOWN_ARROW)){ 
    yRaquete += 10;}
}

function colisaoMinhaRaqueteBiblioteca(x, y) {
    colidiu = collideRectCircle(x, y, Raquetecom, Raquetealt, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

function incluirPlacar(){
    stroke(255)
    textAlign(CENTER);
    textSize(16);
    fill(color(255,140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255,140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}


function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
    ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

