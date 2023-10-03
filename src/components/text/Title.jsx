import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/text/Title.module.css';
// --
export default function Title(props) {
  const { title } = props.params;
  return (
    <div className={[bstyles.wrapper_div_horizontal_center_positioning, styles.title_container].join(' ')}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
