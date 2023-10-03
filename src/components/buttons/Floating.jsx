import Link from 'next/link';
import { ConfigProvider, FloatButton } from 'antd';
import { HomeOutlined, PlusOutlined, ArrowUpOutlined } from '@ant-design/icons';
// --
export default function FloatingButton(props) {
  const { trigger, href, visibilityHeight } = props.params;
  const configProviderToken = { fontFamily: 'revert' };
  return (
    <ConfigProvider theme={{ token: configProviderToken }}>
      <FloatButton.Group
        trigger={trigger}
        tooltip={<div>options</div>}
        type='default'
        style={{ right: 24 }}
        icon={<PlusOutlined />}
      >
        <FloatButton.BackTop
          tooltip={<div>top</div>}
          icon={<ArrowUpOutlined />}
          duration={100}
          visibilityHeight={visibilityHeight}
        />
        <Link href={href}>
          <FloatButton icon={<HomeOutlined />} />
        </Link>
      </FloatButton.Group>
    </ConfigProvider>
  );
}
