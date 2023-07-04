// Hero.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <section className=" text-gray-700 h-screen flex flex-col  items-center justify-center relative">
      <secttion className="max-w-5xl flex flex-col md:flex-row items-center gap-10">

        <section>
          <div
            data-aos="flip-right"
            data-aos-duration="2000"
            className="shadow-2xl rounded-full overflow-hidden"
          >
            <Image
              src="/images/profile.jpeg"
              alt="profile image"
              width={250}
              height={250}
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
      </secttion>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="1000"
        className="absolute bottom-1 w-full"
      >
        <section className="flex w-full flex-col gap-2 bottom-0 justify-center items-center ">
          <h1 className="font-bold text-lg sm:text-2xl">
            STACKS
          </h1>
          <section className="flex flex-wrap w-full gap-4 px-2 mb-5 justify-center items-end">
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">
              <Image src="/images/html5.png" alt="profile image" fill />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">

              <Image src="/images/CSS3.png" alt="profile image" fill />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">

              <Image src="/images/javascript.png" alt="profile image" fill />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">

              <Image src="/images/react.png" alt="profile image" fill />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">

              <Image src="/images/next.png" alt="profile image" fill />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">

              <Image src="/images/material-ui.svg" alt="profile image" fill />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">

              <Image src="/images/tailwind-css.svg" alt="profile image" fill />
            </section>

            <section className="relative sm:w-10 w-5 sm:h-10 h-5 flex items-center">
              <Image src="/images/node.svg" alt="profile image" width={60} height={30} />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">
              <Image src="/images/docker.png" alt="profile image" width={60} height={30} />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">
              <Image src="/images/mysql.png" alt="profile image" width={60} height={30} />
            </section>

            <section className="relative sm:w-10 w-5 sm:h-10 h-5">
              <Image src="/images/jest2.png" alt="profile image" width={40} height={30} />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">
              <Image src="/images/testing.svg" alt="profile image" width={40} height={30} />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">
              <Image src="/images/git.svg" alt="profile image" width={40} height={30} />
            </section>
            <section className="relative sm:w-10 w-5 sm:h-10 h-5">
              <Image src="/images/github.svg" alt="profile image" width={40} height={30} />
            </section>

          </section>

        </section>
      </div>
    </section>

  );
}

export default Hero;
