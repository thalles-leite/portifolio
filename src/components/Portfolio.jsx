/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import React from 'react';
import { FaFolderOpen, FaMobileAlt } from 'react-icons/fa';
import Link from 'next/link';
import dados from '../data/data.json';
import { tecnologias } from '../data/tecnologias.json';

export default function Portfolio() {
  return (

    <section className="text-gray-800 pt-10  px-4 flex flex-col shadow-lg  items-center   relative" id="portfolio">
      <section className="flex text-justify w-full mb-10 max-w-7xl flex-col items-center mt-10">
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

          {
            dados.projetos.map((projeto) => (
              <section data-aos="zoom-in" data-aos-duration="1000" className="bg-white rounded-3xl p-3 justify-between gap-2 flex flex-col items-center shadow-md">

                <p className="font-bold px-4 text-3xl">{projeto.nome}</p>

                {projeto.video
                  ? (
                    <div className="relative w-full aspect-video">
                      <video className="rounded-lg   w-full aspect-video " src={projeto.video} alt="video description" loop autoPlay muted />
                    </div>
                  )
                  : (
                    <div className="relative">
                      <img className="rounded-lg  w-full aspect-video" src={projeto.image} alt={projeto.nome} />
                    </div>

                  )}

                <div className="flex flex-row gap-2">
                  <Link href={projeto.linkRepositorio || '#'} target="_blank">
                    <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Git Hub</button>
                  </Link>

                  <Link href={projeto.linkDeploy || '#'} target="_blank">
                    <button type="button" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700">Live Demo</button>
                  </Link>
                </div>
                <section className="flex w-full flex-col gap-2 m-3">

                  <hr />

                  <section className="flex flex-wrap w-full gap-4 px-2 justify-center items-end">

                    {
                        projeto.tecnologias.map((tecnologia) => (
                          <section className="relative w-7 h-7">
                            <Image src={tecnologias[tecnologia]} alt="tecnologia" title={tecnologia} fill />
                          </section>
                        ))

                      }
                    {
                      projeto.responsivo && (

                        <FaMobileAlt className="w-7 h-7" title="Responsivo" />
                      )
                      }
                  </section>
                </section>

              </section>
            ))
          }

        </section>
      </section>
    </section>
  );
}
