import Story from '@components/cards/Story';
import { Space } from 'antd';
import styles from '@styles/components/details/Stories.module.css';
// --
export default function Stories(props) {
  const { story } = props.params;
  return (
    <Space className={styles.story_container} align='center' direction='horizontal'>
      <Story
        params={{
          title: 'My story',
          story,
        }}
      />
    </Space>
  );
}
