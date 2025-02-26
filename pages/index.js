import Head from 'next/head'
import Nav from '../components/Nav'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import QuestCard from '../components/QuestCard'
import cardStyles from '../styles/QuestCard.module.css'

import { useRouter } from 'next/router'

import { Lexend, Lato } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({
  subsets: ['latin'],
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
})

const latoBold = Lato({
  subsets: ['latin'],
  weight: ['700', '900'],
})

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>nostalgia</title>
        <meta
          name="description"
          content="making welcoming san francisco creative community"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Nav />
        <div className={styles.landingContainer}>
          <h1 className={`${lexend.className} ${styles.header}`}>
            nostalgia cafe
          </h1>
          <br />
          <p className={`${lato.className} ${styles.subheader}`}>
            a coworking space for creatives with a focus on emerging and casual
            artists. we currently focus on music, spoken word, and the visual
            arts.
          </p>

          <br />
          <div className={styles.smallFlexColumn}>
            {/* <Link href="#firstQuest" className={styles.activeQuestTextBox}>join us</Link> */}
            <br />
            <Link href="#firstQuest" className={styles.activeQuestText}>
            stay updated!
            </Link>
            <br />
            <img src="/pinkArrow.svg" className={styles.arrowSvg} />
          </div>
          <div className={styles.proposalContainer}>
            <button
              onClick={() => router.push("https://www.subscribepage.io/nostalgiacafesf")}
              className={` ${styles.proposalButton}`}
            >
              {' '}
              Sign up for newsletter
            </button>
          </div>

          <div className={styles.questBlock}>
            <div className={styles.questContainer} id="firstQuest">
            <QuestCard
                cardName={cardStyles.teapot}
                logoImage={'/flourish.svg'}
                title={"Flourish: A WOC-centered Spoken Word and Poetry Circle"}
                description={
                  'Flourish is a space dedicated to amplifying the voices of women of color through poetry and storytelling. Some sessions will be exclusively for WOC to create a deeply intentional and affirming space, while select hours or nights will be open to supportive allies who respect and honor this mission. Our goal is to foster both community and meaningful dialogue in a way that feels safe and empowering.'
                }
                buttonText={'come write, read and listen'}
                buttonLink={"/flourish"}
              />
              <QuestCard
                cardName={cardStyles.comingSoon}
                logoImage={'/coming-soon.svg'}
                title={'Memberships Coming Soon'}
                description={
                  'we are looking for artists who love to teach and learn from other artists. we encourage members to teach a workshop at our studio at least once!'
                }
                buttonText={'apply to be a member'}
              />

             
               
            </div>
          </div>
        </div>
        <img src="/waves.svg" className={styles.waveImage} />
      </div>
    </>
  )
}
