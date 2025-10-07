import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={classes.content}>
          <div className={classes.hero}>
            <h1 className={classes.title}>Al Ghani Foods for <span className={classes.highlight}>NextLevel Foodies</span></h1>
            <p className={classes.subtitle}>Your Craving Partner</p>
          </div>
          <div className={classes.cta}>
            <p className={classes.ctaText}>Order Here</p>
            <Link href="/meals" className={classes.ctaButton}>Check Menu</Link>
          </div>
        </div>
      </header>
    </>
  );
}
