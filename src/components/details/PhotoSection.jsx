import PrimaryPhoto from '@components/photos/PrimaryPhoto';
import SecondaryPhoto from '@components/links/SecondaryPhoto';
import Photo2 from '@public/images/gallery/photog_2.jpg';
import Photo3 from '@public/images/gallery/photog_3.jpeg';
import Photo4 from '@public/images/gallery/photog_4.jpg';
import Photo5 from '@public/images/gallery/photog_5.jpg';
import { Row, Col } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/PhotoSection.module.css';
// --
export default function PhotoSection() {
  return (
    <div
      className={[
        bstyles.wrapper_div_vertical_center_positioning,
        styles.photo_section__wrapper_photos,
      ].join(' ')}
    >
      <PrimaryPhoto params={{ src: Photo2 }} />
      <Row className={styles.photo_section__container_secondary_photos} justify={'space-between'}>
        <Col>
          <SecondaryPhoto params={{ src: Photo3, href: '/' }} />
        </Col>
        <Col>
          <SecondaryPhoto params={{ src: Photo4, href: '/' }} />
        </Col>
        <Col>
          <SecondaryPhoto params={{ src: Photo5, href: '/' }} />
        </Col>
      </Row>
    </div>
  );
}
