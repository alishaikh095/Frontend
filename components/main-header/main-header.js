import Link from "next/link";
import logoImg from "@/assets/logo.png";

import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-bg";
import NavLink from "../navLink/navLink";
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A Plate with food on it" priority />
          NextLevel Foods
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
            <li>
              <NavLink href="/add-meals">Add Meals</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
