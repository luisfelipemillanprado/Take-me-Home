import Adopt from '@components/buttons/Adopt';
import { Space } from 'antd';
import styles from '@styles/components/details/Adoption.module.css';
// --
export default function Adoption(props) {
  return (
    <Space className={styles.adoption_container} align='center' direction='horizontal'>
      <Adopt params={{ text: 'I want adopt him!' }} />
    </Space>
  );
}
