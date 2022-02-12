import styles from '../styles/Home.module.css';
import { Props } from '../pages';
import Link from 'next/link';

export default function TransformList({ transformList }: Props) {
  return (
    <>
      <Link href={'/'}>
        <div className={styles.transformButton}>
          <button className={styles.button}>Create Transformation</button>
        </div>
      </Link>
      <div className={styles.grid}>
        {transformList.map((transform, index) => (
          <div key={index} className={`${styles.card} ${styles.cardSize}`}>
            <h2>{transform.name}</h2>
            <ul className={styles.list}>
              {transform.items.map((tr, index) => (
                <li key={index} className={styles.listItem}>
                  {tr}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
