import BlogPost from '../../components/BlogPost';

interface PostProps {
  post: {
    field_body: string,
    field_description: string,
    field_posts_tags: string,
    nid: string,
    title: string,
    field_readingtime: string
  }
}

export default function PostTemplate() {
  return (
    <BlogPost />
  )
}
