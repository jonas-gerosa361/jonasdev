import Head from "next/head";
import HomeIntroduction from "../components/HomeIntroduction";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
        <meta name="google-site-verification" content="-9kCJtUqPJML-3V3k0WeHSaBUQ6LMVuHhj2lhuJqukQ" />
        <meta name="description" content="Hello this is my blog and here I will be writing about my experience with web development. I'm Jonas a software engineer who worked as support analyst, support coordinator and infrastructure analyst before coding. Top expertise are PHP with Laravel and Drupal and Javascript with React" />
        <title>Home | JonasDEV</title>
      </Head>
      <HomeIntroduction />
    </>
  )
}
