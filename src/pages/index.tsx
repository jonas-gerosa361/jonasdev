import Head from "next/head";
import { Header } from "../components/Header";
import HomeIntroduction from "../components/HomeIntroduction";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
        <meta name="google-site-verification" content="-9kCJtUqPJML-3V3k0WeHSaBUQ6LMVuHhj2lhuJqukQ" />
        <title>Home | JonasDEV</title>
      </Head>
      <HomeIntroduction />
    </>
  )
}
