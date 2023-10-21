import Image from 'next/image';
import { Space } from 'antd';
import styles from '@styles/components/photos/MainPhoto.module.css';
import rstyles from '@styles/responsive/mobile/photos/PrimaryPhotoR.module.css';
// --
export default function MainPhoto(props) {
  const { src } = props.params;
  return (
    <Space
      align='center'
      direction='horizontal'
      size={'small'}
      className={[styles.main_photo_container, rstyles.main_photo_container].join(' ')}
    >
      <Image className={[styles.main_photo, rstyles.main_photo].join(' ')} src={src} alt='Pet Image' />
    </Space>
  );
}
