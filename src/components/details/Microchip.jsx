import { Avatar, ConfigProvider, Space, Typography } from 'antd';
import { WomanOutlined, ManOutlined, EnvironmentFilled } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/Microchip.module.css';
const { Title, Text } = Typography;
// --
export default function Microchip(props) {
  const { name, location, maleGender } = props.params;
  return (
    <div className={[bstyles.wrapper_div_vertical_center_positioning, styles.microchip_wrapper].join(' ')}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'revert',
          },
        }}
      >
        <Space className={styles.microchip_container_name} align='center' direction='horizontal'>
          <Title className={styles.microchip_text_name} level={2}>
            {name}
          </Title>
          <span className={styles.microchip_wrapper_gender}>
            <Avatar
              className={[
                bstyles.wrapper_div_horizontal_center_positioning,
                styles.microchip_gender_avatar,
              ].join(' ')}
              icon={
                maleGender ? (
                  <ManOutlined className={styles.microchip_gender_icon} />
                ) : (
                  <WomanOutlined className={styles.microchip_gender_icon} />
                )
              }
            />
          </span>
        </Space>
        <Space className={styles.microchip_wrapper_location} align='center' direction='horizontal'>
          <EnvironmentFilled className={styles.microchip_location_icon} />
          <Text className={styles.microchip_location_text}>{location}</Text>
        </Space>
      </ConfigProvider>
    </div>
  );
}
