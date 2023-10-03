import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/register/RegisterModalCover.module.css';
// --
export default function RegisterModalCover(props) {
  const boxShadowStyle = {
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 1px 1px -3px rgba(0, 0, 0, 0.13), 0 2px 9px 5px rgba(0, 0, 0, 0.05)',
  };
  const { mainText, paragraph, buttonText, switchSense, visibility, contentId, buttonId } = props.params;
  // --
  return (
    <div
      id={contentId}
      style={{ visibility: visibility ? 'visible' : 'hidden' }}
      className={[
        bstyles.wrapper_div_vertical_center_positioning,
        styles.register_modal_cover_section__container_all,
      ].join(' ')}
    >
      <div
        className={[
          bstyles.wrapper_div_vertical_center_positioning,
          styles.register_modal_cover_section__wrapper_content_text,
        ].join(' ')}
      >
        <div
          className={[
            bstyles.wrapper_div_horizontal_center_positioning,
            styles.register_modal_cover_section__container_welcome_text_paragraph,
            styles.register_modal_cover_section__container_welcome_text,
          ].join(' ')}
        >
          <h2
            className={[
              styles.register_modal_cover_section__welcome_account_text,
              styles.register_modal_cover_section__welcome_color_text,
            ].join(' ')}
          >
            {mainText}
          </h2>
        </div>
        <div
          className={[
            bstyles.wrapper_div_horizontal_center_positioning,
            styles.register_modal_cover_section__container_welcome_text_paragraph,
            styles.register_modal_cover_section__container_content_paragraph,
          ].join(' ')}
        >
          <p
            className={[
              bstyles.wrapper_div_vertical_center_positioning,
              styles.register_modal_cover_section__paragraph,
            ].join(' ')}
          >
            {paragraph.first}
            <span>{paragraph.second}</span>
            <span>{paragraph.third}</span>
          </p>
        </div>
      </div>
      <div className={bstyles.wrapper_big_button}>
        <Button
          id={buttonId}
          type='default'
          className={[bstyles.big_button, styles.register_modal_cover_section__switch_button].join(' ')}
          style={boxShadowStyle}
        >
          <div
            className={[
              bstyles.wrapper_div_horizontal_center_positioning,
              styles.register_modal_cover_section__wrapper_left_text_content,
            ].join(' ')}
          >
            {switchSense ? (
              <>
                <div className={bstyles.wrapper_left_icon}>
                  <RightOutlined className={bstyles.left_icon} rotate={180} />
                </div>
                {buttonText}
              </>
            ) : (
              <>
                {buttonText}
                <div className={bstyles.wrapper_right_icon}>
                  <RightOutlined className={bstyles.right_icon} />
                </div>
              </>
            )}
          </div>
        </Button>
      </div>
    </div>
  );
}
