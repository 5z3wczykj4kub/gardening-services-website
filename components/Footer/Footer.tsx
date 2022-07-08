import { Col, Layout, Row } from 'antd';
import styles from './Footer.module.less';

const Footer = () => (
  <Layout.Footer className={styles.footer}>
    <Row justify='center'>
      <Col xs={22} md={20} lg={18} xl={16}>
        Footer
      </Col>
    </Row>
  </Layout.Footer>
);

export default Footer;
