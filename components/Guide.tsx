import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">

        <Image src={"/camp.svg"} alt='Acampamento' width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 text-yellow-90">Estamos aqui por você</p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">

          <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guiar você para o caminho fácil</h2>
          <p className='regular-16 text-gray-20 xl:max-w-[520px]'>
            Nossa missão é simplificar a sua jornada. Com o <strong>FériasIndo</strong>, você encontrará o caminho para aventuras incríveis, explorará locais deslumbrantes e terá a melhor experiência ao ar livre. Conte conosco para guiá-lo em cada passo do caminho.
          </p>


        </div>
      </div>

      <div className="flexCenter max-container relative w-full">

        <Image
        src={"/boat.png"}
        alt='Barco'
        width={1440}
        height={580}
        className='w-full object-cover object-center 2xl:rounded-5xl'
        
        
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
          src={"/meter.svg"}
          alt='Medidor'
          width={16}
          height={16}
          className='h-full w-auto'
          />
          
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className='regular-16 text-gray-20'>Destino</p>
                <p className='bold-16 text-yellow-50'>35 min</p>
              </div>
              <p className='bold-20 mt-2'>Hot Springs</p>
            </div>
            <div className="flex w-full flex-col">
              
                <p className='regular-16 text-gray-20'>Começar trilha</p>
                <h4>Wonders Rest</h4>
             
              <p className='bold-20 mt-2'></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide