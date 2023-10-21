import Logo from '@components/logos/Logo';
import RegisterModal from '@components/register/RegisterModal';
import { Button, Row, Col, ConfigProvider } from 'antd';
import { SearchOutlined, LoginOutlined, InfoOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/headers/NavBar.module.css';
// --
export default function NavBar() {
  return (
    <div className={[bstyles.wrapper_div_horizontal_center_positioning, styles.nav_bar_wrapper].join(' ')}>
      <Logo />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'revert',
          },
        }}
      >
        <Row
          className={[
            bstyles.wrapper_div_horizontal_center_positioning,
            styles.nav_bar_container_globals_action_buttons,
          ].join(' ')}
          gutter={12}
        >
          <Col>
            <Button
              id='start-button-log-in-modal'
              className={[
                bstyles.wrapper_div_horizontal_center_positioning,
                styles.nav_bar_action_button,
              ].join(' ')}
              icon={<LoginOutlined className={styles.nav_bar_icon} />}
            />
            <RegisterModal />
          </Col>
          <Col>
            <Button
              className={[
                bstyles.wrapper_div_horizontal_center_positioning,
                styles.nav_bar_action_button,
              ].join(' ')}
              icon={<InfoOutlined className={styles.nav_bar_icon} />}
            />
          </Col>
          <Col>
            <Button
              className={[
                bstyles.wrapper_div_horizontal_center_positioning,
                styles.nav_bar_action_button,
              ].join(' ')}
              icon={<SearchOutlined className={styles.nav_bar_icon} />}
            />
          </Col>
          <Col>
            <Button
              className={[
                bstyles.wrapper_div_horizontal_center_positioning,
                styles.nav_bar_action_button,
              ].join(' ')}
              icon={<MenuUnfoldOutlined className={styles.nav_bar_icon} />}
            />
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
}
