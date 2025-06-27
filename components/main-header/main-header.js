import Link from "next/link";
import logoImg from "@/assets/logo.png";

import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-bg";  
import NavLink from "../navLink/navLink";
import CartButton from "../cartButton/cartButton";
import AppProvider from "../provider/provider";


export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A Plate with food on it" priority />
          Al Ghani Foods
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
            {/* <li>
              <NavLink href="/add-meals">Add Meals</NavLink>
            </li> */}
            <li>
                      <AppProvider>
                              <CartButton />
                      </AppProvider>
       
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
