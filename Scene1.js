class Scene1 extends Phaser.Scene {
  constructor(){
    super("magasin")
  }


init(){}

preload(){}

create(){
	lac = this.physics.add.staticGroup();
	objets = this.physics.add.staticGroup();

	this.add.image(400,300,'tente');
	lac.create(745,300,'tente2');
	lac.create(55,300,'tente2');
	lac.create(400,-20,'tente3');

	objets.create(275,350,'table');
	objets.create(505,350,'table');

	player = this.physics.add.sprite(400,460,'perso_droite');
	pv1 = this.add.image(630,20,'pv1').setScrollFactor(0);
	pv2 = this.add.image(680,20,'pv2').setScrollFactor(0);
	pv3 = this.add.image(730,20,'pv3').setScrollFactor(0);
	textJ = this.add.text(100,520, 'Press J to open the shop', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textI = this.add.text(100,580, 'Press I to view the inventory', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textATQ = this.add.text(100,560, 'Press Q or D to attack', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textSOIN = this.add.text(100,540, 'Press O to heal ', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	
	this.physics.add.collider(player,objets);
	this.physics.add.collider(player,lac);
	lac.setAlpha(0);
//INVENTAIRE

	inventaire = this.add.image(400,300,'inventaire').setScrollFactor(0);
	inventaire.visible = false; 
	textA = this.add.text(175,146,'Money : '+ argent, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textR = this.add.text(368,226, nbrR, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textB = this.add.text(176,386, nbrB, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textPOT = this.add.text(176,226, nbrPOT, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textPOT.visible = false; 
	textB.visible = false; 
	textR.visible = false; 
	textA.visible = false; 

//BOUTIQUE

	boutique = this.add.image(400,300,'boutique').setScrollFactor(0);
	boutique.visible = false;
	texteA = this.add.text(175,142, 'Money : '+ argent, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	texteR = this.add.text(368,222, nbrR, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	texteB = this.add.text(560,222, nbrB, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textePOT = this.add.text(176,222, nbrPOT, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	vendreR = this.add.text(358,374, 'Press X to sell', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	vendreB = this.add.text(550,374, 'Press C to sell', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	acheter = this.add.text(168,374, 'Press W to buy ', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textePOT.visible = false; 
	texteB.visible = false; 
	texteR.visible = false; 
	texteA.visible = false;
	vendreR.visible = false; 
	vendreB.visible = false; 
	acheter.visible = false;



    this.cameras.main.setBounds(0, 0, 400 * 2, 300 * 2);
    this.physics.world.setBounds(0, 0, 400 * 2, 300 * 2);
  	this.cameras.main.startFollow(player, true, 0.05, 0.05);

	pressd = this.input.keyboard.addKey('D');
	pressq = this.input.keyboard.addKey('Q');
	presspot = this.input.keyboard.addKey('O');
	pressi = this.input.keyboard.addKey('I');
	pressj = this.input.keyboard.addKey('J');
	pressw = this.input.keyboard.addKey('W');
	pressx = this.input.keyboard.addKey('X');
	pressc = this.input.keyboard.addKey('C');


	cursors = this.input.keyboard.createCursorKeys(); 
}


update(){
    if (cursors.up.isDown) {
      player.anims.play('anim_perso_haut', true);
      player.setVelocityY(-175);
      player.setVelocityX(0);
    }
    else if (cursors.down.isDown) {
      player.anims.play('anim_perso_bas', true);
      player.setVelocityY(175);
      player.setVelocityX(0);
    }
    else if (cursors.right.isDown) {
      player.anims.play('anim_perso_droite', true);
      player.setVelocityX(225);
      player.setVelocityY(0);
      player.setFlipX(false);
    }
    else if (cursors.left.isDown) {
      player.anims.play('anim_perso_droite', true);
      player.setVelocityX(-225);
      player.setVelocityY(0);
      player.setFlipX(true);
    }

    else if (cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp) {
      player.anims.play('anim_perso_stop', true);
      player.setVelocityX(0);
      player.setVelocityY(0);
     	if ( pressd.isDown) {
      player.anims.play('anim_perso_atq', true);
      player.setFlipX(false);
    	}
    	if( pressq.isDown) {
      player.anims.play('anim_perso_atq', true);
      player.setFlipX(true);
    	}
    }
if (pv == 2) {
	pv3.visible = false;
}
if (pv == 1) {
	pv2.visible = false;
}
if (pv == 0) {
	pv1.visible = false;
	this.scene.start("desert");
}	

if (presspot.isDown && nbrPOT > 0) {
	delay: 2000,
	nbrPOT = nbrPOT -1; 
	if (pv < 3){
		pv = pv +1;

		if (pv == 2) {
			pv2.visible = true;
		}
		if (pv == 3) {
			pv3.visible = true;
		}
	}
};

    if (pressi.isDown) {
		inventaire.visible = true;
		textPOT.visible = true; 
		textB.visible = true; 
		textR.visible = true; 
		textA.visible = true; 
    };

	if (pressi.isUp) {
		inventaire.visible = false;
		textPOT.visible = false; 
		textB.visible = false; 
		textR.visible = false; 
		textA.visible = false; 
    };


     if (player.x<420 && player.x>380 && player.y<600 && player.y>550) {
    	this.scene.start("desert");
    }
}























}