/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles/globals.css';
import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

import initializeAOS from '../utils/aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initializeAOS(); // Inicialize o AOS
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>

  );
}
