import { Descriptions, Typography } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styles from './index.module.less';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface IContactProps {
  fullName: string;
  phoneNumber: string;
  email: string;
}

const Contact: NextPage<IContactProps> = ({ fullName, phoneNumber, email }) => {
  return (
    <>
      <Head>
        <title>Marek Szewczyk - usługi ziemno-ogrodnicze - kontakt</title>
      </Head>
      <Title className={styles.title} level={4}>
        Kontakt
      </Title>
      <Paragraph>
        Obszar realizacji obejmuje Lublin i okolice. Zapraszam do kontaktu.
      </Paragraph>
      <Descriptions bordered>
        <Descriptions.Item
          label={
            <>
              <UserOutlined /> Imię i nazwisko
            </>
          }
        >
          {fullName}
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <>
              <PhoneOutlined /> Telefon
            </>
          }
        >
          {phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item
          label={
            <>
              <MailOutlined /> Email
            </>
          }
        >
          {email}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_URL!}*[_type == "contact"][0]`
  );
  const {
    result: { fullName, phoneNumber, email },
  } = await res.json();

  return {
    props: { fullName, phoneNumber, email },
  };
};

export { getStaticProps };

export default Contact;
