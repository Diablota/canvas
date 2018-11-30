

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