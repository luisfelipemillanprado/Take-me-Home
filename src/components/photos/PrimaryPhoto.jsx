import Image from 'next/image';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/photos/PrimaryPhoto.module.css';
// --
export default function PrimaryPhoto(props) {
  const { src } = props.params;
  return (
    <div
      className={[bstyles.wrapper_div_horizontal_center_positioning, styles.primary_photo_container].join(
        ' '
      )}
    >
      <Image className={styles.primary_photo} src={src} alt='Pet Image' />
    </div>
  );
}
