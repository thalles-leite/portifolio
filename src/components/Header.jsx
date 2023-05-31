import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className={`
        sm:py-8 py-4
        sm:px-12 px-4
        flex justify-between items-center
        text:sm sm:text-xl 
        font-bold         
      `}
      >
        <section className="text-gray-800">
          <Link
            className={`
            hover:border-b-4 
            hover:border-black
            hover:text-black
            pb-1 trasition duration-300 
            `}
            href="/"
          >
            Home

          </Link>
        </section>
        <section>
          <ul className="flex text-gray-700
        "
          >

            <li className="ml-4 ">

              <Link
                className={`
            hover:border-b-4 
            hover:border-black
            hover:text-black
            pb-1 trasition duration-300 
            `}
                href="#about"
              >
                
                Sobre

              </Link>
               

            </li>
            <li className="ml-4">
              <Link
                className={`
            hover:border-b-4 
            hover:border-black
            hover:text-black
            pb-1 trasition duration-300 
            `}
                href="#portfolio"
              >
                Portfólio

              </Link>
            </li>
            <li className="ml-4">
              <Link
                className={`
            hover:border-b-4 
            hover:border-black
            hover:text-black
            pb-1 trasition duration-300 
            `}
                href="#contact"
              >
                Contato

              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}
