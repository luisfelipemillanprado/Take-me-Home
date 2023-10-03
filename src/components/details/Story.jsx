import Story from '@components/cards/Story';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/details/Story.module.css';
// --
export default function FileStory(props) {
  return (
    <div className={[bstyles.wrapper_div_horizontal_center_positioning, styles.story_wrapper].join(' ')}>
      <Story
        params={{
          story:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, molestiae nemo voluptatibus ab corrupti saepe, vel obcaecati...',
          title: 'My story',
        }}
      />
    </div>
  );
}
