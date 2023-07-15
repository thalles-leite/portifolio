import Link from 'next/link';
import React from 'react';
import {
  FaGithub, FaLinkedin, FaMailBulk,
} from 'react-icons/fa';

import { AiOutlineMail } from 'react-icons/ai';

export default function Contact() {
  return (
    <section className=" text-gray-800 pt-10 px-4 flex flex-col shadow-lg items-center   relative" id="contact">

      <section className="flex text-justify justify-center mb-10 w-full flex-col items-center mt-10">
        <section
          className="h-fit w-full "
        >
          <h1 className="text-2xl font-bold text-center justify-center flex items-center gap-2 mb-10">
            <FaMailBulk className="w-6 h-6 text-gray-800" />
            Contato
          </h1>

          <section className=" bg-white text-gray-800 pt-10   px-4 flex flex-col gap-10 shadow-lg  items-center   relative p-5 rounded-2xl" id="contact">
            <section className="flex flex-row items-center justify-center gap-10">
              <section className="flex flex-col items-center justify-center gap">
                <h1 className="text-2xl font-bold text-center flex items-center gap-2 mb-2">
                  Linkedin
                </h1>
                <Link href="https://www.linkedin.com/in/thallesleite/" target="_blank" rel="noreferrer">
                  <FaLinkedin className="w-14 h-14 text-gray-800" />
                </Link>
              </section>

              <section className="flex flex-col items-center justify-center gap">
                <h1 className="text-2xl font-bold text-center flex items-center gap-2 mb-2">
                  Github
                </h1>
                <Link href="https://github.com/thalles-leite/" target="_blank" rel="noreferrer">
                  <FaGithub className="w-14 h-14 text-gray-800" />
                </Link>
              </section>
            </section>

            <section className="flex items-center gap-2">
              <AiOutlineMail className="w-6 h-6 text-gray-800" />
              eng.thallesleite@gmail.com
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
