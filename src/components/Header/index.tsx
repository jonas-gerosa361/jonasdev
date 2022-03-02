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
            Home
          </Link>
          <Link href='/posts'>
            Posts
          </Link>
          {/* <Link href='/projects'>
            Projects
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
