import { Row, Col, Avatar, Button, Card, Typography, ConfigProvider } from 'antd';
import { ReadFilled, ZoomInOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/cards/Story.module.css';
const { Meta } = Card;
const { Title } = Typography;
// --
export default function Story(props) {
  const { story, title } = props.params;
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'revert',
          fontSize: '1.6rem',
        },
      }}
    >
      <Row className={styles.story_container}>
        <Col>
          <Card
            className={styles.story_card}
            actions={[
              <Button
                key='settings'
                type='default'
                className={styles.story_action_button}
                icon={<SettingOutlined className={styles.story_action_icon} />}
              />,
              <Button
                key='edit'
                type='default'
                className={styles.story_action_button}
                icon={<EditOutlined className={styles.story_action_icon} />}
              />,
              <Button
                key='ellipsis'
                type='default'
                className={styles.story_action_button}
                icon={<ZoomInOutlined className={styles.story_action_icon} />}
              />,
            ]}
          >
            <Meta
              className={styles.story_card_meta}
              avatar={
                <Avatar
                  className={[bstyles.wrapper_div_horizontal_center_positioning, styles.story_avatar].join(
                    ' '
                  )}
                  icon={<ReadFilled className={styles.story_card_icon} />}
                />
              }
              title={
                <Title className={styles.story_title} level={3}>
                  {title}
                </Title>
              }
              description={story}
            />
          </Card>
        </Col>
      </Row>
    </ConfigProvider>
  );
}
