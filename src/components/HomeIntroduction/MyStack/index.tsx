import styles from './styles.module.scss';

export function MyStack() {
  return (
    <div aria-hidden="true" className={styles.MyStackContainer}>
      <h2>My Stack</h2>
      <ul>
        <li>
          <span className={styles.html}>HTML5</span>
        </li>
        <li>
          <span className={styles.css}>CSS3</span>
        </li>
        <li>
          <span className={styles.sass}>Sass</span>
        </li>
        <li>
          <span className={styles.accessibility}>Acessibility</span>
        </li>
        <li>
          <span className={styles.javascript}>JavaScript</span>
        </li>
        <li>
          <span className={styles.typescript}>TypeScript</span>
        </li>
        <li>
          <span className={styles.node}>NodeJS</span>
        </li>
        <li>
          <span className={styles.react}>React</span>
        </li>
        <li>
          <span className={styles.electron}>ElectronJS</span>
        </li>
        <li>
          <span className={styles.php}>PHP</span>
        </li>
        <li>
          <span className={styles.drupal}>Drupal</span>
        </li>
        <li>
          <span className={styles.laravel}>Laravel</span>
        </li>
        <li>
          <span className={styles.linux}>Linux</span>
        </li>
        <li>
          <span className={styles.shell}>Shell Script</span>
        </li>
        <li>
          <span className={styles.nginx}>Nginx</span>
        </li>
        <li>
          <span className={styles.apache}>Apache</span>
        </li>
        <li>
          <span className={styles.redis}>Redis</span>
        </li>
        <li>
          <span className={styles.mysql}>MySQL</span>
        </li>
        <li>
          <span className={styles.oracle}>Oracle</span>
        </li>
        <li>
          <span className={styles.mongodb}>MongoDB</span>
        </li>
      </ul>
    </div>
  )
}
