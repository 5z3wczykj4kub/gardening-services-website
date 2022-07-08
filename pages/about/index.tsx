import { Typography } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from './index.module.less';

const { Title, Paragraph } = Typography;

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Website - about</title>
      </Head>
      <Title className={styles.title} level={4}>
        About
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, qui.
        Tempora, itaque ipsum quae nesciunt in nihil repellat autem iure minima,
        eaque sunt dolorem dolorum labore similique molestias laudantium sit
        distinctio neque. Minima cum expedita mollitia, quam laborum voluptate
        placeat.
      </Paragraph>
    </>
  );
};

export default About;
