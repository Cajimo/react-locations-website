import React from 'react';
import coverVID from './../../assets/cover.mp4';
import classes from './Hero.module.scss';

import Button from '../../UI/Button/Button';

const Hero = () => {
  return (
    <section className={classes.container}>
      <video muted loop className={classes.video} id={'video'} src={coverVID} />
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          <h1 className={classes.hero__content__title}>
            the tropics are waiting
          </h1>
          <span className={classes.hero__content__tagline}>
            Let's us know when you're finished packing
          </span>
          <p className={classes.hero__content__description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            mollitia ut nesciunt delectus architecto numquam illo?
          </p>
          <div className={classes.hero__content__cta}>
            <Button>Book Now</Button>
            <Button outline>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
