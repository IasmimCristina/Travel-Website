import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='border-2 border-red-50 flex flex-col gap-20 py-10 px-5 pb-32 md:gap-28 lg:py-20 xl:flex-row'>


      <div className="hero-map" />

      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

        <Image src={"/camp.svg"} alt='Acampamento' width={50} height={50} className='absolute left=[-5px] top-[-35px] w-10 lg:w-[50px] ' />
        <h1 className='bold-52 lg:bold-88 w-[60%]'>Ponto de Acampamento Horizontes</h1>
        <p className='regular-16 mt-6 text-gray-600 xl:max-w-[520px]'>
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
            type='button'  />
             <Button
           variant='btn_white_text'
            title='Como trabalhamos?' 
            icon='/play.svg'
            type='button'  />
        </div>
      </div>






    </section>
  )
}

export default Hero