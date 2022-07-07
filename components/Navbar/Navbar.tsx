import { Layout, Menu } from 'antd';
import items, { defaultSelectedKeys } from './items';
import styles from './Navbar.module.less';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <Menu
        className={styles.menu}
        mode='horizontal'
        defaultSelectedKeys={defaultSelectedKeys}
        items={items}
      />
    </Header>
  );
};

export default Navbar;
