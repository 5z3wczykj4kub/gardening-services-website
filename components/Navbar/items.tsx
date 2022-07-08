import {
  CameraOutlined,
  HomeOutlined,
  PhoneOutlined,
  ScissorOutlined,
} from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

const items: ItemType[] = [
  {
    key: 'homepage',
    icon: <HomeOutlined />,
    label: 'Homepage',
  },
  {
    key: 'services',
    icon: <ScissorOutlined />,
    label: 'Services',
  },
  {
    key: 'gallery',
    icon: <CameraOutlined />,
    label: 'Gallery',
  },
  {
    key: 'contact',
    icon: <PhoneOutlined />,
    label: 'Contact',
  },
];

export default items;
