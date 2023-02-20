class MainScene extends Phaser.Scene {
    cody!: Phaser.GameObjects.Sprite;

    constructor() {
        super('MainScene');
    }

    init() {
        // Used to prepare data
        console.log(this)
    }

    preload() {
        // Used for preloading assets into your scene, such as
        // • images
        // • sounds
        this.load.spritesheet({
            key: 'brawler',
            url: '/my-react-app/assets/animations/brawler48x48.png',
            frameConfig: {
                frameWidth: 48,
                frameHeight: 48
            }
        });
    }

    create(data: any) {
        // Used to add objects to your game
        this.add.image(0, 0, 'brawler', '__BASE').setOrigin(0, 0);

        // Animation set
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [0, 1, 2, 3] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [5, 6, 7, 8] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'kick',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [10, 11, 12, 13, 10] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 2000
        });

        this.anims.create({
            key: 'punch',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [15, 16, 17, 18, 17, 15] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 2000
        });

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [20, 21, 22, 23] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'jumpkick',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [20, 21, 22, 23, 25, 23, 22, 21] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'win',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [30, 31] }),
            frameRate: 8,
            repeat: -1,
            repeatDelay: 2000
        });

        this.anims.create({
            key: 'die',
            frames: this.anims.generateFrameNumbers('brawler', { frames: [35, 36, 37] }),
            frameRate: 8,
        });

        const keys = ['walk', 'idle', 'kick', 'punch', 'jump', 'jumpkick', 'win', 'die'];

        this.cody = this.add.sprite(600, 370, '');
        this.cody.setScale(-1);
        this.cody.play('walk');
    }

    rotate = 0

    update(time: any, delta: any) {
        // Used to update your game. This function runs constantly
        this.rotate += 0.02
        this.cody.setRotation(this.rotate)
    }
}

export default MainScene;