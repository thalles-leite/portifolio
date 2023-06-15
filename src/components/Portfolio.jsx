/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';

export default function Portfolio() {
  return (

    <section className="text-gray-800 pt-10  px-4 h-screen flex flex-col  items-center  relative" id="portfolio">
      <section className="flex text-justify w-full max-w-4xl flex-col items-center mt-10">
        <section
          data-aos="fade-left"
          data-aos-duration="1000"
          className="h-fit"
        >
          <h1 className="text-2xl font-bold text-center flex items-center gap-2 mb-10">
            <FaFolderOpen className="w-6 h-6 text-gray-800" />
            PORTFÓLIO
          </h1>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          <section data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="bg-slate-100 rounded-3xl p-3 justify-center flex flex-col items-center">

            <figure
              className="relative max-w-xs cursor-pointer  flex flex-col items-center p-2"
            >
              <figcaption className="px-4 text-3xl pb-4">
                <p className="font-bold">PIXEL ARTS</p>
              </figcaption>
              <a href="#">
                <img className="rounded-lg" src="/images/profile.jpeg" alt="imagem description" />
              </a>
            </figure>
            <div className="flex flex-row gap-2">
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Git Hub</button>
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Live Demo</button>
            </div>
            <section className="flex w-full flex-col gap-2 m-3">

              <hr />

              <section className="flex flex-wrap w-full gap-4 px-2 justify-center items-end">

                <section className="relative w-7 h-7">
                  <Image src="/images/react.png" alt="profile image" fill />
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

              </section>

            </section>

          </section>
          <section data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" className="bg-slate-100 rounded-3xl p-3 justify-center flex flex-col items-center">

            <figure className="relative max-w-xs cursor-pointer  flex flex-col items-center p-2">
              <figcaption className="px-4 text-3xl pb-4">
                <p className="font-bold">PIXEL ARTS</p>
              </figcaption>
              <a href="#">
                <img className="rounded-lg" src="/images/profile.jpeg" alt="imagem description" />
              </a>
            </figure>
            <div className="flex flex-row gap-2">
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Git Hub</button>
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Live Demo</button>
            </div>
            <section className="flex w-full flex-col gap-2 m-3">

              <hr />

              <section className="flex flex-wrap w-full gap-4 px-2 justify-center items-end">

                <section className="relative w-7 h-7">
                  <Image src="/images/react.png" alt="profile image" fill />
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

              </section>

            </section>

          </section>
          <section data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800" className="bg-slate-100 rounded-3xl p-3 justify-center flex flex-col items-center">

            <figure className="relative max-w-xs cursor-pointer  flex flex-col items-center p-2">
              <figcaption className="px-4 text-3xl pb-4">
                <p className="font-bold">PIXEL ARTS</p>
              </figcaption>
              <a href="#">
                <img className="rounded-lg" src="/images/profile.jpeg" alt="imagem description" />
              </a>
            </figure>
            <div className="flex flex-row gap-2">
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Git Hub</button>
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Live Demo</button>
            </div>
            <section className="flex w-full flex-col gap-2 m-3">

              <hr />

              <section className="flex flex-wrap w-full gap-4 px-2 justify-center items-end">

                <section className="relative w-7 h-7">
                  <Image src="/images/react.png" alt="profile image" fill />
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

              </section>

            </section>

          </section>
          <section data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className="bg-slate-100 rounded-3xl p-3 justify-center flex flex-col items-center">

            <figure className="relative max-w-xs cursor-pointer  flex flex-col items-center p-2">
              <figcaption className="px-4 text-3xl pb-4">
                <p className="font-bold">PIXEL ARTS</p>
              </figcaption>
              <a href="#">
                <img className="rounded-lg" src="/images/profile.jpeg" alt="imagem description" />
              </a>
            </figure>
            <div className="flex flex-row gap-2">
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Git Hub</button>
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Live Demo</button>
            </div>
            <section className="flex w-full flex-col gap-2 m-3">

              <hr />

              <section className="flex flex-wrap w-full gap-4 px-2 justify-center items-end">

                <section className="relative w-7 h-7">
                  <Image src="/images/react.png" alt="profile image" fill />
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

              </section>

            </section>

          </section>
          <section data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" className="bg-slate-100 rounded-3xl p-3 justify-center flex flex-col items-center">

            <figure className="relative max-w-xs cursor-pointer  flex flex-col items-center p-2">
              <figcaption className="px-4 text-3xl pb-4">
                <p className="font-bold">PIXEL ARTS</p>
              </figcaption>
              <a href="#">
                <img className="rounded-lg" src="/images/profile.jpeg" alt="imagem description" />
              </a>
            </figure>
            <div className="flex flex-row gap-2">
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Git Hub</button>
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Live Demo</button>
            </div>
            <section className="flex w-full flex-col gap-2 m-3">

              <hr />

              <section className="flex flex-wrap w-full gap-4 px-2 justify-center items-end">

                <section className="relative w-7 h-7">
                  <Image src="/images/react.png" alt="profile image" fill />
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

              </section>

            </section>

          </section>
          <section data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800" className="bg-slate-100 rounded-3xl p-3 justify-center flex flex-col items-center">

            <figure className="relative max-w-xs cursor-pointer  flex flex-col items-center p-2">
              <figcaption className="px-4 text-3xl pb-4">
                <p className="font-bold">PIXEL ARTS</p>
              </figcaption>
              <a href="#">
                <img className="rounded-lg" src="/images/profile.jpeg" alt="imagem description" />
              </a>
            </figure>
            <div className="flex flex-row gap-2">
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Git Hub</button>
              <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Live Demo</button>
            </div>
            <section className="flex w-full flex-col gap-2 m-3">

              <hr />

              <section className="flex flex-wrap w-full gap-4 px-2 justify-center items-end">

                <section className="relative w-7 h-7">
                  <Image src="/images/react.png" alt="profile image" fill />
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

              </section>

            </section>

          </section>

        </section>
      </section>
    </section>
  );
}
