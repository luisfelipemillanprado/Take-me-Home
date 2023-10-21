import Specification from '@components/checkbox/Specification';
import { Row, Col, Space, Typography, ConfigProvider } from 'antd';
import styles from '@styles/components/details/Specifications.module.css';
const { Title } = Typography;
// --
export default function Specifications(props) {
  const { title, array, margin } = props.params;
  return (
    <Space
      className={[styles.specifications_wrapper, margin ? styles.margin_top : ''].join(' ')}
      align='start'
      direction='vertical'
    >
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'revert',
          },
        }}
      >
        <Title className={styles.specifications_title} level={3}>
          {title}
        </Title>
        <Row className={styles.specifications_container} justify={'space-between'}>
          {array.map((element) => {
            return (
              <Col key={element.id}>
                <Specification params={{ item: element.specification }} />
              </Col>
            );
          })}
        </Row>
      </ConfigProvider>
    </Space>
  );
}
