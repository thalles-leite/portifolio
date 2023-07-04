import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className=" bg-slate-100 shadow flex justify-center absolute top-0 z-10 w-full">
      <section className="flex gap-4 justify-center absolute top-12 sm:top-5 right-4">

        <Link href="https://www.linkedin.com/in/thallesleite/" target="_blank" className="flex items-center justify-center">
          <FaLinkedin className="w-6 h-6 text-blue-500" />
        </Link>
        <Link href="https://github.com/thalles-leite" target="_blank" className="flex items-center justify-center">
          <FaGithub className="w-6 h-6 text-gray-800" />
        </Link>

      </section>
      <nav className={`
        // sm:py-4 py-2
        flex justify-between
        text:sm sm:text-xl 
        font-bold         
        max-w-5xl
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
