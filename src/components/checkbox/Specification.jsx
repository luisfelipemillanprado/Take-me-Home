import { Avatar } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/checkbox/Specification.module.css';

// --
export default function Specification(props) {
  const { item } = props.params;
  return (
    <div
      className={[bstyles.wrapper_div_horizontal_center_positioning, styles.specification_wrapper].join(
        ' '
      )}
    >
      <Avatar
        className={[bstyles.wrapper_div_horizontal_center_positioning, styles.specification_avatar].join(
          ' '
        )}
        icon={<CheckOutlined className={styles.specification_icon} />}
      />
      <p className={styles.specification_text}>{item}</p>
    </div>
  );
}
