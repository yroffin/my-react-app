import React from "react";

import { useNavigate, Route, Routes } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import Phaser001Component from "./Phaser001Component";

function MenuComponentHook() {
    const navigate = useNavigate();
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
                            label: 'Phaser000',
                            icon: 'pi pi-fw pi-user',
                            command: () => {
                                navigate("/Phaser000");
                            }
                        },
                        {
                            label: 'Phaser001',
                            icon: 'pi pi-fw pi-user',
                            command: () => {
                                navigate("/Phaser001");
                            }
                        },
                        {
                            label: 'Phaser002',
                            icon: 'pi pi-fw pi-user',
                            command: () => {
                                navigate("/Phaser002");
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
    const end = <InputText placeholder="Search" type="text" />;
    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
            <Routes>
                <Route path="/Phaser000" element={<Phaser001Component />} />
                <Route path="/Phaser001" element={<Phaser001Component />} />
                <Route path="/Phaser002" element={<Phaser001Component />} />
                <Route path="*" element={<Phaser001Component />} />
            </Routes>
        </div>
    );
}

class MenuComponent extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 'Hello, **world**!'
        };
    }

    handleChange(e: { target: { value: any; }; }) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <MenuComponentHook></MenuComponentHook>
        );
    }
}

export default MenuComponent