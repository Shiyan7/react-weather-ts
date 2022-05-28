import type {AppProps} from 'next/app'
import {Provider} from 'react-redux';
import {setupStore} from '../store/store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../theme';
import { Layout } from '../components/Layout/Layout';

export default function MyApp({Component, pageProps} : AppProps) {

    const store = setupStore();

    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Layout>
            <CssBaseline />
            <Component {...pageProps}/>
          </Layout>
        </Provider>
      </ThemeProvider>
    )
}