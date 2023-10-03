import Title from '@components/text/Title';
import Specification from '@components/checkbox/Specification';
import { Row, Col, ConfigProvider } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/MyData.module.css';
// --
export default function MyData(props) {
  return (
    <div className={[bstyles.wrapper_div_vertical_center_positioning, styles.my_data_wrapper].join(' ')}>
      <Title params={{ title: 'My data:' }} />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'revert',
          },
        }}
      >
        <Row className={styles.my_data_container} justify={'space-between'}>
          {[
            { specification: 'Dog', id: 1 },
            { specification: '5 years old', id: 2 },
            { specification: 'Race crossbreed', id: 3 },
            { specification: '26 kilos', id: 4 },
            { specification: 'Average height', id: 5 },
            { specification: 'Hyperactive', id: 6 },
            { specification: 'Good health', id: 7 },
            { specification: 'Male sex', id: 8 },
          ].map((element) => {
            return (
              <Col key={element.id}>
                <Specification params={{ item: element.specification }} />
              </Col>
            );
          })}
        </Row>
      </ConfigProvider>
    </div>
  );
}
