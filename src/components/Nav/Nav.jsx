import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../UI/Button/Button';

import classes from './Nav.module.scss';

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <NavLink to="/locations">Locations</NavLink>
        </li>
        <li onClick={menuToggle}>
          <NavLink to="/pricing">Princing</NavLink>
        </li>
        <li onClick={menuToggle}>
          <NavLink to="/learn-more">Learn More</NavLink>
        </li>
      </ul>
      <Button
        to="/book-now"
        outline
        className={classes.booknow}
        onClick={menuToggle}
      >
        Book Now
      </Button>
    </nav>
  );
};

export default Nav;
