import { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import styles from './styles.module.scss';
import NProgress from 'nprogress';


interface PostProps {
  field_body: string,
  field_description: string,
  field_posts_tags: string,
  nid: string,
  title: string,
  field_readingtime: string,
  readingTime: string
}

export default function BlogPost() {
  const defaultPost: PostProps = {
    'field_body': '',
    'field_description': '',
    'field_posts_tags': '',
    'nid': '',
    'title': '',
    'field_readingtime': '',
    'readingTime': ''
  }
  const [post, setPost] = useState<PostProps>(defaultPost);
  const context: any = useAppContext();
  const postNid = context.getPost();

  useEffect(() => {
    NProgress.start();
    const setPostNid = async () => {
      const objPost = await fetch(`https://cms.jonasdev.com.br/api/posts/get/${postNid}`)
        .then(response => response.json())
        .then(response => response[0]);

      setPost({...objPost, readingTime: `Reading time: ${objPost.field_readingtime}`});
      NProgress.done();
    }

    setPostNid();
  })

  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <h2><strong>{post.title}</strong></h2>
        <p>{post.field_posts_tags}</p>
        <p>{post.readingTime}</p>
      </div>
      <div dangerouslySetInnerHTML={{__html: post.field_body}} ></div>
    </div>
  )
}
