/* import Link from 'next/link'; */
import RegisterModalFormTop from '@components/register/RegisterModalFormTop';
import RegisterModalFormCenter from '@components/register/RegisterModalFormCenter';
import { Button, Form, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/register/RegisterModalForm.module.css';
// --
export default function RegisterModalForm(props) {
  const boxShadowStyle = {
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 1px 1px -3px rgba(0, 0, 0, 0.13), 0 2px 9px 5px rgba(0, 0, 0, 0.05)',
  };
  const { buttonText, buttonId } = props.params;
  // --
  return (
    <Space
      size={'middle'}
      direction='vertical'
      className={[
        bstyles.wrapper_div_vertical_center_positioning,
        styles.register_modal_form_section__container_all,
      ].join(' ')}
    >
      <div
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.register_modal_form_section__wrapper_form_top,
        ].join(' ')}
      >
        <RegisterModalFormTop
          params={{
            mainText: 'Create Account',
            paragraph: 'or use your email for registration:',
            formTopText: 'switchable-create-account-text',
          }}
        />
        <RegisterModalFormTop
          params={{
            mainText: 'Sign in Petgram',
            paragraph: 'or use your email account:',
            formTopText: 'switchable-sign-in-petgram',
          }}
        />
      </div>
      <Form className='register_modal_form_section__register_user_form' initialValues={{ remember: true }}>
        <div
          className={[
            bstyles.wrapper_div_horizontal_center_positioning,
            styles.register_modal_form_section__wrapper_form_center,
          ].join(' ')}
        >
          <RegisterModalFormCenter
            params={{
              linkText: 'Forgot your password?',
              signIn: false,
              formCenterInput: 'switchable-create-account-input',
              formItemName: {
                email: 'useremail-sign-up',
                username: 'username-sign-up',
                password: 'userpassword-sign-up',
              },
            }}
          />
          <RegisterModalFormCenter
            params={{
              linkText: 'Forgot your password?',
              signIn: true,
              formCenterInput: 'switchable-sign-in-petgram-input',
              formItemName: {
                email: 'useremail-sign-in',
                username: 'username-sign-in',
                password: 'userpassword-sign-in',
              },
            }}
          />
        </div>
        {/* --5-- */}
        <Form.Item name='submit' className={styles.register_modal_form_section__user_form_item}>
          <div
            className={[
              bstyles.wrapper_big_button,
              styles.register_modal_form_section__wrapper_form_submit_button,
            ].join(' ')}
          >
            <Button
              id={buttonId}
              type='default'
              className={[bstyles.big_button, styles.register_modal_form_section__form_submit_button].join(
                ' '
              )}
              style={boxShadowStyle}
              htmlType='submit'
            >
              {buttonText}
              <div className={bstyles.wrapper_right_icon}>
                <RightOutlined className={bstyles.right_icon} />
              </div>
            </Button>
          </div>
        </Form.Item>
        {/* --5-- */}
      </Form>
    </Space>
  );
}
