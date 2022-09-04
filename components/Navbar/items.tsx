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
    label: 'Strona główna',
  },
  {
    key: 'uslugi',
    icon: <ScissorOutlined />,
    label: 'Usługi',
  },
  {
    key: 'galeria',
    icon: <CameraOutlined />,
    label: 'Galeria',
  },
  {
    key: 'kontakt',
    icon: <PhoneOutlined />,
    label: 'Kontakt',
  },
];

export default items;
