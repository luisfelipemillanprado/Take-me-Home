// import { useState /* useEffect */ } from 'react';
import PhotoCard from '@components/cards/PhotoCard';
import Button from '@components/buttons/Button';
import { Row, Col, ConfigProvider } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/gallery/MainPhotoCardGallery.module.css';
// --
export default function MainPhotoCardGallery(props) {
  const { petsArray } = props.params;
  // const [state /* , setState */] = useState(petsArray);
  // --
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'revert',
          },
        }}
      >
        <Row
          className={[
            bstyles.wrapper_div_horizontal_center_positioning,
            styles.main_photo_card_gallery__container_photo_card_gallery,
          ].join(' ')}
          gutter={[16, 26]}
        >
          {petsArray.map((pet) => {
            return (
              <Col xs={12} sm={12} md={8} key={pet.id}>
                <PhotoCard
                  params={{
                    cover: pet.url,
                    path: `/details/${pet.id}`,
                    name: pet.name,
                  }}
                />
              </Col>
            );
          })}
        </Row>
      </ConfigProvider>
      <Button params={{ text: 'More pets..!', change: false }} />
    </>
  );
}
