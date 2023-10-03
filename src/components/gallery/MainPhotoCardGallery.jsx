// import { useState /* useEffect */ } from 'react';
import PhotoCard from '@components/cards/PhotoCard';
import Button from '@components/buttons/Button';
import Photo1 from '@public/images/gallery/photog_2.jpg';
import Photo2 from '@public/images/gallery/photog_3.jpeg';
import { Row, Col, ConfigProvider } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/gallery/MainPhotoCardGallery.module.css';
// --
export default function MainPhotoCardGallery(props) {
  // const { petsArray } = props.params;
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
          gutter={[24, 26]}
        >
          {[
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
            { url: Photo1, id: 'kcmsdcmdsskl' },
            { url: Photo2, id: 'kcmsdcmdsskk' },
          ].map((pet) => {
            return (
              <Col key={pet.id}>
                <PhotoCard
                  params={{
                    cover: pet.url,
                    path: `/details/${pet.id}`,
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
