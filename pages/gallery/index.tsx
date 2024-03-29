import { Col, Empty, Image, Row, Typography } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.less';

const { Title, Paragraph } = Typography;

interface IGalleryProps {
  images: any;
}

const Gallery: NextPage<IGalleryProps> = ({ images }) => (
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
    <Image.PreviewGroup>
      <Row className={styles.gallery} gutter={[14, 14]}>
        {images.length === 0 ? (
          <Col span={24}>
            <Empty description='No images' />
          </Col>
        ) : (
          images.map(({ imageUrl }: { imageUrl: string }) => (
            <Col key={imageUrl} xs={24} sm={12} md={8} lg={6}>
              <Image src={imageUrl} />
            </Col>
          ))
        )}
      </Row>
    </Image.PreviewGroup>
  </>
);

const getStaticProps = async () => {
  const res = await fetch(
    `${process.env
      .NEXT_PUBLIC_SANITY_URL!}*[_type == "gallery"]{ "imageUrl": image.asset->url }`
  );
  const { result: images } = await res.json();

  return {
    props: { images },
  };
};

export { getStaticProps };

export default Gallery;
