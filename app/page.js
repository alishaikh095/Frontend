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
        <div>
          <div className={classes.hero}>
            <h1>Al Ghani Foods for NextLevel Foodies</h1>
            <p>Your Craving partner</p>
          </div>
          <div className={classes.cta}>
            <p>Order Here</p>
            <Link href="/meals">Check Menu</Link>
          </div>
        </div>
      </header>
    </>
  );
}
