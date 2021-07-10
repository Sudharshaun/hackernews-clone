import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default function NavBar(props) {
    const [activeItem, setactiveItem] = useState("top");
    const handleItemClick = (event, {name}) => {
        //TODO: handle logic to fetch
        setactiveItem(name);
        props.setTab(name);
    }
    return (
        <Menu color='pink' fixed='top' widths={3}>
            <Menu.Item
            name='top'
            active={activeItem === 'to'}
            onClick={handleItemClick}
            >
            Top Stories
            </Menu.Item>
            <Menu.Item
            name='new'
            active={activeItem === 'new'}
            onClick={handleItemClick}
            >
            Latest Stories
            </Menu.Item>
            <Menu.Item
            name='best'
            active={activeItem === 'best'}
            onClick={handleItemClick}
            >
            Best Stories
            </Menu.Item>
        </Menu>
    )
} 