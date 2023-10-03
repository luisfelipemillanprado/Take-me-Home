import { Avatar, Card, ConfigProvider } from 'antd';
import { HomeFilled, DollarTwoTone, InfoCircleFilled } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/cards/Protector.module.css';
const { Meta } = Card;
// --
export default function Protector(props) {
  const { type, name, adoptionRate, change } = props.params;
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'revert',
        },
      }}
    >
      <Card className={styles.protector_card}>
        <Meta
          className={bstyles.wrapper_div_horizontal_center_positioning}
          avatar={
            <Avatar
              className={[
                bstyles.wrapper_div_horizontal_center_positioning,
                styles.protector_card_avatar,
              ].join(' ')}
              icon={
                change ? (
                  <InfoCircleFilled className={styles.protector_card_icon} />
                ) : (
                  <HomeFilled className={styles.protector_card_icon} />
                )
              }
            />
          }
          title={<h3 className={styles.protector_card_title}>{name}</h3>}
          description={
            change ? (
              <div
                className={[
                  bstyles.wrapper_div_horizontal_center_positioning,
                  styles.protector_container_rate_adoption,
                ].join(' ')}
              >
                <span className={styles.protector_rate_adoption}>{adoptionRate}</span>
                <DollarTwoTone className={styles.protector_rate_adoption_icon} />
              </div>
            ) : (
              type
            )
          }
        />
      </Card>
    </ConfigProvider>
  );
}
