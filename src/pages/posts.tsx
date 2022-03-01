import Head from "next/head";
import {GetStaticProps} from 'next';

import { Header } from "../components/Header";
import BlogPosts from "../components/BlogPosts";

interface PostsProps {
  articles: []
}

export default function Posts({articles}: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | JonasDEV</title>
      </Head>
      <Header />

      <BlogPosts posts={articles} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const endpoint = process.env.blog_endpoint;
  const username = process.env.blog_username;
  const articles = await fetch(`${endpoint}/articles?username=${username}`)
    .then(response => response.json())
    .then(response => response);
  return {
    props: {
      articles: articles
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
