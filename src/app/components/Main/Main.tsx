import Image from 'next/image'
import Ilustracao from './ilustracao.svg'
import Balance from './Balance/Balance'

const date = Date.now()
const today = new Date(date)
const daysOfWeek = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

type MainProps = {
  balance: number
}

export default function Main({ balance }: MainProps) {
  return (
    <section className="relative flex h-1/2 w-[690px] flex-col justify-between rounded-lg bg-[#47a138] p-6 shadow-lg">
      <div className="absolute right-0 top-0 size-48 bg-cover bg-no-repeat" />
      <h1 className="text-2xl font-medium text-gray-100">{'Olá, Joana :)!'}</h1>
      <p className="mb-6 mt-4 text-gray-100">{`${
        daysOfWeek[today.getDay()]
      }, ${today.toLocaleDateString('pt-BR')}`}</p>
      <div className="flex w-full items-center justify-between">
        <Image
          src={Ilustracao}
          alt="Ilustracao"
          className="z-10 h-[185px] w-[230px]"
        />
        <Balance balance={balance} />
      </div>
      <div className="absolute bottom-0 left-0 size-48 bg-cover bg-no-repeat" />
    </section>
  )
}
