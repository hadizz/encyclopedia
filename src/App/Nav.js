import React from 'react';
import { NavWrapper, NavItem } from './Components';

const Nav = () => {
  return (
    <nav>
      <NavWrapper>
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
