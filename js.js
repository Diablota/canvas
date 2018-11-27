// initialisation
var canvas = document.getElementById("myCanvas");
if(!canvas)
{
    alert("Impossible de récupérer le canvas");
}

var context = canvas.getContext("2d");
if(!context)
{
    alert("Impossible de récupérer le context");
}

var diametreBalle = 20;
var posX_Joueur = 257;
var posY_Joueur = 196;
var max_ball = 20;
var posX = [];
var posY = [];
var vitesseX = [];
var vitesseY = [];
var posXBombe = [];
var posYBombe = [];

initialisationBalles(posX, posY, vitesseX, vitesseY, diametreBalle, max_ball);

// evènements
window.addEventListener("mousemove", function(e) {
   var relativeX = e.clientX - canvas.offsetLeft;
   var relativeY = e.clientY - canvas.offsetTop;
   if(relativeX > 0 && relativeX < canvas.width) {
       posX_Joueur=relativeX - 50;
   }
   if(relativeY > 0 && relativeY < canvas.height) {
       posY_Joueur=relativeY - 50;
   }
});

var myInterval = setInterval(animate, 1000/20);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
                   context.beginPath();

        for (var i = 0; i < posXBombe.length; i++) {

                context.drawImage(bombe, 0, 0, 682, 529, posXBombe[i],posYBombe[i], 68, 52);

        }
                          context.fill();

    for(i = 0; i <= max_ball - 1; i++) {
        context.beginPath();
        context.drawImage(bateau, 0, 0, 700, 700, posX_Joueur, posY_Joueur, 130, 100);
        context.drawImage(obstacle1, 0, 0, 736, 676, posX[i], posY[i], 70, 70);

        // context.drawImage(obstacle2, 0, 0, 846, 854, posX[i], posY[i], 50, 50);

    
        context.fill();

        if(isIncolisionCanvas(posX[i], 100, canvas.width)) {
          posX[i] = checkColision(posX[i], canvas.width, 100);
          vitesseX[i] = inverserVitesse(vitesseX[i]);
        }

        if(isIncolisionCanvas(posY[i], 100, canvas.height)) {
          posY[i] = checkColision(posY[i], canvas.height, 100);
          vitesseY[i] = inverserVitesse(vitesseY[i], 100);
        }
        deplaceTire();

        posX[i] = deplacement(posX[i], vitesseX[i]);
        posY[i] = deplacement(posY[i], vitesseY[i]);
    }
}