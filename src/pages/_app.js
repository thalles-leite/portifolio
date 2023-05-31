import '@/styles/globals.css';

import initializeAOS from '../utils/aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initializeAOS(); // Inicialize o AOS
  }, []);

  return <Component {...pageProps} />;
}
