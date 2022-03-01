import Image from 'next/image';
import styles from './styles.module.scss';

interface BlogPostsProps {
  type_of: string,
  id: number,
  title: string,
  description: string,
  published_at: string,
  reading_time_minutes: number,
  tags: string,
  social_image: string,
  url: string,
}

export default function BlogPosts({posts}) {
  return (
    <div className={styles.blogPostContainer}>
      <ul>
        {
        posts.map((post: BlogPostsProps) => {
          return (
            <li key={post.id}>
              <a href={post.url} target="_blank" rel='noreferrer' >
                <div className={styles.post}>
                  <Image src={post.social_image} width="870" height="460" alt={post.title} />
                  <h2>{post.title}</h2>
                  <span className={styles.tags}>
                    tags: {post.tags}
                  </span>
                  <p>Description: {post.description}</p>
                  <p>Reading time: {post.reading_time_minutes} minutes</p>
                </div>
              </a>
            </li>
            )
          })
        }
      </ul>
    </div>
  );
}
