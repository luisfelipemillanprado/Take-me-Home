import Title from '@components/text/Title';
import PetSpecification from '@components/checkbox/Specification';
import { Row, Col, ConfigProvider } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/Behaviors.module.css';

// --
export default function Behaviors(props) {
  return (
    <div
      className={[
        bstyles.wrapper_div_vertical_center_positioning,
        styles.file_behaviors__wrapper_muy_behavior,
      ].join(' ')}
    >
      <Title params={{ title: 'Behavior:' }} />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'revert',
          },
        }}
      >
        <Row className={styles.file_behaviors__container_row} justify={'space-between'}>
          {[
            { behavior: 'Good with other dogs', id: 10 },
            { behavior: 'Loving', id: 11 },
            { behavior: 'Like company', id: 12 },
            { behavior: 'Sportive', id: 13 },
            { behavior: 'Like to walk', id: 14 },
            { behavior: 'Self sufficient', id: 15 },
          ].map((element) => {
            return (
              <Col key={element.id}>
                <PetSpecification params={{ item: element.behavior }} />
              </Col>
            );
          })}
        </Row>
      </ConfigProvider>
    </div>
  );
}
