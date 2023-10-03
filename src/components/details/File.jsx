import PhotoSection from '@components/details/PhotoSection';
import PrincipalInfo from '@components/details/PrincipalInfo';
import MyData from '@components/details/MyData';
import Behaviors from '@components/details/Behaviors';
import Health from '@components/details/Health';
import ButtonAdopt from '@components/details/ButtonAdopt';
import Story from '@components/details/Story';
import Protectors from '@components/details/Protectors';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/File.module.css';
// --
export default function File() {
  return (
    <div className={[bstyles.wrapper_div_vertical_center_positioning, styles.file_conatiner].join(' ')}>
      <PhotoSection />
      <div
        className={[bstyles.wrapper_div_vertical_center_positioning, styles.file_wrapper_information].join(
          ' '
        )}
      >
        <PrincipalInfo />
        <div
          className={[
            bstyles.wrapper_div_vertical_center_positioning,
            styles.file_wrapper_secondary_information,
          ].join(' ')}
        >
          <div
            className={[bstyles.wrapper_div_vertical_center_positioning, styles.file_wrapper_details].join(
              ' '
            )}
          >
            <MyData />
            <Behaviors />
            <Health />
            <ButtonAdopt />
          </div>
          <div
            className={[
              bstyles.wrapper_div_vertical_center_positioning,
              styles.file_wrapper_story_protector,
            ].join(' ')}
          >
            <Story />
            <Protectors />
          </div>
        </div>
      </div>
    </div>
  );
}
/* ManOutlined */
