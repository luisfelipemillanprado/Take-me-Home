import { Space } from 'antd';
import styles from '@styles/components/divider/ShapeTriangle.module.css';
// --
export default function TriangleAsymmetrical(props) {
  return (
    <Space className={styles.container_svg} align='start' direction='vertical' size={'small'}>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
        {...props}
      >
        <path fill='#F5F5F5' d='M649.97 0L550.03 0 599.91 54.12 649.97 0z' className='shape-fill'></path>
      </svg>
    </Space>
  );
}
