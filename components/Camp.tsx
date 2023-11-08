import { PEOPLE_URL } from '@/constants'
import Image from 'next/image'
import React from 'react'



interface CampProps {
  backgroundImage: string,
  title: string,
  subtitle: string,
  peopleJoined: string,

}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ${backgroundImage} `}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">


        <div className="flexCenter gap-4">
          <div className="rounded-full bg-yellow-50 p-4">
            <Image src={"/folded-map.svg"} alt='Mapa' height={28} width={28} />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className='bold-18 text-yellow-50'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>

        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">

            {PEOPLE_URL.map((url) => (
              <Image className='inline-block h-10 w-10 rounded-full' src={url} key={url} alt='Pessoa' height={52} width={52} />
            ))}
          </span>

          <p className='bold-16 md:bold-20 text-yellow-50'>{peopleJoined}</p>
        </div>

      </div>
    </div>

  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>


      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Acampamento Truno"
          subtitle="Prigen, Parcusan"
          peopleJoined="80+ pessoas"

        />
        <CampSite

          backgroundImage="bg-bg-img-2"
          title="Montanha Vista Nova"
          subtitle="Selva Tuji, Baía Clara"
          peopleJoined="60+ pessoas"

        />

      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-70 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">


          <h2 className='regular-24 md:regular-32 2xl:regular-64 text-white capitalize'>   <strong>Sem direção?</strong> Sem conseguir encontrar seu caminho? </h2>

          <p className="regular-14 xl:regular-16 mt-5 text-yellow-50">
            Explore o mundo natural como nunca antes com o <strong>FériasIndo</strong>. Descubra trilhas incríveis, acampamentos deslumbrantes e aventuras emocionantes. Junte-se a nós e comece a sua jornada hoje!
          </p>

          <Image src={"/quote.svg"} alt='Acampamento 2' width={186} height={219} className='camp-quote' />

        </div>

      </div>
    </section>
  )
}

export default Camp