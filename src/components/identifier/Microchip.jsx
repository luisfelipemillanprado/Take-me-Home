import { Avatar } from 'antd';
import { WomanOutlined, ManOutlined, EnvironmentFilled } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/identifier/Microchip.module.css';
// --
export default function Microchip(props) {
  const { name, location, maleGender } = props.params;
  return (
    <div className={[bstyles.wrapper_div_vertical_center_positioning, styles.microchip_wrapper].join(' ')}>
      <div
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.microchip_container_name,
        ].join(' ')}
      >
        <h2 className={styles.microchip_text_name}>{name}</h2>
        <span className={styles.microchip_wrapper_gender}>
          <Avatar
            className={[
              bstyles.wrapper_div_horizontal_center_positioning,
              styles.microchip_gender_avatar,
            ].join(' ')}
            icon={
              maleGender ? (
                <ManOutlined className={styles.microchip_gender_icon} />
              ) : (
                <WomanOutlined className={styles.microchip_gender_icon} />
              )
            }
          />
        </span>
      </div>
      <div
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.microchip_wrapper_location,
        ].join(' ')}
      >
        <div className={styles.microchip_container_location_icon}>
          <EnvironmentFilled className={styles.microchip_location_icon} />
        </div>
        <div
          className={[
            bstyles.wrapper_div_horizontal_center_positioning,
            styles.microchip_container_location,
          ].join(' ')}
        >
          <span className={styles.microchip_location}>{location}</span>
        </div>
      </div>
    </div>
  );
}
