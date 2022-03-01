import styles from './styles.module.scss';

export default function UnderConstruction() {
  return (
    <div className={styles.UnderConstructionContainer}>
      <img src="/images/under-construction.png" alt="This page is under construction. Sorry for any trouble." />
    </div>
  );
}
