import Head from "next/head";
import { Header } from "../components/Header";
import UnderConstruction from "../components/UnderConstruction";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | JonasDEV</title>
      </Head>
      <Header />
      <UnderConstruction />
    </>
  );
}
