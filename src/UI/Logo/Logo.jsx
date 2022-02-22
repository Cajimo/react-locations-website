import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.module.scss';
import LeafSVG from '../../assets/LeafSVG';

const Logo = () => {
  return (
    <Link to="/" className={classes.logo}>
      <LeafSVG fillColor={'white'} />
      <span>Tropic</span>
    </Link>
  );
};

export default Logo;
