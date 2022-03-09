import styles from './styles.module.scss';
import Link from 'next/link';
import { useAppContext } from '../../context/AppContext';

interface PostProps {
  nid: string,
  title: string,
  field_description: string,
  field_readingtime: string,
  field_posts_tags: string,
  changed: string,
  slug: string
}

interface BlogPostsProps {
  posts: PostProps[]
}

export default function BlogPosts({posts}: BlogPostsProps){
  const context: any = useAppContext();

  return (
    <div className={styles.blogPostContainer}>
      <ul>
        {
        posts.map((post) => {
          return (
            <li
              onClick={() => context.setPost(post.nid)}
              className={styles.link}
              key={post.nid}
            >
              <Link passHref href={`posts/${post.slug}`}>
                <div className={styles.post}>
                  <span><strong>{post.changed}</strong></span>
                  <h2 dangerouslySetInnerHTML={{__html: post.title}}></h2>
                  <span className={styles.tags}>
                    {post.field_posts_tags}
                  </span>
                  <p>Description: {post.field_description}</p>
                  <p>Reading time: {post.field_readingtime}</p>
                </div>
              </Link>
            </li>
            )
          })
        }
      </ul>
    </div>
  );
};
