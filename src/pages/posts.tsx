import Head from "next/head";
import { GetStaticProps } from 'next';
import BlogPosts from "../components/BlogPosts";
import slugify from "slugify";
import axios from "axios";
import * as https from "https";

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
        <meta name="description" content="List of all my posts talking about either PHP, Drupal, React or web development in general." />
      </Head>

      <BlogPosts posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async() => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const posts = await axios.get('https://cms.jonasdev.com.br/api/posts', {httpsAgent})
    .then(response => response.data)
    .catch((error) => {
      console.log(error);
      return [];
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
