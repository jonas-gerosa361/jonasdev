import { Header } from '../components/Header';
import Head from "next/head";

import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@jonas_gerosa"></meta>
        <meta name="twitter:creator" content="@jonas_gerosa"/>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
