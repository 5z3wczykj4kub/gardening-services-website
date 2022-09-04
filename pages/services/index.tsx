import { Table, Typography } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.less';

const { Title, Paragraph } = Typography;

const columns = [
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

interface IService {
  service: string;
  description: string;
  price: string;
}

interface IServicesProps {
  services: IService[];
}

const Services: NextPage<IServicesProps> = ({ services }) => {
  const dataSource = services.map((service) => ({
    key: service.service,
    ...service,
  }));

  return (
    <>
      <Head>
        <title>Website - services</title>
      </Head>
      <Title className={styles.title} level={4}>
        Services
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, qui.
        Tempora, itaque ipsum quae nesciunt in nihil repellat autem iure minima,
        eaque sunt dolorem dolorum labore similique molestias laudantium sit
        distinctio neque. Minima cum expedita mollitia, quam laborum voluptate
        placeat.
      </Paragraph>
      <Table
        className={styles.table}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
    </>
  );
};

const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_URL!}*[_type == "services"]`
  );
  const { result } = await res.json();

  const services = result.map((service: IService) => ({
    service: service.service,
    description: service.description || null,
    price: service.price,
  }));

  return {
    props: {
      services,
    },
  };
};

export { getStaticProps };

export default Services;
