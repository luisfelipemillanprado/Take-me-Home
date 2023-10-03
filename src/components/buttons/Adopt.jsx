import { Button } from 'antd';
import { HeartFilled, ArrowRightOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/buttons/Adopt.module.css';
// --
export default function Adopt(props) {
  const { text } = props.params;
  return (
    <Button
      className={[
        bstyles.button,
        bstyles.wrapper_div_horizontal_center_positioning,
        styles.adopt_button,
      ].join(' ')}
      icon={<HeartFilled />}
    >
      {text}
      <div className={styles.button_container_right_icon}>
        <ArrowRightOutlined className={styles.adopt_button_right_icon} />
      </div>
    </Button>
  );
}
