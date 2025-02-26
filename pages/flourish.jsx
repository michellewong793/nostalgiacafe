import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/About.module.css";

import { Lexend } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>nostalgia</title>
        <meta
          name="about us"
          content="Learn more about the nostalgia cafe team, mission, and values."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Nav />
        <div className={styles.landingContainer}>
         <p> our first flourish poetry circle will be sometime in march 2025. please stay tuned in our newsletter to stay up to date on events.</p>
         <p> we are looking for WOC poets, comedians, storytellers, and more, to come together and share stories, write, and be in community.</p>
         <p>what nostalgia do we want to recreate in this moment? </p>
         <p> the feeling of being with your friends, journaling in the evening with candles, tea, cookies, and warm blankets. soft and fuzzy. </p>
        <p> announcements to come in newsletter on how to sign up! </p>
        </div>
        <img src="/waves.svg" className={styles.waveImage} />
      </div>
    </>
  );
}
