import 'antd/dist/antd.css';
import type {AppProps} from 'next/app'
import {Layout} from '../components/Layout/Layout';
import {Provider} from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import {setupStore} from '../store/store';

export default function MyApp({Component, pageProps} : AppProps) {

    const store = setupStore();

    return (
      <Provider store={store}>
        <Layout>
          <NextNProgress/>
          <Component {...pageProps}/>
        </Layout>
      </Provider>
    )
}