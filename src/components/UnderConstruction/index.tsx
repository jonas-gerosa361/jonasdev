import Image from 'next/image';
import styles from './styles.module.scss';

export default function UnderConstruction() {
  return (
    <div className={styles.UnderConstructionContainer}>
      <Image
        src="/images/under-construction.png"
        alt="This page is under construction. Sorry for any trouble."
        width='500'
        height='500'
      />
    </div>
  );
}
