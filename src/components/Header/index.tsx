import { Brand } from './Brand';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Brand />
        <nav>
          <a href="/">Home</a>
          <a href="/posts">Posts</a>
          <a href="/projects">Projects</a>
        </nav>
      </div>
    </header>
  );
}
