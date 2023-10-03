import Link from 'next/link';
import { Form, Input } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/register/RegisterModalFormCenter.module.css';
// --
export default function RegisterModalFormCenter(props) {
  const { linkText, signIn, formCenterInput, formItemName } = props.params;
  const rulesFormItemUsername = [
    {
      required: true,
      message: '',
    },
  ];
  const rulesFormItemEmail = [
    {
      required: true,
      message: '',
    },
  ];
  const rulesFormItemPassword = [
    {
      required: true,
      message: '',
    },
  ];
  // --
  return (
    <div id={formCenterInput} className={styles.register_modal_form_center_section__container_all}>
      {/* --1-- */}
      {signIn ? null : (
        <Form.Item
          className={styles.register_modal_form_center_section__user_form_item}
          name={formItemName.email}
          rules={rulesFormItemEmail}
        >
          <Input
            className={styles.register_modal_form_center_section__user_form_input}
            prefix={
              <MailOutlined className={styles.register_modal_form_center_section__user_input_icon} />
            }
            placeholder='Email'
          />
        </Form.Item>
      )}
      {/* --2-- */}
      <Form.Item
        className={styles.register_modal_form_center_section__user_form_item}
        name={formItemName.username}
        rules={rulesFormItemUsername}
      >
        <Input
          className={styles.register_modal_form_center_section__user_form_input}
          prefix={<UserOutlined className={styles.register_modal_form_center_section__user_input_icon} />}
          placeholder='Username'
        />
      </Form.Item>
      {/* --3-- */}
      <Form.Item
        className={styles.register_modal_form_center_section__user_form_item}
        name={formItemName.password}
        rules={rulesFormItemPassword}
      >
        <Input.Password
          className={styles.register_modal_form_center_section__user_form_input}
          prefix={<LockOutlined className={styles.register_modal_form_center_section__user_input_icon} />}
          placeholder='Password'
        />
      </Form.Item>
      {/* --4-- */}
      {signIn ? (
        <Form.Item>
          <div className={bstyles.wrapper_div_horizontal_center_positioning}>
            <Link className={styles.register_modal_form_center_section__forgot_password_link} href='/'>
              {linkText}
            </Link>
          </div>
        </Form.Item>
      ) : null}
      {/* --4-- */}
    </div>
  );
}
