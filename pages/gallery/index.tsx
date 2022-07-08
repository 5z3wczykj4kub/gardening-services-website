import { Col, Image, Row, Typography } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.less';

const { Title, Paragraph } = Typography;

const Gallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Website - gallery</title>
      </Head>
      <Title className={styles.title} level={4}>
        Gallery
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, qui.
        Tempora, itaque ipsum quae nesciunt in nihil repellat autem iure minima,
        eaque sunt dolorem dolorum labore similique molestias laudantium sit
        distinctio neque. Minima cum expedita mollitia, quam laborum voluptate
        placeat.
      </Paragraph>
      <Row className={styles.gallery} gutter={[14, 14]}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image src='/gallery-0.jpg' />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image src='/gallery-1.jpg' />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image src='/gallery-2.jpg' />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image src='/gallery-3.jpg' />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image src='/gallery-4.jpg' />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image src='/gallery-5.jpg' />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image src='/gallery-6.jpg' />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image src='/gallery-7.jpg' />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Image src='/gallery-8.jpg' />
        </Col>
      </Row>
    </>
  );
};

export default Gallery;
