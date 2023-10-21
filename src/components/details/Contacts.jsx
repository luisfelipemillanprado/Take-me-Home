import Contact from '@components/buttons/Contact';
import { Row, Col, ConfigProvider } from 'antd';
import styles from '@styles/components/details/Contacts.module.css';
// --
export default function Contacts(props) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'revert',
        },
      }}
    >
      <Row className={styles.contacts_container} gutter={16} justify={'start'}>
        <Col>
          <Contact params={{ icon: 'twitter' }} />
        </Col>
        <Col>
          <Contact params={{ icon: 'facebook' }} />
        </Col>
        <Col>
          <Contact params={{ icon: 'whatsapp' }} />
        </Col>
      </Row>
    </ConfigProvider>
  );
}
