import App from 'next/app';
import { Header } from '../components/Header';
import { AppWrapper, useAppContext } from '../context/AppContext';

import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  )
}

MyApp.getInitialProps = async (useAppContext) => {
  const appProps = await App.getInitialProps(useAppContext);
  return {...appProps}
}

export default MyApp
