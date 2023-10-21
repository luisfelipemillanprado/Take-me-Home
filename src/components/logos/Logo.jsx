import Image from 'next/image';
import Logo from '@public/svg/logo/pet_logo_claro.svg';
import { Space } from 'antd';
import styles from '@styles/components/logo/Logo.module.css';
// --
export default function PetLogo(props) {
  return (
    <Space className={styles.pet_logo_wrapper} align='center' direction='horizontal'>
      <Image className={styles.pet_logo_image} src={Logo} alt='Logo' />
    </Space>
  );
}
