import { Table, Typography } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import columns from './columns';
import styles from './index.module.less';

const { Title, Paragraph } = Typography;

const dataSource = [
  {
    key: '1',
    service: 'Service 1',
    description: 'Lorem ipsum dolor sit amet.',
    price: 99.99,
  },
  {
    key: '2',
    service: 'Service 2',
    description: 'Lorem ipsum dolor sit amet.',
    price: 99.99,
  },
  {
    key: '3',
    service: 'Service 3',
    description: 'Lorem ipsum dolor sit amet.',
    price: 99.99,
  },
  {
    key: '4',
    service: 'Service 4',
    description: 'Lorem ipsum dolor sit amet.',
    price: 99.99,
  },
];

const Services: NextPage = () => {
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

export default Services;
