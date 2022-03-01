import SocialIcons from './SocialIcons';
import styles from './styles.module.scss';

export function Brand() {
  return (
    <div className={styles.BrandContainer}>
      <img src="/images/logo.jpeg" alt="White man whearing glasses and smiling." />
      <h1>JonasDEV</h1>
      <SocialIcons />
    </div>
  );
}
