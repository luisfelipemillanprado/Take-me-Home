import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, Badge } from 'antd';
import { HeartOutlined, LikeOutlined } from '@ant-design/icons';
import styles from '@styles/components/cards/PhotoCard.module.css';
const { Meta } = Card;
// --
export default function PhotoCard(props) {
  const { cover, path } = props.params;
  const boxShadowStyle = {
    boxShadow:
      '0 2px 4px 0 rgba(0, 0, 0, 0.08), 0 1px 1px -3px rgba(0, 0, 0, 0.13), 0 2px 6px 2px rgba(0, 0, 0, 0.05)',
  };
  const bodyStyleCard = { padding: '0rem' };
  return (
    <Badge.Ribbon text='Available' color='var(--tonality-green-12)'>
      <Card
        className={styles.main_photo_card_gallery}
        style={boxShadowStyle}
        bodyStyle={bodyStyleCard}
        bordered={false}
        cover={
          <Link href={path}>
            <Image
              width={140}
              height={140}
              className={styles.main_photo_card_gallery__card_image}
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
            className={styles.main_photo_card_gallery__action_button}
            icon={<LikeOutlined className={styles.main_photo_card_gallery__action_icon} />}
          />,
          <Button
            key='heart'
            type='default'
            className={[
              styles.main_photo_card_gallery__divider,
              styles.main_photo_card_gallery__action_button,
            ].join(' ')}
            icon={<HeartOutlined className={styles.main_photo_card_gallery__action_icon} />}
          />,
        ]}
      >
        <Meta className={styles.main_photo_card_gallery_card_title} title='name' />
      </Card>
    </Badge.Ribbon>
  );
}
