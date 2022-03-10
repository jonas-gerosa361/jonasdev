import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import BlogPost from '../../components/BlogPost';

export default function PostTemplate({post}) {
  return (
    <BlogPost post={post} />
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
