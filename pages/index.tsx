import 'antd/dist/antd.css';
import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';

interface IHomeProps {
  title: string;
  subtitle: string;
  phoneNumber: string;
}

const Home: NextPage<IHomeProps> = (props) => (
  <>
    <Head>
      <title>Marek Szewczyk - usługi ziemno-ogrodnicze - strona główna</title>
      <meta
        name='description'
        content='Marek Szewczyk - usługi ziemno-ogrodnicze - strona główna'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Hero {...props} />
  </>
);

const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_URL!}*[_type == "homepage"][0]`
  );
  const {
    result: { title, subtitle, phoneNumber },
  } = await res.json();

  return {
    props: { title, subtitle, phoneNumber },
  };
};

export type { IHomeProps };

export { getStaticProps };

export default Home;
