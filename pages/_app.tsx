import type {AppProps} from 'next/app'
import {Provider} from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import {setupStore} from '../store/store';
import useVH from 'react-vh';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../theme';

export default function MyApp({Component, pageProps} : AppProps) {

    useVH()

    const store = setupStore();

    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <NextNProgress/>
          <Component {...pageProps}/>
        </Provider>
      </ThemeProvider>
    )
}