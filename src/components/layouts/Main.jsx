import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/layouts/Main.module.css';
import rstyles from '@styles/responsive/mobile/main/BreakingPoints.module.css';
// --
export default function Main(props) {
  return (
    <section className={styles.main_section}>
      <div
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.main_section__container_all,
        ].join(' ')}
      >
        <div
          className={[
            bstyles.wrapper_div_vertical_center_positioning,
            styles.main_section__wrapper_all,
            rstyles.main_section__wrapper_all,
          ].join(' ')}
        >
          {props.children}
        </div>
      </div>
    </section>
  );
}
