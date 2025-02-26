import Link from "next/link";
import React, { useState } from "react";
import { Press_Start_2P } from "@next/font/google";
import styles from "../styles/Home.module.css";

// const pressPlayFont = Press_Start_2P({ subsets: ['latin'], weight: '400' })

export default function Nav() {
  const [mobileNavActive, setNavActive] = useState(false);
  const navLinkClass = [styles.navLink].join(" ");
  return (
    <>
      <div className={styles.mobileNavBarLayout}>
        <img
          onClick={() => setNavActive(!mobileNavActive)}
          className={styles.mobileHamburger}
          src={"/hamburger_pink.svg"}
        ></img>
      </div>

      {mobileNavActive ? (
        <div className={styles.mobileNavBarLinkContainer}>
           <Link href="/" className={styles.mobileNavBarLink}>
            home
          </Link>
          <Link href="/about" className={styles.mobileNavBarLink}>
            about
          </Link>
        </div>
      ) : (
        /** Desktop NavBar  */
        <div className={styles.navBar}>
          <div className={styles.navLinksContainer}>
            <Link href="/" className={navLinkClass}>
              home
            </Link>

            <Link href="/about" className={navLinkClass}>
              about
            </Link>
            <Link
              href="https://www.subscribepage.io/nostalgiacafesf"
              className={navLinkClass}
            >
              updates
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
