import Image from 'next/image';
import { MyStack } from './MyStack';
import styles from './styles.module.scss';

export default function HomeIntroduction() {
  return (
    <>
      <div className={styles.HomeIntroductionContainer}>
        <Image
          src="/images/me.jpeg"
          alt="White man whearing glasses and smiling"
          width='150'
          height='200'
        />
        <div className={styles.TextIntroduction}>
          <p>Hey👋! Welcome to my blog! Here I&apos;ll be writing about web development in general</p>
          <p>I am Jonas and I&apos;m blessed to be married with a great woman and having an amazing son.</p>
          <p>After 7 years working with IT and already had worked as a support analyst, support coordinator and infrastructure analyst,
            I finally discovered myself as a developer&nbsp;:)</p>
        </div>
      </div>
      <MyStack />
    </>
  )
}
