import React from "react";
import styles from "../styles/QuestCard.module.css"
import {Lexend} from '@next/font/google'
import router from "next/router";


/** joinedClassName explanation: The background image is determined by the classname we pass in. The classnames are conjoined 
 * with the CSS for the card container as a component.
 */

const lexend = Lexend({subsets: ["latin"],weight: "300"})

const QuestCard = ({title, cardName, logoImage, description, buttonText, buttonLink}) => {


  return (
    <div className={cardName}>
        <img src={logoImage} className={styles.logoImage} />
        <p><b>{title}</b></p>
        <p>{description}</p>
        <button onClick={() => router.push(buttonLink)}>{buttonText}</button>
    </div>
  );
};

export default QuestCard;