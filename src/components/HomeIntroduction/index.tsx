import styles from './styles.module.scss';

export default function HomeIntroduction() {
  return (
    <div className={styles.HomeIntroductionContainer}>
      <img src="/images/me.jpeg" alt="White man whearing glasses and smiling" />
      <div className="TextIntroduction">
        <p>Hey👋! Welcome to my blog! Here I'll be writing about web development in general</p>
        <p>I am Jonas and I'm blessed to be married with a great woman and having an amazing son.</p>
        <p>After 7 years working with IT and already had worked as a support analyst, support coordinator and infrastructure analyst,
          I finally discovered myself as a developer :)</p>
      </div>
    </div>
  )
}
