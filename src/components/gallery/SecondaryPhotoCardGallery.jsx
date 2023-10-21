import SecondaryPhoto from '@components/photos/SecondaryPhoto';
import { Row, Col } from 'antd';
import styles from '@styles/components/gallery/SecondaryPhotoCardGallery.module.css';
// --
export default function SecondaryPhotoCardGallery(props) {
  const { array } = props.params;
  return (
    <Row className={styles.secondary_photo_card_gallery_container} gutter={8}>
      {array.map((pet) => {
        return (
          <Col xs={8} sm={8} key={pet.id}>
            <SecondaryPhoto params={{ src: pet.url, href: pet.href }} />
          </Col>
        );
      })}
    </Row>
  );
}
