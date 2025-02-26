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
          <p className={styles.subheader}>nostalgia cafe</p>

          <br />

          <p>we believe in kindness.</p>
          <p>
            we believe in authenticity, transparency, and sharing your story.{" "}
          </p>
          <p>we believe in building tools to help people succeed. </p>
          <p> we take care of ourselves, each other, and the earth. </p>
          <p> we believe in having fun 🤪 </p>
        </div>
        <img src="/waves.svg" className={styles.waveImage} />
      </div>
    </>
  );
}
