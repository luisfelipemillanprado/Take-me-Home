import Protector from '@components/cards/Protector';
import Button from '@components/buttons/Button';
import { Row, Col, ConfigProvider } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/Protectors.module.css';
// --
export default function Protectors(props) {
  return (
    <div
      className={[bstyles.wrapper_div_horizontal_center_positioning, styles.protectors_wrapper].join(' ')}
    >
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'revert',
          },
        }}
      >
        <Row className={styles.protectors_container} gutter={[0, 20]}>
          <Col className={styles.column}>
            <Protector
              params={{
                type: 'Protector',
                name: 'Feline Valladolid Association',
                change: false,
              }}
            />
          </Col>
          <Col className={styles.column}>
            <Protector
              params={{
                type: 'Protector',
                name: 'Protector adoption rate',
                adoptionRate: 5,
                change: true,
              }}
            />
          </Col>
          <Col className={styles.column}>
            <Button params={{ text: 'Report trick', change: true }} />
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
}
