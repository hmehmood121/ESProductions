import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useRouter } from 'next/router';



function MyApp({ Component, pageProps }) {
  const { asPath } =useRouter();
  return (
    <> 
    {asPath !== '/dashboard' &&
      <Navbar />}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
