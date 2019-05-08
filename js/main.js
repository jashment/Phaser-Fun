var game = new Phaser.Game(640, 360, Phaser.AUTO)
var GameState = {
    preload: function() {
        this.load.image('background', 'assets/images/background.png')
        this.load.image('chicken', 'assets/images/chicken.png')
        this.load.image('horse', 'assets/images/horse.png')
        this.load.image('pig', 'assets/images/pig.png')
        this.load.image('sheep', 'assets/images/sheep.png')
        this.load.image('arrow', 'assets/images/arrow.png')
    },
    create: function() {

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true

        this.background = this.game.add.sprite(0, 0, 'background')

        this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow')
        this.rightArrow.anchor.setTo(0.5)
        this.rightArrow.customParams = {direction: 1}

        this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow')
        this.leftArrow.anchor.setTo(0.5)
        this.leftArrow.scale.x = -1
        this.leftArrow.customParams = {direction: -1}

        //Animal Group
        var animalData = [
            {key: 'chicken', text: 'CHICKEN'},
            {key: 'horse', text: 'HORSE'},
            {key: 'pig', text: 'PIG'},
            {key: 'sheep', text: 'SHEEP'},
        ]

        //user input
        this.leftArrow.inputEnabled = true
        this.leftArrow.input.pixelPerfectClick = true
        this.leftArrow.event.onInputDown.add(this.switchAnimal, this)

        this.rightArrow.inputEnabled = true
        this.rightArrow.input.pixelPerfectClick = true
        this.rightArrow.event.onInputDown.add(this.switchAnimal, this)

        this.pig.inputEnables = true
        this.pig.input.pixelPerfectClick = true
        this.pig.even.onInputDown.add(this.animateAnimal, this)

        this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken')
        this.chicken.anchor.setTo(0.5)

        //Make chicken bigger by 1.5x
        this.chicken.scale.setTo(1.5)

        this.horse = this.game.add.sprite(500, 300, 'horse')
        
        this.pig = this.game.add.sprite(120, 10, 'pig')
        this.pig.anchor.setTo(0.5)
        this.pig.scale.setTo(-1, 1)
        
        this.sheep = this.game.ad.sprite(100, 250, 'sheep')
        this.sheep.scale.setTo(0.5)
        this.sheep.anchor.setTo(0.5)
        this.sheep.angle = -45
    },
    update: function() {
        switchAnimal: function(sprite, event) {
            console.log('move animal')
        },
        animateAnimal: function(sprite, event) {
            console.log('animate animal')
        }
    }
}

game.state.add('GameState', GameState)
game.state.start('GameState')