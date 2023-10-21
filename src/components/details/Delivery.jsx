import { Steps, Space, Typography, ConfigProvider } from 'antd';
import styles from '@styles/components/details/Delivery.module.css';
const { Title } = Typography;
// --
export default function Delivery(props) {
  const { title, direction, size, current, items } = props.params;
  return (
    <Space className={styles.delivery_container} align='start' direction='vertical'>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'revert',
          },
          components: {
            Steps: { iconFontSize: '1.5rem', iconSizeSM: '2.6rem', fontSize: '1.6rem' },
          },
        }}
      >
        <Title className={styles.delivery_title} level={3}>
          {title}
        </Title>
        <Steps direction={direction} size={size} current={current} items={items} />
      </ConfigProvider>
    </Space>
  );
}
