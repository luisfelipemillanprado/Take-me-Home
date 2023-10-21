import Reaction from '@components/buttons/Reaction';
import { Row, Col, ConfigProvider } from 'antd';
import styles from '@styles/components/details/Reactions.module.css';
// --
export default function Reactions(props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'revert',
        },
      }}
    >
      <Row className={styles.reactions_container} gutter={16} justify={'start'}>
        <Col>
          <Reaction params={{ count: '4', change: false, text: 'likes' }} />
        </Col>
        <Col>
          <Reaction params={{ count: '4', change: true, text: 'hearts' }} />
        </Col>
      </Row>
    </ConfigProvider>
  );
}
