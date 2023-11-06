import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className=' flex flex-col gap-20 py-10 px-5 pb-32 md:gap-28 lg:py-20 xl:flex-row'>


      <div className="hero-map" />

      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

        <Image src={"/camp.svg"} alt='Acampamento' width={50} height={50} className='absolute left=[-5px] top-[-35px] w-10 lg:w-[50px] ' />
        <h1 className='bold-52 lg:bold-88 lg:w-[60%]'>Ponto de Acampamento Horizontes</h1>
        <p className='regular-16 mt-6 text-gray-600 xl:max-w-[520px] md:max-w-[820px]'>
          O Ponto de Acampamento Horizontes é o seu refúgio perfeito para aventuras ao ar livre. Neste cenário paradisíaco, você poderá se reconectar com a natureza e desfrutar de momentos memoráveis, tudo isso em um ambiente de tranquilidade e beleza sem igual!
        </p>


        <div className="my-11 flex flex-wrap gap-5">
          .
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image src={"/star.svg"} key={index} alt='Estrela' width={24} height={24} />
            ))}

          </div>

          <p className='bold-16 lg:bold-20 text-blue-70'>
            195m
            <span className='regular-16 lg:regular-20 ml-1 underline cursor-pointer'>Reviews Excelentes</span>
          </p>
        </div>

        <div className="flex  flex-col w-full gap-3 sm:flex-row">
          <Button
            variant='btn_yellow'
            title='Instale o App'
            type='button' />
          <Button
            variant='btn_white_text'
            title='Como trabalhamos?'
            icon='/play.svg'
            type='button' />
        </div>
      </div>




      <div className="relative flex flex-1 items-start  ">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-blue-70 px-7 py-8 border-4 border-yellow-50">


          <div className="flex flex-col">
            <div className="flexBetween">

              <p className='regular-16 text-yellow-50'>Localização</p>

              <Image src={'/close.svg'} alt='Fechar' width={24} height={24} className='cursor-pointer' />
            </div>
            <p className='bold-20 text-white'>Águas Frescas</p>
          </div>
          <div className="flexBetween">

            <div className="flex flex-col">
              <p className='regular-16 block text-yellow-50'>Distância</p>
              <p className='bold-20 text-white'>12.85 Km</p>
            </div>
            <div className="flex flex-col">
              <p className='regular-16 block text-yellow-50'>Elevação</p>
              <p className='bold-20 text-white'>4.441 Km</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero