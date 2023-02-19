import React from 'react';
import * as Phaser from 'phaser';


class PhaserCoreComponent extends React.Component {

    config: Phaser.Types.Core.GameConfig;
    game: any;

    constructor(props: {} | Readonly<{}>) {
        super(props);

        let scene: Phaser.Types.Scenes.CreateSceneFromObjectConfig = {
            create: function (this: Phaser.Scene) {
                let scene: any = this
                return scene.component.create(this)
            },
            preload: function (this: Phaser.Scene) {
                let scene: any = this
                return scene.component.preload(this)
            },
            update: function (this: Phaser.Scene) {
                let scene: any = this
                return scene.component.update(this)
            },
            extend: {
                component: this
            }
        }

        this.config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: 'phaser-container',
            scale: {
                mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
                width: 800,
                height: 600
            },
            physics: {
                default: 'matter'
            },
            scene
        };

        this.state = {
            label: "default",
            seconds: 0
        };
    }

    preload(scene: Phaser.Scene) {
        console.log("Not implemented")
    }

    create(scene: Phaser.Scene) {
        console.log("Not implemented")
    }

    update(scene: Phaser.Scene) {
        console.log("Not implemented")
    }

    componentDidMount() {
        if (!this.game) {
            this.game = new Phaser.Game(this.config);
        }
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <div id="phaser-container"></div>
            </div>
        );
    }
}

export default PhaserCoreComponent 