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
      <title>Marek Szewczyk - usługi ziemno-ogrodnicze - galeria</title>
    </Head>
    <Title className={styles.title} level={4}>
      Galeria
    </Title>
    <Paragraph>Galeria zdjęć z wybranych realizacji</Paragraph>
    <Image.PreviewGroup>
      <Row className={styles.gallery} gutter={[14, 14]}>
        {images.length === 0 ? (
          <Col span={24}>
            <Empty description='Brak zdjęć' />
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
