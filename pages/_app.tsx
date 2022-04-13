import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import { MainLayout } from '../components/MainLayout/MainLayout';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <NextNProgress />
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}