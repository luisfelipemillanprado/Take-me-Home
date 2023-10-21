import PrimaryPhoto from '@components/photos/MainPhoto';
import SecondaryPhotoCardGallery from '@components/gallery/SecondaryPhotoCardGallery';
import { Space } from 'antd';
import styles from '@styles/components/details/Photos.module.css';
// --
export default function Photos(props) {
  const { photo2, photo3, photo4, photo5 } = props.params;
  return (
    <Space className={styles.photos_container} align='center' direction='vertical'>
      <PrimaryPhoto params={{ src: photo2 }} />
      <SecondaryPhotoCardGallery
        params={{
          array: [
            { url: photo3, id: 1, href: '/' },
            { url: photo4, id: 2, href: '/' },
            { url: photo5, id: 3, href: '/' },
          ],
        }}
      />
    </Space>
  );
}
