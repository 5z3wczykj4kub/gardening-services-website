import { Descriptions, Typography } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from './index.module.less';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Website - contact</title>
      </Head>
      <Title className={styles.title} level={4}>
        Contact
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, qui.
        Tempora, itaque ipsum quae nesciunt in nihil repellat autem iure minima,
        eaque sunt dolorem dolorum labore similique molestias laudantium sit
        distinctio neque. Minima cum expedita mollitia, quam laborum voluptate
        placeat.
      </Paragraph>
      <Descriptions bordered>
        <Descriptions.Item
          label={
            <>
              <UserOutlined /> Full name
            </>
          }
        >
          John Doe
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <>
              <PhoneOutlined /> Phone
            </>
          }
        >
          123-456-7890
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <>
              <MailOutlined /> Email
            </>
          }
        >
          johndoe@example.com
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default Contact;
