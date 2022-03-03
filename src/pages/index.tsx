import Head from "next/head";
import { Header } from "../components/Header";
import HomeIntroduction from "../components/HomeIntroduction";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
        <title>Home | JonasDEV</title>
      </Head>
      <HomeIntroduction />
    </>
  )
}
