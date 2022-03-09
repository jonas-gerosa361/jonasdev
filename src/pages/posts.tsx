import Head from "next/head";
import {GetStaticProps} from 'next';
import BlogPosts from "../components/BlogPosts";
import slugify from "slugify";
import { useAppContext } from "../context/AppContext";

interface PostProps {
  nid: string,
  title: string,
  field_description: string,
  field_readingtime: string,
  field_posts_tags: string,
  url: string,
  changed: string
  slug: string
}

interface PostsProps {
  posts: PostProps[]
}

export default function Posts({posts}: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | JonasDEV</title>
      </Head>

      <BlogPosts posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const posts = await fetch('https://cms.jonasdev.com.br/api/posts')
    .then(response => response.json())
    .then(response => response)
    .catch((error) => {
      console.log(error);
      return {};
    })

  const filteredPosts = posts.map((post: PostProps) => {
    post.slug = slugify(post.title);
    post.slug = post.slug.toLowerCase();
    return post;
  })

  return {
    props: {
      posts: filteredPosts
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
