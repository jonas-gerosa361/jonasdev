import Head from "next/head";
import { Header } from "../components/Header";
import HomeIntroduction from "../components/HomeIntroduction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | JonasDEV</title>
      </Head>
      <Header />
      <HomeIntroduction />
    </>
  )
}
