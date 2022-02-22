import React from 'react';
import coverVID from './../../assets/cover.mp4';
import classes from './Hero.module.scss';

import Button from '../../UI/Button/Button';

const HomePageContent = () => {
  return (
    <>
      <h1 className={classes.hero__content__title}>the tropics are waiting</h1>
      <span className={classes.hero__content__tagline}>
        Let's us know when you're finished packing
      </span>
      <p className={classes.hero__content__description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
        mollitia ut nesciunt delectus architecto numquam illo?
      </p>
      <div className={classes.hero__content__cta}>
        <Button to="/book-now">Book Now</Button>
        <Button to="/learn-more" outline>
          Learn More
        </Button>
      </div>
    </>
  );
};

const Hero = ({ isDynamic, children }) => {
  return (
    <section className={classes.container}>
      <video
        autoPlay={true}
        muted
        loop
        className={classes.video}
        id={'video'}
        src={coverVID}
      />
      <div className={classes.hero}>
        <div className={classes.hero__content}>
          {!isDynamic && <HomePageContent />}
          {isDynamic && (
            <h1 className={classes.hero__content__title}>{children}</h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
