var config = {
  width: 800,
  height: 600,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:0},
            debug: false
        }
    },
scene: [preload, Scene0, Scene1, Scene2]
  };

var game = new Phaser.Game(config);