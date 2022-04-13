import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}