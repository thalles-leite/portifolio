import Link from 'next/link';
import React from 'react';
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <section className="flex justify-center ">
      <section className=" p-5  text-gray-400">
        &copy; 2023 Thalles Leite
      </section>
      <section className="flex gap-4 justify-center top-2 right-2">

        <Link href="https://www.linkedin.com/in/thallesleite/" target="_blank" className="flex items-center justify-center">
          <FaLinkedin className="w-6 h-6 text-gray-400" />
        </Link>
        <Link href="https://github.com/thalles-leite" target="_blank" className="flex items-center justify-center">
          <FaGithub className="w-6 h-6 text-gray-400" />
        </Link>

      </section>
      <a
        className={`
            flex items-center justify-center ml-4
            text-gray-400
            gap-1
            pb-1 trasition duration-300 
            `}
        href="curriculov2.pdf"
        download
      >
        <FaDownload className="w-5 h-5 text-gray-400" />
        Currículo

      </a>
    </section>

  );
}
