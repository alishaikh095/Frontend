'use client';

import Link from 'next/link';
import styles from './navLink.module.css';
import {usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {

    let pathName = usePathname()
    console.log(pathName);
    return (
        <Link href={href} className={pathName.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link}>
          {children}
        </Link>
    );
};

export default NavLink;