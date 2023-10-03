// import Image from 'next/image';
/* import BxFacebook from '@public/images/svg/socialnetwork/bx_facebook.svg';
import BxLinkedIn from '@public/images/svg/socialnetwork/bx_linkedin.svg';
import BxGooglePlus from '@public/images/svg/socialnetwork/bx-google_plus.svg'; */
import { Row, Col, Avatar, Space } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/register/RegisterModalFormTop.module.css';
// --
export default function RegisterModalFormTop(props) {
  const { mainText, paragraph, formTopText } = props.params;
  // --
  return (
    <Space
      id={formTopText}
      size={'middle'}
      direction='vertical'
      className={[
        bstyles.wrapper_div_vertical_center_positioning,
        styles.register_modal_form_top_section__container_all,
      ].join(' ')}
    >
      <div
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.register_modal_form_top_section__wrapper_account_text,
        ].join(' ')}
      >
        <h2
          className={[
            bstyles.wrapper_div_horizontal_center_positioning,
            styles.register_modal_form_top_section__welcome_account_text,
            styles.register_modal_form_top_section__account_color_text,
          ].join(' ')}
        >
          {mainText}
        </h2>
      </div>
      <div
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.register_modal_form_top_section__container_social_network_account,
        ].join(' ')}
      >
        <Row
          className={[
            bstyles.wrapper_div_horizontal_center_positioning,
            styles.register_modal_form_top_section__wrapper_social_network_row,
          ].join(' ')}
          gutter={12}
        >
          <Col>
            <Avatar
              className={[
                bstyles.wrapper_div_horizontal_center_positioning,
                styles.register_modal_form_top_section__avatar_social_network,
              ].join(' ')}
            >
              {/* <Image
                className={[
                  bstyles.wrapper_div_horizontal_center_positioning,
                  styles.register_modal_form_top_section__social_network_icon_facebook,
                ].join(' ')}
                src={BxFacebook}
                alt='BxFacebook'
                loading='lazy'
              /> */}
            </Avatar>
          </Col>
          <Col>
            <Avatar
              className={[
                bstyles.wrapper_div_horizontal_center_positioning,
                styles.register_modal_form_top_section__avatar_social_network,
              ].join(' ')}
            >
              {/* <Image
                className={[
                  bstyles.wrapper_div_horizontal_center_positioning,
                  styles.register_modal_form_top_section__social_network_icon_google,
                ].join(' ')}
                src={BxGooglePlus}
                alt='BxGooglePlus'
                loading='lazy'
              /> */}
            </Avatar>
          </Col>
          <Col>
            <Avatar
              className={[
                bstyles.wrapper_div_horizontal_center_positioning,
                styles.register_modal_form_top_section__avatar_social_network,
              ].join(' ')}
            >
              {/* <Image
                className={[
                  bstyles.wrapper_div_horizontal_center_positioning,
                  styles.register_modal_form_top_section__social_network_icon_linked_in,
                ].join(' ')}
                src={BxLinkedIn}
                alt='BxLinkedIn'
                loading='lazy'
              /> */}
            </Avatar>
          </Col>
        </Row>
      </div>
      <div
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.register_modal_form_top_section__wrapper_choose_other_option_text,
        ].join(' ')}
      >
        <p className={styles.register_modal_form_top_section__choose_other_option_text}>{paragraph}</p>
      </div>
    </Space>
  );
}
