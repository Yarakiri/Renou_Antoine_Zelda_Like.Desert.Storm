	var argent = 100;
	var nbrR = 0;
	var nbrB = 0;
	var nbrPOT = 0;
	var pv = 3;
	var mort = 0;
		
	var animal1;
	var animal2;
	var animal3;
	var animal4;
	var objets;
	var player;
	var pierreN;
	var cursors;
 	var lac;
 	var pv1;
	var pv2;
	var pv3;
	var monstre;
	var passage;
	var gemmeR;
	var gemmeB;
	var gemmeR1;
	var gemmeB1;
	var gemmeR2;
	var gemmeB2;
	var gemmeR3;
	var gemmeB3;
	var textR;
	var textB;
	var textPOT;
	var textA;
	var texteR;
	var texteB;
	var textePOT;
	var texteA;
	var textJ;
	var textI;
	var textSOIN;
	var textATQ;
	var inventaire;
	var boutique;
	var vendreR;
	var vendreB;
	var acheter;

//VAR CONTROLES
	var pressi;
	var pressd;
	var pressq;
	var pressj;
	var pressw;
	var pressx;
	var pressc;
	var presspot;

class preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }
  init(){}  
  preload(){
	this.load.image('sable1','assets/sable1.png');
	this.load.image('tente','assets/tente.png');
	this.load.image('tente2','assets/tente-D.png');
	this.load.image('tente3','assets/tente-H.png');
	this.load.image('lac','assets/lac.png');
	this.load.image('table','assets/table.png');
	this.load.image('lac2','assets/lac_invisible.png');
	this.load.image('lac3','assets/lac3.png');
	this.load.image('cactus1','assets/cactus1.png');
	this.load.image('cactus2','assets/cactus2.png');
	this.load.image('hutte','assets/hutte.png');
	this.load.image('hutte2','assets/hutte2.png');

	this.load.image('gemmeB','assets/gemme_B.png');
	this.load.image('gemmeR','assets/gemme_R.png');
	this.load.image('rocher1','assets/pierre.png');
	this.load.image('rocher2','assets/rocher.png');
	this.load.image('rocher3','assets/rocher2.png');
	this.load.image('plante1','assets/plante.png');
	this.load.image('plante2','assets/plante2.png');
	this.load.image('passage','assets/passage.png');
	this.load.image('cave','assets/cave.png');
	this.load.image('pierreN','assets/pierre_n.png');
	this.load.spritesheet('monstre_atq','assets/monstre_atq.png',{frameWidth: 192,frameHeight: 90});

	this.load.image('pv1','assets/coeur1.png');
	this.load.image('pv2','assets/coeur2.png');
	this.load.image('pv3','assets/coeur3.png');
	this.load.image('inventaire','assets/inventaire.png');
	this.load.image('boutique','assets/boutique.png');



	this.load.spritesheet('perso_droite','assets/perso_droite.png',{frameWidth: 47,frameHeight: 86});
    this.load.spritesheet('perso_bas','assets/perso_bas.png',{frameWidth: 50,frameHeight: 90});
    this.load.spritesheet('perso_haut','assets/perso_haut.png',{frameWidth: 45,frameHeight: 90});
    this.load.spritesheet('perso_stop','assets/perso_stop.png',{frameWidth: 48,frameHeight: 90});
 	this.load.spritesheet('perso_atq','assets/perso_atq.png',{frameWidth: 100,frameHeight: 90});
 	this.load.spritesheet('bete_atq','assets/bete_atq.png',{frameWidth: 85,frameHeight: 60});
 	this.load.spritesheet('bete1','assets/bete_1.png',{frameWidth: 85,frameHeight: 60});



}






create(){}
update(){this.scene.start("desert");}


}