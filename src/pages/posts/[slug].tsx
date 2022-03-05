import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown';

import styles from './styles.module.scss';

export default function PostTemplate({content, data}) {
  const frontmatter = data;

  return (
    <div className={styles.postContainer}>
      <h2>{frontmatter.title}</h2>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  const content = await import(`../../content/${slug}.md`)

  const data = matter(content.default);

  return { ...data }
}
