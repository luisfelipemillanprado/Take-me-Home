import Microchip from '@components/identifier/Microchip';
import Contact from '@components/buttons/Contact';
import Reaction from '@components/buttons/Reaction';
import { Row, Col, ConfigProvider } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/PrincipalInfo.module.css';
// --
export default function PrincipalInfo(props) {
  return (
    <div
      className={[bstyles.wrapper_div_vertical_center_positioning, styles.principal_info_wrapper].join(
        ' '
      )}
    >
      <Microchip params={{ name: 'Parcos', location: 'Sevilla, España', maleGender: true }} />
      <div
        className={[
          bstyles.wrapper_div_vertical_center_positioning,
          styles.principal_info_wrapper_contacts_reactions,
        ].join(' ')}
      >
        <ConfigProvider
          theme={{
            token: {
              fontFamily: 'revert',
            },
          }}
        >
          <Row className={styles.principal_info_container_contacts} gutter={16} justify={'start'}>
            <Col style={{ paddingLeft: '0rem' }}>
              <Contact params={{ icon: 'twitter' }} />
            </Col>
            <Col>
              <Contact params={{ icon: 'facebook' }} />
            </Col>
            <Col>
              <Contact params={{ icon: 'whatsapp' }} />
            </Col>
          </Row>
          <Row className={styles.principal_info_container_reactions} gutter={16} justify={'start'}>
            <Col style={{ paddingLeft: '0rem' }}>
              <Reaction params={{ count: '4', change: false, text: 'likes' }} />
            </Col>
            <Col>
              <Reaction params={{ count: '4', change: true, text: 'hearts' }} />
            </Col>
          </Row>
        </ConfigProvider>
      </div>
    </div>
  );
}
