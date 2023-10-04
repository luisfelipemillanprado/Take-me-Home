import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, Badge } from 'antd';
import { HeartOutlined, LikeOutlined } from '@ant-design/icons';
import styles from '@styles/components/cards/PhotoCard.module.css';
import rstyles from '@styles/responsive/mobile/photocard/BreakingPoints.module.css';
const { Meta } = Card;
// --
export default function PhotoCard(props) {
  const { cover, path, name } = props.params;
  const boxShadowStyle = {
    boxShadow:
      '0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 1px 1px -3px rgba(0, 0, 0, 0.13), 0 2px 6px 2px rgba(0, 0, 0, 0.05)',
  };
  const bodyStyleCard = { padding: '0rem' };
  return (
    <Badge.Ribbon text='Available' color='var(--tonality-green-12)'>
      <Card
        className={[styles.photo_card, rstyles.photo_card].join(' ')}
        style={boxShadowStyle}
        bodyStyle={bodyStyleCard}
        bordered={false}
        cover={
          <Link href={path}>
            <Image
              width={140}
              height={140}
              className={[styles.photo_card_image, rstyles.photo_card_image].join(' ')}
              src={cover}
              alt='Pet'
              loading='lazy'
            />
          </Link>
        }
        actions={[
          <Button
            key='like'
            type='default'
            className={styles.photo_card_action_button}
            icon={<LikeOutlined className={styles.photo_card_action_icon} />}
          />,
          <Button
            key='heart'
            type='default'
            className={[styles.photo_card_divider, styles.photo_card_action_button].join(' ')}
            icon={<HeartOutlined className={styles.photo_card_action_icon} />}
          />,
        ]}
      >
        <Meta className={[styles.photo_card_title, rstyles.photo_card_title].join(' ')} title={name} />
      </Card>
    </Badge.Ribbon>
  );
}
