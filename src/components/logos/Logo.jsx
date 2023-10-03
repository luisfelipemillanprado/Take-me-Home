import Image from 'next/image';
import Logo from '@public/svg/logo/pet_logo_claro.svg';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/logo/Logo.module.css';
// --
export default function PetLogo(props) {
  return (
    <div
      className={[
        bstyles.wrapper_div_horizontal_center_positioning,
        styles.pet_logo_section__container_all,
      ].join(' ')}
    >
      <div
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.pet_logo_section__wrapper_svg,
        ].join(' ')}
      >
        <Image className={styles.pet_logo_section__svg} src={Logo} alt='Logo' />
      </div>
    </div>
  );
}
