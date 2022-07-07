import {
  CameraOutlined,
  HomeOutlined,
  PhoneOutlined,
  ScissorOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

const defaultSelectedKeys = ['homepage'];

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
    key: 'about',
    icon: <UserOutlined />,
    label: 'About',
  },
  {
    key: 'contact',
    icon: <PhoneOutlined />,
    label: 'Contact',
  },
];

export { defaultSelectedKeys };

export default items;
