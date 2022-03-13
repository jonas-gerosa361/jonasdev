import uniqid from 'uniqid';
import Image from 'next/image';

import styles from './styles.module.scss';

export function MyStack() {
  return (
    <div className={styles.myStackContainer}>
      <h2>Technologies that I&apos;m confortable working with</h2>
      <div className={styles.badges}>
        <div>
          <Image
            key={uniqid()}
            src="/images/badges/html.png"
            width="60"
            height="60"
            alt="HTML5"
          />
          <span>HTML5</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/css.png"
            width="60"
            height="60"
            alt="CSS3"
          />
          <span>CSS3</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/bootstrap.png"
            width="60"
            height="60"
            alt="Bootstrap"
          />
          <span>Bootstrap</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/tailwind.png"
            width="60"
            height="60"
            alt="Tailwind"
          />
          <span>Tailwind</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/sass.png"
            width="60"
            height="60"
            alt="Sass"
          />
          <span>Sass</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/javascript.png"
            width="60"
            height="60"
            alt="Javascript"
          />
          <span>Javascript</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/typescript.png"
            width="60"
            height="60"
            alt="Typescript"
          />
          <span>Typescript</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/react.png"
            width="60"
            height="60"
            layout='responsive'
            alt="React"
          />
          <span>React</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/node.png"
            width="60"
            height="60"
            layout='responsive'
            alt="Node"
          />
          <span>Node</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/php.png"
            width="60"
            height="60"
            layout='responsive'
            alt="PHP"
          />
          <span>PHP</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/drupal.png"
            width="60"
            height="60"
            layout='responsive'
            alt="Drupal"
          />
          <span>Drupal</span>
        </div>

        <div>
          <Image
            src="/images/badges/laravel.png"
            width="60"
            height="60"
            alt="Laravel"
          />
          <span>Laravel</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/linux.png"
            width="60"
            height="60"
            layout='responsive'
            alt="Linux"
          />
          <span>Linux</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/shell-script.png"
            width="60"
            height="60"
            alt="Shell Script"
          />
          <span>Shell Script</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/nginx.png"
            width="60"
            height="60"
            layout='responsive'
            alt="Nginx"
          />
          <span>Nginx</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/apache.png"
            width="60"
            height="60"
            layout='responsive'
            alt="Apache"
          />
          <span>Apache</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/mysql.png"
            width="60"
            height="60"
            layout='responsive'
            alt="MySQL"
          />
          <span>MySQL</span>
        </div>

        <div>
          <Image
            key={uniqid()}
            src="/images/badges/oracle.png"
            width="60"
            height="60"
            alt="Oracle"
          />
          <span>Oracle</span>
        </div>

        <div>
          <Image
            src="/images/badges/mongo.png"
            width="60"
            height="60"
            alt="MongoDB"
          />
          <span>MongoDB</span>
        </div>

        <div>
          <Image
            src="/images/badges/redis.png"
            width="60"
            height="60"
            alt="Redis"
          />
          <span>Redis</span>
        </div>
      </div>
    </div>
  )
}
