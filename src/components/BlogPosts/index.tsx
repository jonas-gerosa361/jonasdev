import styles from './styles.module.scss';
import data from "../../data/posts.json";
import Link from 'next/link';

interface BlogPostsProps {
  id: number,
  title: string,
  description: string,
  readingTime: string,
  tags: string,
  url: string,
}

export default function BlogPosts() {
  const posts: BlogPostsProps[] = data;

  return (
    <div className={styles.blogPostContainer}>
      <ul>
        {
        posts.map((post: BlogPostsProps) => {
          return (
            <li className={styles.link} key={post.id}>
              <Link href={post.url}>
                <div className={styles.post}>
                  <h2>{post.title}</h2>
                  <span className={styles.tags}>
                    tags: {post.tags}
                  </span>
                  <p>Description: {post.description}</p>
                  <p>Reading time: {post.readingTime} minutes</p>
                </div>
              </Link>
            </li>
            )
          })
        }
      </ul>
    </div>
  );
}
