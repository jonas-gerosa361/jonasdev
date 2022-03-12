import Link from 'next/link';
import { Brand } from './Brand';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Brand />
        <nav>
          <Link href='/'>
            <a>
              Home
            </a>
          </Link>
          <Link href='/posts'>
            <a>
              Posts
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
