import Image from 'next/image';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export default function About() {
  return (
    <section className='text-gray-800 px-4 h-screen flex flex-col items-center justify-evenly bg-slate-100 relative' id='about'>
      <section className='flex text-justify max-w-2xl  flex-col h-full items-center justify-center'>
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="1000">

        <h1 className='text-2xl font-bold text-center flex items-center gap-2 mb-10'>
          <FaUserCircle className="w-6 h-6 text-gray-800 " />
          SOBRE
          </h1>
        </div>
        
        
          
          <section className='text-md'>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="1000"      
     >





            <p  className='pb-10'>
            Sou técnico em Informática para Web pelo IFBA, Bacharel em Engenharia Elétrica pela UFOB e pós-graduado em Engenharia de Software pela Faculdade Prominas.
                     
            <Image src='/images/programacao.svg' alt='profile image' width={120} height={120} className="float-right ml-4 " /> 
            &nbsp;No momento, estou passando por uma transição de carreira para me tornar um desenvolvedor web e estou estudando o módulo de Backend no curso de Desenvolvimento Web da Trybe, uma escola de tecnologia reconhecida por sua abordagem abrangente ao ensino de desenvolvimento web. O programa da Trybe abarca tanto Front-end quanto Back-end, bem como ciência da computação, metodologias ágeis e habilidades comportamentais.
            </p>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="1000">
            <Image src='/images/engenharia.svg' alt='profile image' width={120} height={120} className="float-left mr-4 top-20 left-20 "  />
            <p>Tenho experiência como coordenador de projetos elétricos de distribuição urbana e rural, liderando equipes e garantindo o cumprimento de prazos e metas. Minhas habilidades de comunicação são eficazes e valorizo a colaboração e o compartilhamento de conhecimento. Sou criativo e eficiente na busca por soluções diante de desafios, além de possuir habilidades de liderança para motivar e orientar equipes em direção aos objetivos comuns.</p>           
       </div>
            
    

            </section>
        

      </section>
    </section>
  );
}
