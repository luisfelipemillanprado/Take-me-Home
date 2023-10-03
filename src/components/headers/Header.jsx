import NavBar from '@components/headers/NavBar';
import styles from '@styles/components/headers/Header.module.css';
// --
export default function Header() {
  return (
    <section className={styles.header_section}>
      <div className={styles.header_section__container_all}>
        <NavBar />
      </div>
    </section>
  );
}
