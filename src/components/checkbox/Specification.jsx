import { Avatar, Space, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/checkbox/Specification.module.css';
const { Text } = Typography;
// --
export default function Specification(props) {
  const { item } = props.params;
  return (
    <Space className={styles.specification_wrapper} align='center' direction='horizontal'>
      <Avatar
        className={[bstyles.wrapper_div_horizontal_center_positioning, styles.specification_avatar].join(
          ' '
        )}
        icon={<CheckOutlined className={styles.specification_icon} />}
      />
      <Text className={styles.specification_text}>{item}</Text>
    </Space>
  );
}
