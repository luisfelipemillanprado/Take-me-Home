import Link from 'next/link';
import Image from 'next/image';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/links/SecondaryPhoto.module.css';
// --
export default function SecondaryPhoto(props) {
  const { src, href } = props.params;
  return (
    <Link
      className={[bstyles.wrapper_div_horizontal_center_positioning, styles.secondary_photo_link].join(
        ' '
      )}
      href={href}
    >
      <Image className={styles.secondary_photo_image} src={src} width={90} height={90} alt='Pet Image' />
    </Link>
  );
}
