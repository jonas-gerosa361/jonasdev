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
          width='430'
          height='493'
        />
        <div className={styles.TextIntroduction}>
          <p>Hi! Welcome to my blog!👋 Here I&apos;ll be writing about my experience with web development.</p>
          <p>I am Jonas, and I&apos;m blessed to be married to a great woman and have an amazing son.</p>
          <p>After seven years working with IT and already had worked as a support analyst, support coordinator,
            and infrastructure analyst, I finally discovered myself as a developer&nbsp;:)</p>
        </div>
      </div>
      <MyStack />
    </>
  )
}
