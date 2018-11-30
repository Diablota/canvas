function randomInt(int) {
    return Math.floor(Math.random() * int) + 1;
}

// rebon bord
function isIncolisionCanvas(pos, largeur, canvasSize) {
    var colision = false;
    if(pos + largeur >= canvasSize || pos <= 0) {
        colision = true;
    }
    return colision;
}

function checkColision(pos, canvasSize, largeur) {
    var borderColision = 5;
    var bord = false;
    if(pos <= 0) {
        bord = true;
        pos = borderColision;
    } else {
      pos = canvasSize - largeur - borderColision;
    }
    return pos;
}
function tirer(){
posXBombe.push(posX_Joueur+130);
posYBombe.push(posY_Joueur+50);
}
function deplaceTire(){
  for (var i = 0; i < posXBombe.length; i++) {
    posXBombe[i]+=1;
  }
}


function inverserVitesse(vitesse) {
  vitesse *= -1;
  return vitesse
}

function deplacement(pos, vitesse) {
  return pos += vitesse;
}

//generer les obstacles
function initialisationBalles(posX, posY, vitesseX, vitesseY, diametreBalle, max_ball) {
  for(i = 0; i <= max_ball; i++) {
    posX[i] = randomInt(550) + diametreBalle / 2;
    posY[i] = randomInt(550) + diametreBalle / 2;
    vitesseX[i] = 10;
    vitesseY[i] = 10;
  }
}

//function tirer(){
//var buttonPressed = instanceOfMouseEvent.button
//  if () {
//    buttonPressed.drawImage(bombe, 0, 0, 682, 529, 0, 0, 68, 52);
//  }
//tirer();
//}
document.addEventListener("mousedown", pressClick);
document.addEventListener("mouseup", releaseClick);
document.addEventListener("mousemove", mouseMoveHandler, false);
var curseur ={x:0, y:0, actif: false};
function releaseClick(e) {
 curseur.actif = false;
}

function pressClick(e) {
tirer();
 curseur.actif = true;

}
function mouseMoveHandler(e) {
 var relativeX = e.clientX - canvas.offsetLeft;
 var relativeY = e.clientY - canvas.offsetTop;

 if(relativeX > 0 && relativeX < canvas.width) {
   curseur.x=relativeX;
 }
  if(relativeY > 0 && relativeY < canvas.height) {
   curseur.y=relativeY;

 }


}