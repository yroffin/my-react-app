class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    init() {
        // Used to prepare data
    }

    preload() {
        // Used for preloading assets into your scene, such as
        // • images
        // • sounds
        this.load.image('pic', '/my-react-app/assets/pics/a-new-link-to-the-past-by-ptimm.jpg');
        this.load.image('logo', '/my-react-app/assets/sprites/phaser3-logo.png');
    }

    create(data: any) {
        this.add.image(400, 300, 'pic');
        const logo = this.add.image(400, 200, 'logo')
            .setVisible(false);

        //  Let's show the logo when the camera shakes, and hide it when it completes
        this.cameras.main.on('camerashakestart', function () {
            logo.setVisible(true);
        });

        this.cameras.main.on('camerashakecomplete', function () {
            logo.setVisible(false);
        });

        //  Every time you click, shake the camera
        this.input.on('pointerdown', () => {
            this.cameras.main.shake(500);
        }, this);
    }

    update(time: any, delta: any) {
        // Used to update your game. This function runs constantly
    }
}

export default MenuScene;