import { Button, ConfigProvider } from 'antd';
import { TwitterOutlined, FacebookFilled, WhatsAppOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/buttons/Contact.module.css';
// --
export default function Contact(props) {
  const { icon } = props.params;
  /**
   * @function: iconSwitch.
   * @description: exchange between icons.
   * @param {string} icon
   * @returns: object containing icon and backgroundClass property.
   */
  const iconSwitch = (icon) => {
    switch (icon) {
      case 'twitter':
        return {
          icon: <TwitterOutlined className={styles.contact_icons} />,
          backgroundClass: styles.twitter_background_color,
        };
      case 'facebook':
        return {
          icon: <FacebookFilled className={styles.contact_icons} />,
          backgroundClass: styles.facebook_background_color,
        };
      case 'whatsapp':
        return {
          icon: <WhatsAppOutlined className={styles.contact_icons} />,
          backgroundClass: styles.whatsapp_background_color,
        };
    }
  };
  // --
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'revert',
        },
      }}
    >
      <Button
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.contact_button,
          iconSwitch(icon).backgroundClass,
        ].join(' ')}
        icon={iconSwitch(icon).icon}
      />
    </ConfigProvider>
  );
}
