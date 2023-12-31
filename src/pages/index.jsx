import React from 'react';

// import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
