import Image from 'next/image';
import SocialIcons from './SocialIcons';
import styles from './styles.module.scss';

export function Brand() {
  return (
    <div className={styles.BrandContainer}>
      <Image
        src="/images/logo.jpeg"
        alt="White man whearing glasses and smiling."
        width='40'
        height='40'
      />
      <h1>JonasDEV</h1>
      <SocialIcons />
    </div>
  );
}
