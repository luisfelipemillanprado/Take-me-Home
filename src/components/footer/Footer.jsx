import Link from 'next/link';
import { Space, Typography, ConfigProvider } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/footer/Footer.module.css';
const { Paragraph, Title } = Typography;
// --
export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_wrapper_all}>
        <div
          className={[bstyles.wrapper_div_vertical_center_positioning, styles.footer_wrapper_purpose].join(
            ' '
          )}
        >
          <ConfigProvider
            theme={{
              token: {
                fontFamily: 'revert',
              },
            }}
          >
            <Space className={styles.footer_space} align='start' direction='vertical' size={'small'}>
              <Title className={[styles.footer_title, styles.footer_primary_title].join(' ')} level={2}>
                Find thousands of animals for adoption.
              </Title>
              <Title className={[styles.footer_title, styles.footer_secondary_title].join(' ')} level={3}>
                Are you thinking about adopting? <br /> Try Miwuki Pet Shelter!
              </Title>
              <Paragraph className={styles.footer_paragraph}>
                At Miwuki Pet Shelter you can find hundreds of dogs, puppies, cats, kittens, ferrets,
                rabbits, guinea pigs, rats, mice, chinchillas, gerbils, reptile pigs, birds... for adoption
                from animal shelters and associations or kennels from all over the world.
              </Paragraph>
              <Paragraph className={styles.footer_paragraph}>
                If you are looking to adopt or foster an animal, you are in the right place!
              </Paragraph>
              <Paragraph className={styles.footer_paragraph}>
                Adopt. Save a life, gain a friend. With Miwuki Pet Shelter.
              </Paragraph>
            </Space>
            {/* <Space className=''></Space> */}
          </ConfigProvider>
        </div>
        <div
          className={[
            bstyles.wrapper_div_vertical_center_positioning,
            styles.footer_wrapper_legal_terms,
          ].join(' ')}
        >
          <ConfigProvider
            theme={{
              token: {
                fontFamily: 'revert',
              },
            }}
          >
            <Space className={styles.footer_space} align='center' direction='vertical' size={'small'}>
              <Paragraph className={styles.footer_paragraph}>
                2019-2023 <CopyrightOutlined /> Una plataforma de Miwuki con la colaboración de Fundación
                Affinity
              </Paragraph>
            </Space>
            <Space className={styles.footer_space} align='center' direction='vertical' size={'small'}>
              <Link className={styles.footer_link} href={'/'}>
                Terms and conditions
              </Link>
              <Link className={styles.footer_link} href={'/'}>
                Privacy Policy
              </Link>
              <Link className={styles.footer_link} href={'/'}>
                Cookies
              </Link>
              <Link className={styles.footer_link} href={'/'}>
                FAQ
              </Link>
            </Space>
          </ConfigProvider>
        </div>
      </div>
    </section>
  );
}
