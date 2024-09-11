import styles from './page.module.css';
import { Photos } from '../components/Photos';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.appHeader}>
        <h1>Photo Gallery</h1>
      </header>
      <main className={styles.appMain}>
        <Photos />
      </main>
    </div>
  );
}
