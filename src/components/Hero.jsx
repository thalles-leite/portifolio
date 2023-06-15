// Hero.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <section className=" text-gray-700 h-screen flex flex-col items-center justify-around relative">
      <section className="flex gap-4 justify-center   absolute top-2 right-2">

        <Link href="https://www.linkedin.com/in/thallesleite/" className="flex items-center justify-center">
          <FaLinkedin className="w-6 h-6 text-blue-500" />
        </Link>
        <Link href="https://github.com/thalles-leite" className="flex items-center justify-center">
          <FaGithub className="w-6 h-6 text-gray-800" />
        </Link>

      </section>
      <section>
        <div
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <Image
            src="/images/profile.jpeg"
            alt="profile image"
            width={200}
            height={200}
            className="rounded-full shadow-2xl border-2
          border-slate-900
          "
          />
        </div>
      </section>

      <section className="text-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl font-bold">
            Olá, sou
            <span className="text-slate-500"> Thalles.</span>
          </h1>
          <h2 className="text-2xl ">Desenvolvedor Web Front-End</h2>

        </div>
      </section>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
      >
        <section className="flex w-full flex-col gap-2">
          <h1 className="text-sm font-bold ml-5">
            STACKS
          </h1>

          <hr />

          <section className="flex flex-wrap w-full gap-4 px-2 justify-center items-end">
            <section className="relative w-7 h-7">
              <Image src="/images/html5.png" alt="profile image" fill />
            </section>
            <section className="relative w-7 h-7">

              <Image src="/images/CSS3.png" alt="profile image" fill />
            </section>
            <section className="relative w-7 h-7">

              <Image src="/images/javascript.png" alt="profile image" fill />
            </section>
            <section className="relative w-7 h-7">

              <Image src="/images/react.png" alt="profile image" fill />
            </section>
            <section className="relative w-7 h-7">

              <Image src="/images/next.png" alt="profile image" fill />
            </section>
            <section className="relative w-7 h-7">

              <Image src="/images/material-ui.svg" alt="profile image" fill />
            </section>
            <section className="relative w-7 h-7">

              <Image src="/images/tailwind-css.svg" alt="profile image" fill />
            </section>

            <section className="relative w-7 h-7 flex items-center">
              <Image src="/images/node.svg" alt="profile image" width={60} height={30} />
            </section>
            <section className="relative w-7 h-7">
              <Image src="/images/docker.png" alt="profile image" width={60} height={30} />
            </section>
            <section className="relative w-7 h-7">
              <Image src="/images/mysql.png" alt="profile image" width={60} height={30} />
            </section>

            <section className="relative w-7 h-7">
              <Image src="/images/jest2.png" alt="profile image" width={40} height={30} />
            </section>
            <section className="relative w-7 h-7">
              <Image src="/images/testing.svg" alt="profile image" width={40} height={30} />
            </section>
            <section className="relative w-7 h-7">
              <Image src="/images/git.svg" alt="profile image" width={40} height={30} />
            </section>
            <section className="relative w-7 h-7">
              <Image src="/images/github.svg" alt="profile image" width={40} height={30} />
            </section>

          </section>

        </section>
      </div>
    </section>

  );
}

export default Hero;
