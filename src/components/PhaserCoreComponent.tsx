import React from 'react';
import * as Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import MainScene from './scenes/MainScene';
import MenuScene from './scenes/MenuScene';
import { Menubar } from 'primereact/menubar';


class PhaserCoreComponent extends React.Component {

    config: Phaser.Types.Core.GameConfig;
    game: any;

    constructor(props: {} | Readonly<{}>) {
        super(props);

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
            scene: [
            ]
        };

        this.state = {
            label: "default",
            seconds: 0
        };
    }

    init(scene: Phaser.Scene) {
        console.log("Not implemented")
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
            this.game.scene.add('MainScene', MainScene, true)
            this.game.scene.add('MenuScene', MenuScene, true)
            this.game.scene.add('BootScene', BootScene, true)
        }
    }

    componentWillUnmount() {
    }

    render() {
        const items = [
            {
                label: 'Phaser',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Phaser',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'BootScene',
                                icon: 'pi pi-fw pi-user',
                                command: () => {
                                    this.game.scene.bringToTop("BootScene")
                                }
                            },
                            {
                                label: 'MenuScene',
                                icon: 'pi pi-fw pi-user',
                                command: () => {
                                    this.game.scene.bringToTop("MenuScene")
                                }
                            },
                            {
                                label: 'MainScene',
                                icon: 'pi pi-fw pi-user',
                                command: () => {
                                    this.game.scene.bringToTop("MainScene")
                                }
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
        const start = <img alt="logo" src="https://primereact.org/images/logo.png" height="40" className="mr-2"></img>;

        return (
            <div>
                <Menubar model={items} start={start} />
                <div id="phaser-container"></div>
            </div>
        );
    }
}

export default PhaserCoreComponent 