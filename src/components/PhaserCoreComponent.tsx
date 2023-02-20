import React from 'react';
import * as Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import MainScene from './scenes/MainScene';
import MenuScene from './scenes/MenuScene';
import { Menubar } from 'primereact/menubar';


class PhaserCoreComponent extends React.Component {

    config: Phaser.Types.Core.GameConfig;
    game!: Phaser.Game;
    mainScene!: Phaser.Scene;
    menuScene!: Phaser.Scene;
    bootScene!: Phaser.Scene;

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

    componentDidMount() {
        if (!this.game) {
            this.game = new Phaser.Game(this.config);
            this.game.scene.add('MainScene', MainScene, true)
            this.game.scene.add('MenuScene', MenuScene, true)
            this.game.scene.add('BootScene', BootScene, true)

            setTimeout(() => {
                this.mainScene = this.game.scene.scenes[0]
                this.menuScene = this.game.scene.scenes[1]
                this.bootScene = this.game.scene.scenes[2]

                this.mainScene.scene.pause()
                this.mainScene.scene.setVisible(false)
                this.menuScene.scene.pause()
                this.menuScene.scene.setVisible(false)

                this.bootScene.scene.bringToTop()
                this.bootScene.scene.resume()
                this.bootScene.scene.setVisible(true)
            }, 100)
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
                                    this.mainScene.scene.pause()
                                    this.mainScene.scene.setVisible(false)
                                    this.menuScene.scene.pause()
                                    this.menuScene.scene.setVisible(false)
                                    this.bootScene.scene.bringToTop()
                                    this.bootScene.scene.resume()
                                    this.bootScene.scene.setVisible(true)
                                }
                            },
                            {
                                label: 'MenuScene',
                                icon: 'pi pi-fw pi-user',
                                command: () => {
                                    this.mainScene.scene.pause()
                                    this.mainScene.scene.setVisible(false)
                                    this.bootScene.scene.pause()
                                    this.bootScene.scene.setVisible(false)
                                    this.menuScene.scene.bringToTop()
                                    this.menuScene.scene.resume()
                                    this.menuScene.scene.setVisible(true)
                                }
                            },
                            {
                                label: 'MainScene',
                                icon: 'pi pi-fw pi-user',
                                command: () => {
                                    this.menuScene.scene.pause()
                                    this.menuScene.scene.setVisible(false)
                                    this.bootScene.scene.pause()
                                    this.bootScene.scene.setVisible(false)
                                    this.mainScene.scene.bringToTop()
                                    this.mainScene.scene.resume()
                                    this.mainScene.scene.setVisible(true)
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