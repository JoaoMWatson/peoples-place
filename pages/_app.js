import "../styles/reset.css"
import Head from 'next/head'

import { GlobalStyles } from "../styles/globalStyles"

function MyApp({ Component, pageProps }) {
  return <>
    <GlobalStyles />
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&family=Poppins&family=Rakkas&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
