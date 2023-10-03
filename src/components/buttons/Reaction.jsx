import { Avatar, Button, ConfigProvider } from 'antd';
import { LikeFilled, HeartFilled } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/buttons/Reaction.module.css';
// --
export default function Reaction(props) {
  const { count, change, text } = props.params;
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'revert',
        },
      }}
    >
      <Button
        className={[bstyles.wrapper_div_horizontal_center_positioning, styles.reaction_button].join(' ')}
        icon={
          <Avatar
            className={[
              bstyles.wrapper_div_horizontal_center_positioning,
              styles.reaction__avatar_button,
            ].join(' ')}
            icon={
              change ? (
                <HeartFilled className={styles.reaction__icon_button} />
              ) : (
                <LikeFilled className={styles.reaction__icon_button} />
              )
            }
          />
        }
      >
        {count} {text}
      </Button>
    </ConfigProvider>
  );
}
