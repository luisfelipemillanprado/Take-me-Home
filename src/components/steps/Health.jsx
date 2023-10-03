import { Steps, ConfigProvider } from 'antd';
// import styles from '@styles/components/steps/Health.module.css';
// --
export default function Health(props) {
  const { direction, size, current, items } = props.params;
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'revert',
          fontSize: '1.6rem',
        },
        components: {
          Steps: { iconFontSize: '1.5rem', iconSizeSM: '2.6rem' },
        },
      }}
    >
      <Steps direction={direction} size={size} current={current} items={items} />
    </ConfigProvider>
  );
}
