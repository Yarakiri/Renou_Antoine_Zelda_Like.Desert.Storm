class Scene0 extends Phaser.Scene {
  constructor(){
    super("desert")
  }

init(){}

preload(){}



create(){

	objets = this.physics.add.staticGroup();
	lac = this.physics.add.staticGroup();




//BACKGROUND

	this.add.image(400,300,'sable1');
	this.add.image(400,900,'sable1');
	this.add.image(400,1500,'sable1');
	this.add.image(400,2100,'sable1');
	this.add.image(1200,300,'sable1');
	this.add.image(1200,900,'sable1');
	this.add.image(1200,1500,'sable1');
	this.add.image(1200,2100,'sable1');
	this.add.image(2000,300,'sable1');
	this.add.image(2000,900,'sable1');
	this.add.image(2000,1500,'lac');
	this.add.image(2000,2100,'sable1');
	this.add.image(2800,300,'sable1');
	this.add.image(2800,900,'sable1');
	this.add.image(2800,1500,'sable1');
	this.add.image(2800,2100,'sable1');	
	
	this.add.image(150,1350,'plante1');	
	this.add.image(320,1200,'plante1');
	this.add.image(570,1100,'plante1');
	this.add.image(840,1000,'plante1');
	this.add.image(1120,850,'plante1');
	this.add.image(1310,700,'plante1');
	this.add.image(570,150,'plante1');
	this.add.image(700,320,'plante1');
	this.add.image(400,570,'plante1');
	this.add.image(900,840,'plante1');
	this.add.image(980,1120,'plante1');
	this.add.image(400,1360,'plante1');
	this.add.image(980,1510,'plante1');


	this.add.image(100,600,'plante2');	
	this.add.image(950,1200,'plante2');
	this.add.image(1200,1100,'plante2');
	this.add.image(1710,1000,'plante2');
	this.add.image(2100,1850,'plante2');
	this.add.image(470,1950,'plante2');
	this.add.image(2570,550,'plante2');
	this.add.image(2600,1500,'plante2');
	this.add.image(2600,340,'plante2');
	this.add.image(2550,780,'plante2');
	this.add.image(980,210,'plante2');
	this.add.image(900,2000,'plante2');
	this.add.image(2000,2000,'plante2');


	this.add.image(50,2250,'passage');

	objets.create(500,1350,'cactus1');	
	objets.create(300,700,'cactus1');
	objets.create(1700,100,'cactus1');
	objets.create(2350,200,'cactus1');
	objets.create(380,2150,'cactus1');
	objets.create(1470,2100,'cactus1');
	objets.create(2570,1250,'cactus2');
	objets.create(900,1050,'cactus2');
	objets.create(400,1540,'cactus2');
	objets.create(1900,2200,'cactus2');
	objets.create(50,1900,'cactus2');
	objets.create(2850,2150,'cactus2');
	objets.create(2600,900,'cactus2');

	objets.create(1800,950,'hutte');	
	objets.create(1400,1450,'hutte2');
	objets.create(2600,1550,'hutte2');

	objets.create(50,2050,'rocher1');	
	objets.create(50,2400,'rocher1');

	objets.create(300,1350,'rocher3');	
	objets.create(1800,200,'rocher3');
	objets.create(1000,100,'rocher3');
	objets.create(1350,600,'rocher3');
	objets.create(380,850,'rocher3');
	objets.create(470,1700,'rocher3');
	objets.create(1370,550,'rocher3');
	objets.create(1700,450,'rocher3');
	objets.create(400,1340,'rocher3');
	objets.create(2500,650,'rocher3');
	objets.create(1950,710,'rocher3');
	objets.create(400,150,'rocher3');
	objets.create(2700,1900,'rocher3');

	objets.create(1300,350,'rocher2');	
	objets.create(800,1200,'rocher2');
	objets.create(100,100,'rocher2');
	objets.create(350,1000,'rocher2');
	objets.create(1380,850,'rocher2');
	objets.create(1570,700,'rocher2');
	objets.create(1570,550,'rocher2');
	objets.create(700,1450,'rocher2');
	objets.create(2400,1040,'rocher2');
	objets.create(900,1950,'rocher2');
	objets.create(2450,410,'rocher2');
	objets.create(400,1150,'rocher2');
	objets.create(200,1900,'rocher2');

	objets.create(900,1350,'rocher1');	
	objets.create(300,300,'rocher1');
	objets.create(1000,100,'rocher1');
	objets.create(1350,200,'rocher1');
	objets.create(380,1850,'rocher1');
	objets.create(1470,700,'rocher1');
	objets.create(2570,350,'rocher1');
	objets.create(2900,1050,'rocher1');
	objets.create(400,1040,'rocher1');
	objets.create(1900,1950,'rocher1');
	objets.create(950,1910,'rocher1');
	objets.create(2400,2150,'rocher1');
	objets.create(2600,1900,'rocher1');



	lac.create(2000,1500,'lac2');
	lac.create(1970,1300,'lac3');




	animal1 = this.physics.add.sprite(400,700,'bete_atq');
	animal2 = this.physics.add.sprite(800,1700,'bete_atq');
	animal3 = this.physics.add.sprite(1500,400,'bete_atq');
	animal4 = this.physics.add.sprite(2600,2300,'bete_atq');
	player = this.physics.add.sprite(1800,1200,'perso_droite');
	player.setCollideWorldBounds(true);


	this.physics.add.collider(player,lac);
	this.physics.add.collider(player,objets);
	this.physics.add.collider(player,animal1,atq1, null, this);
	this.physics.add.collider(player,animal1,def, null, this);
	this.physics.add.collider(player,animal2,atq2, null, this);
	this.physics.add.collider(player,animal2,def, null, this);
	this.physics.add.collider(player,animal3,atq3, null, this);
	this.physics.add.collider(player,animal3,def, null, this);
	this.physics.add.collider(player,animal4,atq4, null, this);
	this.physics.add.collider(player,animal4,def, null, this);

	pv1 = this.add.image(630,20,'pv1').setScrollFactor(0);
	pv2 = this.add.image(680,20,'pv2').setScrollFactor(0);
	pv3 = this.add.image(730,20,'pv3').setScrollFactor(0);
	textI = this.add.text(0,580, 'Press I to view the inventory', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textATQ = this.add.text(0,560, 'Press Q or D to attack', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textSOIN = this.add.text(0,540, 'Press O to heal ', {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	inventaire = this.add.image(400,300,'inventaire').setScrollFactor(0);
	inventaire.visible = false; 
	textA = this.add.text(175,146, 'Money : '+ argent, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textR = this.add.text(368,226, nbrR, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textB = this.add.text(176,386, nbrB, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textPOT = this.add.text(176,226, nbrPOT, {fontSize: '10px', fill:'#000'}).setScrollFactor(0);
	textPOT.visible = false; 
	textB.visible = false; 
	textR.visible = false; 
	textA.visible = false; 
	lac.setAlpha(0);








// CONTROLES

    this.cameras.main.setBounds(0, 0, 1500 * 2, 1200 * 2);
    this.physics.world.setBounds(0, 0, 1500 * 2, 1200 * 2);
  	this.cameras.main.startFollow(player, true, 0.05, 0.05);

	pressi = this.input.keyboard.addKey('I');
	pressd = this.input.keyboard.addKey('D');
	pressq = this.input.keyboard.addKey('Q');
	presspot = this.input.keyboard.addKey('O');
	cursors = this.input.keyboard.createCursorKeys(); 


    this.anims.create({
      key:'anim_perso_droite',
      frames: this.anims.generateFrameNumbers('perso_droite', {start: 0, end: 6}),
      frameRate: 6,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_bas',
      frames: this.anims.generateFrameNumbers('perso_bas', {start: 0, end: 1}),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_haut',
      frames: this.anims.generateFrameNumbers('perso_haut', {start: 0, end: 1}),
      frameRate: 2,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_stop',
      frames: this.anims.generateFrameNumbers('perso_stop', {start: 0, end: 0}),
      frameRate: 1,
      repeat: -1
    });

    this.anims.create({
      key:'anim_perso_atq',
      frames: this.anims.generateFrameNumbers('perso_atq', {start: 0, end: 0}),
      frameRate: 1,
      repeat: -1
    });

    this.anims.create({
      key:'anim_bete_atq',
      frames: this.anims.generateFrameNumbers('bete_atq', {start: 0, end: 1}),
      frameRate: 2,
      repeat: 1
    });

    gemmeR = this.physics.add.group({
		key: 'gemmeR',
	});

	gemmeB = this.physics.add.group({
		key: 'gemmeB',
	});
	gemmeR1 = this.physics.add.group({
		key: 'gemmeR',
	});

	gemmeB1 = this.physics.add.group({
		key: 'gemmeB',
	});
	gemmeR2 = this.physics.add.group({
		key: 'gemmeR',
	});

	gemmeB2 = this.physics.add.group({
		key: 'gemmeB',
	});
	gemmeR3 = this.physics.add.group({
		key: 'gemmeR',
	});

	gemmeB3 = this.physics.add.group({
		key: 'gemmeB',
	});
	this.physics.add.overlap(player,gemmeR,collectR, null, this);
	this.physics.add.overlap(player,gemmeB,collectB, null, this);
	this.physics.add.overlap(player,gemmeR1,collectR, null, this);
	this.physics.add.overlap(player,gemmeB1,collectB, null, this);
	this.physics.add.overlap(player,gemmeR2,collectR, null, this);
	this.physics.add.overlap(player,gemmeB2,collectB, null, this);
	this.physics.add.overlap(player,gemmeR3,collectR, null, this);
	this.physics.add.overlap(player,gemmeB3,collectB, null, this);
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


if (animal1.setVelocityX(0) && animal1.setVelocityY(0)) {
        animal1.anims.play('anim_bete_atq', true);
}
 if (animal2.setVelocityX(0) && animal2.setVelocityY(0)) {
        animal2.anims.play('anim_bete_atq', true);
}
if (animal3.setVelocityX(0) && animal3.setVelocityY(0)) {
        animal3.anims.play('anim_bete_atq', true);
}
 if (animal4.setVelocityX(0) && animal4.setVelocityY(0)) {
        animal4.anims.play('anim_bete_atq', true);
}




if (pv == 2) {
		pv3.visible = false;
	}
if (pv == 1) {
		pv2.visible = false;
	}
if (pv == 0) {
		pv1.visible = false;
		player.setTint(0xff0000);
	

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
	inventaire.visible=false;
	textPOT.visible = false; 
	textB.visible = false; 
	textR.visible = false; 
	textA.visible = false; 
     };

	if (player.x<1830 && player.x>1770 && player.y<1200 && player.y>1180) {
    	this.scene.start("magasin");
    }
    if (mort = 3){
    	if (player.x<50 && player.x>0 && player.y<2400 && player.y>2100) {
    		this.scene.start("cave");
    	}
    }
}
}





function atq1(player, animal1){

	if (pressd.isDown){
		if(animal1.disableBody(true,true)){
		mort = mort +1;
		gemmeR.setXY((x=520),(y=700));
		}
	}
	if (pressq.isDown){
		if(animal1.disableBody(true,true)){
		mort = mort +1;			
		gemmeB.setXY((x=220),(y=700));
		}
	}
}
function atq2(player, animal2){

	if (pressd.isDown){
		if(animal2.disableBody(true,true)){
		mort = mort +1;
		gemmeR1.setXY((x=1020),(y=1700));		
		}
	}
	if (pressq.isDown){
		if(animal2.disableBody(true,true)){
		mort = mort +1;
		gemmeB1.setXY((x=600),(y=1700));
		}
	}
}
function atq3(player, animal3){

	if (pressd.isDown){
		if(animal3.disableBody(true,true)){
		mort = mort +1;
		gemmeR2.setXY((x=1720),(y=400));
		}
	}
	if (pressq.isDown){
		if(animal3.disableBody(true,true)){
		mort = mort +1;			
		gemmeB2.setXY((x=1320),(y=400));
		}
	}
}
function atq4(player, animal4){

	if (pressd.isDown){
		if(animal4.disableBody(true,true)){
		mort = mort +1;			
		gemmeR3.setXY((x=2720),(y=2300));
		}
	}
	if (pressq.isDown){
		if(animal4.disableBody(true,true)){
		mort = mort +1;			
		gemmeB3.setXY((x=2420),(y=2300));
		}
	}
}

function def(player, animal1){

 if (pv > 0){
		pv -= 1;
	}
	delay: 2000;
}

function def(player, animal2){

 if (pv > 0){
		pv -= 1;
	}
	delay: 2000;
}


function def(player, animal3){

 if (pv > 0){
		pv -= 1;
	}
	delay: 2000;
}

function def(player, animal4){

 if (pv > 0){
		pv -= 1;
	}
	delay: 2000;
}




function collectR(player, gemmeR){
	gemmeR.disableBody(true,true);
	nbrR = nbrR +1;
	textR.setText(nbrR);
}
function collectB(player, gemmeB){
	gemmeB.disableBody(true,true);
	nbrB = nbrB +1;
	textB.setText(nbrB);
}
function collectR(player, gemmeR1){
	gemmeR1.disableBody(true,true);
	nbrR = nbrR +1;
	textR.setText(nbrR);
}
function collectB(player, gemmeB1){
	gemmeB1.disableBody(true,true);
	nbrB = nbrB +1;
	textB.setText(nbrB);
}
function collectR(player, gemmeR2){
	gemmeR2.disableBody(true,true);
	nbrR = nbrR +1;
	textR.setText(nbrR);
}
function collectB(player, gemmeB2){
	gemmeB2.disableBody(true,true);
	nbrB = nbrB +1;
	textB.setText(nbrB);
}
function collectR(player, gemmeR3){
	gemmeR3.disableBody(true,true);
	nbrR = nbrR +1;
	textR.setText(nbrR);
}
function collectB(player, gemmeB3){
	gemmeB3.disableBody(true,true);
	nbrB = nbrB +1;
	textB.setText(nbrB);
}