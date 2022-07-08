import { Layout } from 'antd';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/antd.less';
import '../styles/globals.less';
import styles from '../styles/layout.module.less';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout className={styles.layout}>
      <Navbar />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
