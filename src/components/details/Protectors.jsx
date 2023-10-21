import Protector from '@components/cards/Protector';
import Button from '@components/buttons/Button';
import { Row, Col, ConfigProvider } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/Protectors.module.css';
// --
export default function Protectors(props) {
  const { array } = props.params;
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
            <Protector params={array[0]} />
          </Col>
          <Col className={styles.column}>
            <Protector params={array[1]} />
          </Col>
          <Col className={styles.column}>
            <Button params={{ text: 'Report trick', change: true }} />
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
}
