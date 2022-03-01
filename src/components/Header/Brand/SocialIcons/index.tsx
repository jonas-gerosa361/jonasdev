import Image from 'next/image';
import styles from './styles.module.scss';

export default function SocialIcons() {
  return (
    <span className={styles.SocialIcons}>
      <a
        target='_blank'
        rel='noreferrer'
        href="https://www.linkedin.com/in/jonas-gerosa-it/"
      >
        <Image
          height='16px'
          width='16px'
          src="/images/linkedin.svg"
          alt='Linkedin'
          title='Linkedin' />
      </a>
      <a
        target="_blank"
        rel='noreferrer'
        href="https://github.com/jonas-gerosa361"
      >
        <Image
          width='16px'
          height='16px'
          src='/images/github.svg'
          alt="Github"
          title='Github'
        />
      </a>
      <a
        target="_blank"
        rel='noreferrer'
        href="https://twitter.com/jonas_gerosa"
      >
        <Image
          src="/images/twitter.svg"
          title='Twitter'
          alt="Twitter"
          width='16px'
          height='16px'
        />
      </a>
      <a
        target='_blank'
        rel='noreferrer'
        href="https://www.instagram.com/jonas_gerosa/"
      >
        <Image
          title='Instagram'
          src="/images/instagram.svg"
          alt="Instagram"
          width='16px'
          height='16px'
        />
      </a>
    </span>
  )
}
