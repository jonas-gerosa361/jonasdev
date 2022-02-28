import styles from './styles.module.scss';

export function Brand() {
  return (
    <div className={styles.BrandContainer}>
      <img src="/images/logo.jpeg" alt="" />
      <h1>JonasDEV</h1>
      <span className={styles.SocialIcons}>
        <a
          target='_blank'
          href="https://www.linkedin.com/in/jonas-gerosa-it/"
        >
          <img src="/images/linkedin.svg" alt="Linkedin" />
        </a>
        <a
          target='_blank'
          href="https://github.com/jonas-gerosa361"
        >
          <img src="/images/github.svg" alt="Github" />
        </a>
        <a
          target='_blank'
          href="https://twitter.com/jonas_gerosa">
            <img src="/images/twitter.svg" alt="Twitter" />
        </a>
        <a target='_blank' href="https://www.instagram.com/jonas_gerosa/">
          <img src="/images/instagram.svg" alt="Instagram" />
        </a>
      </span>
    </div>
  );
}
