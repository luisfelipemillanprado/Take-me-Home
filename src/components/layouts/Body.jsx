import Header from '@components/headers/Header';
import Footer from '@components/footer/Footer';
import styles from '@styles/components/layouts/Body.module.css';
// --
export default function Body(props) {
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>
      {props.children}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
