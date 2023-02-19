import PhaserCoreComponent from "./PhaserCoreComponent";

class Phaser001Component extends PhaserCoreComponent {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 'Hello, ***world***!'
        };
    }

    handleChange(e: { target: { value: any; }; }) {
        this.setState({ value: e.target.value });
    }

    override preload(scene: Phaser.Scene) {
        scene.load.image('gem', 'favicon.ico');
    }

    override create(scene: Phaser.Scene) {
        const text = scene.add.text(350, 250, '', { font: '16px Courier', backgroundColor: '#000000' });
        const gem = scene.add.image(300, 300, 'gem');

        //  Store some data about this Gem:
        gem.setDataEnabled();

        gem.data.set('name', 'Red Gem Stone 001');
        gem.data.set('level', 2);
        gem.data.set('owner', 'Link');
        gem.data.set('gold', 50);

        text.setText([
            'Name: ' + gem.data.get('name'),
            'Level: ' + gem.data.get('level'),
            'Value: ' + gem.data.get('gold') + ' gold',
            'Owner: ' + gem.data.get('owner')
        ]);

        //  Whenever the 'gold' property is updated we call this function AFTER the change has happened:
        gem.on('changedata-gold', function (gameObject: any, value: any) {
            if (value > 500) {
                gameObject.data.values.gold = 500;
            }
            else {
                text.setText([
                    'Name: ' + gem.data.get('name'),
                    'Level: ' + gem.data.get('level'),
                    'Value: ' + gem.data.get('gold') + ' gold',
                    'Owner: ' + gem.data.get('owner')
                ]);
            }
        });

        //  Change the 'value' property when the mouse is clicked
        scene.input.on('pointerdown', function () {
            gem.data.values.gold += 100;
        });
    }

    override update(scene: Phaser.Scene) {
    }
}

export default Phaser001Component