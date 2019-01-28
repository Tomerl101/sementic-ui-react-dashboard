import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          <img src={logo} alt='logo' />
        </Menu.Item>

        <Menu.Item as={Link} to='/'
          name='cancellations'
          active={activeItem === 'cancellations'}
          onClick={this.handleItemClick}
        >
          Cancellations
        </Menu.Item>

        <Menu.Item as={Link} to='/card'
          name='card'
          active={activeItem === 'card'}
          onClick={this.handleItemClick}
        >
          Card
        </Menu.Item>

        <Menu.Item as={Link} to='/add'
          name='+'
          active={activeItem === '+'}
          onClick={this.handleItemClick}
        >
          <Icon name='plus' size='small' />
        </Menu.Item>
      </Menu>
    )
  }
}

export default NavBar