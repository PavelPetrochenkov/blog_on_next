import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store'
import { ComponentType } from 'react';

type myAppProps = {
  Component: ComponentType,
  pageProps: {}
}

function MyApp({ Component, pageProps }: myAppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
