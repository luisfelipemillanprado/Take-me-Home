import Photos from '@components/details/Photos';
import Microchip from '@components/details/Microchip';
import Contacts from '@components/details/Contacts';
import Reactions from '@components/details/Reactions';
import Specifications from '@components/details/Specifications';
import Delivery from '@components/details/Delivery';
import Adoption from '@components/details/Adoption';
import Stories from '@components/details/Stories';
import Protectors from '@components/details/Protectors';
import Photo2 from '@public/images/gallery/photog_2.jpg';
import Photo3 from '@public/images/gallery/photog_3.jpeg';
import Photo4 from '@public/images/gallery/photog_4.jpg';
import Photo5 from '@public/images/gallery/photog_5.jpg';
import { Space } from 'antd';
// --
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/File.module.css';
import rstyles from '@styles/responsive/mobile/details/FileR.module.css';
// --
export default function File() {
  return (
    <div
      className={[
        bstyles.wrapper_div_vertical_center_positioning,
        styles.file_container,
        rstyles.file_container,
      ].join(' ')}
    >
      <Photos params={{ photo2: Photo2, photo3: Photo3, photo4: Photo4, photo5: Photo5 }} />
      <Space className={styles.file_wrapper_information} direction='vertical'>
        <Space className={styles.file_basic_information_container} direction='vertical'>
          <Microchip params={{ name: 'Parcos', location: 'Sevilla, España', maleGender: true }} />
          <Space className={styles.file_container_contacts_reactions} direction='vertical'>
            <Contacts />
            <Reactions />
          </Space>
        </Space>
        <Space className={styles.file_specific_information_wrapper} direction='vertical'>
          <Space
            className={[
              styles.file_specific_information_container,
              rstyles.file_specific_information_container,
            ].join(' ')}
            direction='vertical'
          >
            <Specifications
              params={{
                title: 'My data:',
                array: [
                  { specification: 'Dog', id: 1 },
                  { specification: '5 years old', id: 2 },
                  { specification: 'Race crossbreed', id: 3 },
                  { specification: '26 kilos', id: 4 },
                  { specification: 'Average height', id: 5 },
                  { specification: 'Hyperactive', id: 6 },
                  { specification: 'Good health', id: 7 },
                  { specification: 'Male sex', id: 8 },
                ],
                margin: false,
              }}
            />
            <Specifications
              params={{
                title: 'Behavior:',
                array: [
                  { specification: 'Good with other dogs', id: 10 },
                  { specification: 'Loving', id: 11 },
                  { specification: 'Like company', id: 12 },
                  { specification: 'Sportive', id: 13 },
                  { specification: 'Like to walk', id: 14 },
                  { specification: 'Self sufficient', id: 15 },
                ],
                margin: true,
              }}
            />
            <Delivery
              params={{
                title: 'They give me:',
                direction: 'horizontal',
                size: 'small',
                current: 4,
                items: [
                  {
                    title: 'Wormed',
                  },
                  {
                    title: 'Sterilized',
                  },
                  {
                    title: 'Microchipped',
                  },
                  {
                    title: 'Vaccinated',
                  },
                ],
              }}
            />
            <Adoption />
          </Space>
          <Space className={styles.file_container_additional_information} direction='vertical'>
            <Stories
              params={{
                story:
                  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, molestiae nemo voluptatibus ab corrupti saepe, vel obcaecati...',
              }}
            />
            <Protectors
              params={{
                array: [
                  {
                    type: 'Protector',
                    name: 'Feline Valladolid Association',
                    change: false,
                  },
                  {
                    type: 'Protector',
                    name: 'Protector adoption rate',
                    adoptionRate: 5,
                    change: true,
                  },
                ],
              }}
            />
          </Space>
        </Space>
      </Space>
    </div>
  );
}
