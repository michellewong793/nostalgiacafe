import '../styles/globals.css'
import {Press_Start_2P, Lexend} from '@next/font/google'


// const pressPlayFont = Press_Start_2P({ subsets: ['latin'], weight: '400' })
// const lexend = Lexend({subsets: 'latin', weight: '300'})


function MyApp({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{`
    a {
      font-family: 'Press Start 2P'
      }
      p {
        font-family: 'Lexend', sans-serif;
      }
 
  `}</style>
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
