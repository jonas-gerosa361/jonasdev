import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from './SocialIcons';
import styles from './styles.module.scss';

export function Brand() {
  return (
    <div className={styles.BrandContainer}>
      <Link passHref href='/'>
        <h1>JonasDEV</h1>
      </Link>
      <SocialIcons />
    </div>
  );
}
