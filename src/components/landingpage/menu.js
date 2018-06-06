import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Menubar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item header>Ezing</Menu.Item>
                <Menu.Item name='services' active={activeItem === 'services'} onClick={this.handleItemClick} />
                <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
                <Menu.Item name='contact us' active={activeItem === 'contact us'} onClick={this.handleItemClick} />
            </Menu>
        )
    }
}