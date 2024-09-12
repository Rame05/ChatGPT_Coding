import React, {useState} from 'react';
import './Header.css'
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";

const navigation = [
    {name: 'Dashboard', href: '#', current: true},
    {name: 'Team', href: '#', current: false},
    {name: 'Projects', href: '#', current: false},
    {name: 'Calendar', href: '#', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Header() {

    const [isVisible, setVisible] = useState(true)

    return (
        <header>
            <div className="logo">
                <h1>Car Parts Store</h1>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search for parts..."/>
                <button>Search</button>
            </div>
            <div>
                <div onClick={() => setVisible(!isVisible)}>Menu</div>
                {/*<ul className="drop-down" style={isVisible? {display: "block"}: {display: 'none'}}>*/}
                {/*    <li><a href="#">Engine Parts</a></li>*/}
                {/*    <li><a href="#">Suspension</a></li>*/}
                {/*    <li><a href="#">Brakes</a></li>*/}
                {/*    <li><a href="#">Exhaust</a></li>*/}
                {/*    <li><a href="#">Lighting</a></li>*/}
                {/*</ul>*/}
                <Menu>
                    <MenuButton>My account</MenuButton>
                    <MenuItems anchor="bottom">
                        <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/settings">
                                Settings
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/support">
                                Support
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/license">
                                License
                            </a>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </header>
    );
}

export default Header;
