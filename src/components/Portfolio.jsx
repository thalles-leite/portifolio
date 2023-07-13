/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaFolderOpen, FaMobileAlt } from 'react-icons/fa';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import dados from '../data/data.json';
import { tecnologias } from '../data/tecnologias.json';

export default function Portfolio() {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 900) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    }

    // Chama a função inicialmente para definir o valor correto ao carregar a página.
    handleResize();

    window.addEventListener('resize', handleResize); // Adiciona o listener de resize para atualizar o valor de slidesPerView.

    return () => {
      window.removeEventListener('resize', handleResize); // Remove o listener de resize ao desmontar o componente.
    };
  }, []);

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
        <section className="grid grid-cols-1">
          <Swiper
            slidesPerView={slidesPerView}
            navigation
            loop
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className=""
          >
            {
            dados.projetos.map((projeto) => (
              <SwiperSlide>
                <section
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="rounded-3xl p-3 justify-evenly flex flex-col items-center"

                >

                  <p className="font-bold px-4 text-3xl">{projeto.nome}</p>

                  {projeto.video
                    ? (
                      <div className="relative w-full aspect-video pt-2 pb-8">
                        <video className="rounded-lg   w-full aspect-video " src={projeto.video} alt="video description" loop autoPlay muted />
                      </div>
                    )
                    : (
                      <div className="relative w-full aspect-video pt-2 pb-8">
                        <img className="rounded-lg  w-full aspect-video" src={projeto.image} alt={projeto.nome} />
                      </div>

                    )}

                  <div className="flex flex-row gap-2">
                    <Link href={projeto.linkRepositorio || '#'} target="_blank">
                      <button type="button" className="bg-gray-600 text-white px-2 py-1 text-sm  rounded-lg hover:bg-gray-700">Git Hub</button>
                    </Link>

                    <Link href={projeto.linkDeploy || '#'} target="_blank">
                      <button type="button" className="bg-gray-600 text-white px-2 py-1 text-sm  rounded-lg hover:bg-gray-700">Live Demo</button>
                    </Link>
                  </div>
                  <section className="flex w-full flex-col gap-2 m-3">

                    <hr />

                    <section className="flex flex-wrap w-full gap-4 px-2 justify-center items-end">

                      {
                        projeto.tecnologias.map((tecnologia) => (
                          <section className="relative w-8 h-7">
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
              </SwiperSlide>
            )).reverse()
          }
            {/* <SwiperSlide>
              <section className=" flex items-center justify-center h-full">
                <Link href="/#"
                className="flex
                rounded-3xl flex-col items-center justify-center  gap-5 hover:font-bold ">
                  <FaArrowCircleUp className="w-6 h-6 text-gray-800" />
                  <p>Exibir todos os Projetos </p>
                </Link>
              </section>
            </SwiperSlide> */}
          </Swiper>
        </section>
      </section>
    </section>
  );
}
