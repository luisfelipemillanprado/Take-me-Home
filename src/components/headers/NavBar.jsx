import PetLogo from '@components/logos/Logo';
// import ShapeTriangle from '@components/divider/ShapeTriangle';
import RegisterModal from '@components/register/RegisterModal';
import { Button, Row, Col, ConfigProvider } from 'antd';
import { SearchOutlined, LoginOutlined, InfoOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/headers/NavBar.module.css';
// --
export default function NavigationBar() {
  return (
    <div
      className={[
        bstyles.wrapper_div_horizontal_center_positioning,
        styles.mobile_header__wrapper_bar,
      ].join(' ')}
    >
      <div className={bstyles.wrapper_div_horizontal_center_positioning} style={{ marginLeft: '-0.5rem' }}>
        <PetLogo />
      </div>
      <div
        className={[
          bstyles.wrapper_div_horizontal_center_positioning,
          styles.mobile_header__container_globals_action_buttons,
        ].join(' ')}
      >
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
              styles.mobile_header__wrapper_globals_action_buttons,
            ].join(' ')}
            gutter={12}
          >
            <Col>
              <Button
                id='start-button-log-in-modal'
                className={[
                  bstyles.wrapper_div_horizontal_center_positioning,
                  styles.mobile_header__action_button,
                ].join(' ')}
                icon={<LoginOutlined className={styles.mobile_header__icon} />}
              />
              <RegisterModal />
            </Col>
            <Col>
              <Button
                className={[
                  bstyles.wrapper_div_horizontal_center_positioning,
                  styles.mobile_header__action_button,
                ].join(' ')}
                icon={<InfoOutlined className={styles.mobile_header__icon} />}
              />
            </Col>
            <Col>
              <Button
                className={[
                  bstyles.wrapper_div_horizontal_center_positioning,
                  styles.mobile_header__action_button,
                ].join(' ')}
                icon={<SearchOutlined className={styles.mobile_header__icon} />}
              />
            </Col>
            <Col>
              <Button
                className={[
                  bstyles.wrapper_div_horizontal_center_positioning,
                  styles.mobile_header__action_button,
                ].join(' ')}
                icon={<MenuUnfoldOutlined className={styles.mobile_header__icon} />}
              />
            </Col>
          </Row>
        </ConfigProvider>
      </div>
      {/* <ShapeTriangle /> */}
    </div>
  );
}
