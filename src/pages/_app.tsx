import { Header } from '../components/Header';
import { AppWrapper } from '../context/AppContext';


import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Header />
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
