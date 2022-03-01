import styles from './styles.module.scss';

export default function SocialIcons() {
  return (
    <span className={styles.SocialIcons}>
      <a
        target='_blank'
        href="https://www.linkedin.com/in/jonas-gerosa-it/"
      >
        <img
          title='Linkedin'
          src="/images/linkedin.svg"
          alt="Linkedin" />
      </a>
      <a
        target="_blank"
        href="https://github.com/jonas-gerosa361"
      >
        <img
          title="Github"
          src="/images/github.svg"
          alt="Github" />
      </a>
      <a
        target="_blank"
        href="https://twitter.com/jonas_gerosa"
      >
        <img
          title='Twitter'
          src="/images/twitter.svg"
          alt="Twitter" />
      </a>
      <a
        target='_blank'
        href="https://www.instagram.com/jonas_gerosa/"
      >
        <img
          title='Instagram'
          src="/images/instagram.svg"
          alt="Instagram" />
      </a>
    </span>
  )
}
