import styles from './styles.module.scss';

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

export default function BlogPost({post}: PostProps) {
  return (
    <div className={styles.postContainer}>
      <div className={styles.postHeader}>
        <h2><strong>{post?.title ?? ''}</strong></h2>
        <p>{post?.field_posts_tags ?? ''}</p>
        <p>{post?.readingTime ?? ''}</p>
      </div>
      <div dangerouslySetInnerHTML={{__html: post?.field_body ?? ''}} ></div>
    </div>
  )
}
