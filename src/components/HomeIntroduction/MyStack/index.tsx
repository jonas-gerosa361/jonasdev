import Image from 'next/image';
import styles from './styles.module.scss';

export function MyStack() {
  return (
    <div className={styles.myStackContainer}>
      <h2>Technologies that I&apos;m confortable working with</h2>
      <div className={styles.badges}>
          <div>
            <Image
              src="/images/badges/html5.png"
              width="63"
              height="64"
              alt="HTML5"
            />
            <span>HTML5</span>
          </div>

          <div>
            <Image
              src="/images/badges/css3.png"
              width="63"
              height="64"
              alt="CSS3"
            />
            <span>CSS3</span>
          </div>

          <div>
            <Image
              src="/images/badges/scss.png"
              width="63"
              height="64"
              alt="Sass"
            />
            <span>Sass</span>
          </div>
      </div>

      <div className={styles.badges}>
        <div>
          <Image
            src="/images/badges/javascript.png"
            width="63"
            height="64"
            alt="Javascript"
          />
          <span>Javascript</span>
        </div>

        <div>
          <Image
            src="/images/badges/typescript.png"
            width="63"
            height="64"
            alt="Typescript"
          />
          <span>Typescript</span>
        </div>

        <div>
          <Image
            src="/images/badges/react.png"
            width="63"
            height="55"
            alt="React"
          />
          <span>React</span>
        </div>

        <div>
          <Image
            src="/images/badges/node.jpg"
            width="63"
            height="64"
            alt="Node"
          />
          <span>Node</span>
        </div>
      </div>

      <div className={styles.badges}>
        <div>
          <Image
            src="/images/badges/php.png"
            width="63"
            height="64"
            alt="PHP"
          />
          <span>PHP</span>
        </div>

        <div>
          <Image
            src="/images/badges/drupal.png"
            width="63"
            height="64"
            alt="Drupal"
          />
          <span>Drupal</span>
        </div>

        <div>
          <Image
            src="/images/badges/laravel.jpg"
            width="63"
            height="64"
            alt="Laravel"
          />
          <span>Laravel</span>
        </div>
      </div>

      <div className={styles.badges}>
        <div>
          <Image
            src="/images/badges/linux.png"
            width="63"
            height="64"
            alt="Linux"
          />
          <span>Linux</span>
        </div>

        <div>
          <Image
            src="/images/badges/shell-script.png"
            width="63"
            height="64"
            alt="Shell Script"
          />
          <span>Shell Script</span>
        </div>

        <div>
          <Image
            src="/images/badges/nginx.svg"
            width="63"
            height="64"
            alt="Nginx"
          />
          <span>Nginx</span>
        </div>

        <div>
          <Image
            src="/images/badges/apache.png"
            width="63"
            height="64"
            alt="Apache"
          />
          <span>Apache</span>
        </div>
      </div>

      <div className={styles.badges}>
        <div>
          <Image
            src="/images/badges/mysql.png"
            width="63"
            height="64"
            alt="MySQL"
          />
          <span>MySQL</span>
        </div>

        <div>
          <Image
            src="/images/badges/oracle.png"
            width="63"
            height="64"
            alt="Oracle"
          />
          <span>Oracle</span>
        </div>

        <div>
          <Image
            src="/images/badges/mongodb.png"
            width="63"
            height="64"
            alt="MongoDB"
          />
          <span>MongoDB</span>
        </div>

        <div>
          <Image
            src="/images/badges/redis.png"
            width="63"
            height="64"
            alt="Redis"
          />
          <span>Redis</span>
        </div>
      </div>
    </div>
  )
}
