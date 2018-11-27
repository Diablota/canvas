function genereImage(titre) {
	var img = new Image();
	img.src = titre + ".png";
	return img;
}

var bateau = genereImage("bateau");
var obstacle1 = genereImage ("obstacle1");
var obstacle2 = genereImage ("obstacle2");
var bombe = genereImage ("bombe");