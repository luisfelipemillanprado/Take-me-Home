import { Button, Space } from 'antd';
import { PlusOutlined, FrownFilled } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/buttons/Button.module.css';
import rstyles from '@styles/responsive/mobile/buttons/ButtonR.module.css';
// --
export default function Buttons(props) {
  const { text, change } = props.params;
  return (
    <Space
      className={[styles.wrapper_button, change ? styles.wrapper_button_report_trick : ''].join(' ')}
      align='center'
      direction='horizontal'
    >
      <Button
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.button,
          change ? styles.button_report_trick : styles.button_more_pets,
          rstyles.button,
        ].join(' ')}
        type='default'
        icon={
          change ? (
            <FrownFilled className={[styles.buttons_icon, rstyles.buttons_icon]} />
          ) : (
            <PlusOutlined className={[styles.buttons_icon, rstyles.buttons_icon]} />
          )
        }
      >
        {text}
      </Button>
    </Space>
  );
}
