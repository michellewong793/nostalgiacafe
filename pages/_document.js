import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    /**Meta Tags for Social Previews */
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://use.typekit.net/uov6xbj.css"></link>
                    <meta property="og:title" content="nostalgia cafe"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="/Quest_Pink_Logo.svg"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@ourquest_xyz"/>
                    <meta name="twitter:creator" content="@ourquest_xyz"/>
                    <meta name="twitter:image" content="/Quest_Pink_Logo.svg"></meta>
                    <link href="/fonts/style.css" rel="stylesheet"/>

                    {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> 
<link rel="preload" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;700;800;900&family=Press+Start+2P&display=swap" rel="stylesheet"/> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument