import Head from "next/head";
import { GetServerSideProps } from 'next';
import BlogPosts from "../components/BlogPosts";
import slugify from "slugify";
import axios from "axios";

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

export const getServerSideProps: GetServerSideProps = async() => {
  const posts = await axios('https://cms.jonasdev.com.br/api/posts')
    .then(response => response.data)
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
    }
  }
}
