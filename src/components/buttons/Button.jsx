import { Button } from 'antd';
import { PlusOutlined, FrownFilled } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/buttons/Button.module.css';
// --
export default function Buttons(props) {
  const { text, change } = props.params;
  return (
    <div
      className={[
        bstyles.wrapper_div_horizontal_center_positioning,
        styles.wrapper_button,
        change ? styles.wrapper_button_report_trick : '',
      ].join(' ')}
    >
      <Button
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          change ? styles.button_report_trick : styles.button_more_pets,
          change ? styles.button_report_trick_background_color : styles.button_more_pets_background_color,
        ].join(' ')}
        type='default'
        icon={
          change ? (
            <FrownFilled className={styles.buttons__more_pets_icon} />
          ) : (
            <PlusOutlined className={styles.buttons__more_pets_icon} />
          )
        }
      >
        {text}
      </Button>
    </div>
  );
}
