import '../styles/globals.css'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Header />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
