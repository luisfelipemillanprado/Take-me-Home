import Title from '@components/text/Title';
import Health from '@components/steps/Health';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/Health.module.css';
// --
export default function FileHealth() {
  return (
    <div
      className={[
        bstyles.wrapper_div_vertical_center_positioning,
        styles.file_health__wrapper_health,
      ].join(' ')}
    >
      <Title params={{ title: 'They give me:' }} />
      <Health
        params={{
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
    </div>
  );
}
