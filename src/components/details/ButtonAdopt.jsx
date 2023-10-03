import Adopt from '@components/buttons/Adopt';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/ButtonAdopt.module.css';
// --
export default function ButtonAdopt(props) {
  return (
    <div
      className={[bstyles.wrapper_div_horizontal_center_positioning, styles.button_adopt_wrapper].join(
        ' '
      )}
    >
      <Adopt params={{ text: 'I want adopt him!' }} />
    </div>
  );
}
