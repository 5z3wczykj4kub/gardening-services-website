import { Col, Layout, Menu, Row } from 'antd';
import { useRouter } from 'next/router';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import items, { defaultSelectedKeys } from './items';
import styles from './Navbar.module.less';

const { Header } = Layout;

const Navbar = () => {
  const router = useRouter();

  const handleMenuItemClick: MenuClickEventHandler = ({ key }) =>
    router.push(`/${key === 'homepage' ? '' : key}`);

  return (
    <Header className={styles.header}>
      <Row justify='center'>
        <Col xs={22} md={20} lg={18} xl={16}>
          <div className={styles.logo}>LOGO</div>
          <Menu
            className={styles.menu}
            mode='horizontal'
            defaultSelectedKeys={defaultSelectedKeys}
            items={items}
            onClick={handleMenuItemClick}
          />
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
