import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const menuStyle = { 'borderRadius': 0 };

export function NavBar() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  useEffect(() => {
    setActiveItem(window.location.pathname.slice(1).split('/').pop());
  }, []);

  return (
    <Menu size='large' stackable inverted style={menuStyle}>
      <Menu.Item>
        <img src={logo} alt='logo' />
      </Menu.Item>
      <Menu.Item as={Link} to='/2018-2019/dcs/dev_176/'
        name=''
        color='blue'
        active={activeItem === ''}
        onClick={handleItemClick}
      >
        Cancellations
        </Menu.Item>
      <Menu.Item as={Link} to='/2018-2019/dcs/dev_176/game'
        name='game'
        color='blue'
        active={activeItem === 'game'}
        onClick={handleItemClick}
      >
        Game
        </Menu.Item>
      <Menu.Item as={Link} to='/2018-2019/dcs/dev_176/add'
        name='add'
        color='blue'
        active={activeItem === 'add'}
        onClick={handleItemClick}
      >
        <Icon name='plus' size='small' />
      </Menu.Item>
    </Menu>
  )
}