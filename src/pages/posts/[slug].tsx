import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import BlogPost from '../../components/BlogPost';

interface PostProps {
  post: {
    field_body: string,
    field_description: string,
    field_posts_tags: string,
    nid: string,
    title: string,
    field_readingtime: string,
    readingTime: string
  }
}

export default function PostTemplate({post}: PostProps) {
  return (
    <>
      <Head>
        {
          <>
            <meta name='description' content={
              post ? post.field_description : ''
            } />
            <title>{post ? post.title : ''} | JonasDEV</title>
          </>
        }
      </Head>
      <BlogPost post={post} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const {slug} = params;

  const post = await axios(`https://cms.jonasdev.com.br/api/posts/get/${slug}`)
    .then(response => response.data[0])
    .catch((error) => {
      console.log(error);
      return {
        'post': {
          'field_body': '',
          'field_description': '',
          'field_posts_tags': '',
          'nid': '',
          'title': '',
          'field_readingtime': '',
          'readingTime': ''
        }
      }
    });

  return {
    props: {
      post,
    }
  }
}
