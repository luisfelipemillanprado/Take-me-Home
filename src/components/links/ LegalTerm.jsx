import Link from 'next/link';
import styles from '@styles/components/links/Legality.module.css';
// --
export default function Legality(props) {
  const { text, href } = props.params;
  return (
    <Link className={styles.legality_link} href={href}>
      {text}
    </Link>
  );
}
