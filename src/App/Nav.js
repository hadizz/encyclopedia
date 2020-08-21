import React from 'react';
import { NavWrapper, NavItem, AppName } from './Components';

const Nav = () => {
  return (
    <nav>
      <NavWrapper>
        <AppName>Encyclopedia</AppName>
        <li>
          <NavItem to="/">Search</NavItem>
        </li>
        <li>
          <NavItem to="/country">Countries</NavItem>
        </li>
      </NavWrapper>
    </nav>
  );
};

export default Nav;
