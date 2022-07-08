import { Col, Layout, Row } from 'antd';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import styles from './Content.module.less';

interface IContentProps {
  children: ReactNode;
}

const Content = ({ children }: IContentProps) => {
  const router = useRouter();

  return (
    <Layout.Content className={styles.content}>
      {router.pathname === '/' ? (
        children
      ) : (
        <Row justify='center'>
          <Col xs={22} md={20} lg={18} xl={16}>
            {children}
          </Col>
        </Row>
      )}
    </Layout.Content>
  );
};

export default Content;
