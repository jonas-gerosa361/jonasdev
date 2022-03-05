import Head from "next/head";
import {GetStaticProps} from 'next';
import BlogPosts from "../components/BlogPosts";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | JonasDEV</title>
      </Head>

      <BlogPosts />
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const articles = await fetch('https://dev.to/api/articles?username=jonasgerosa')
    .then(response => response.json())
    .then(response => response);
  return {
    props: {
      articles: articles
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
