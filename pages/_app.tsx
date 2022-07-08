import { Layout } from 'antd';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import '../styles/antd.less';
import '../styles/globals.less';
import styles from '../styles/layout.module.less';

const { Content } = Layout;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout className={styles.layout}>
      <Navbar />
      <Content className={styles.content}>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
