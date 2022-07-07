import { Layout } from 'antd';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar/Navbar';
import '../styles/antd.less';
import '../styles/globals.less';

const { Footer, Content } = Layout;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
