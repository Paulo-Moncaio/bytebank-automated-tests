/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import Ilustracao from './ilustracao.svg'
import TopImage from './detalhe-sup.svg'
import BottomImage from './detalhe-inf.svg'
import TransactionForm from './Form/Form'

type TransactionProps = {
  makeTransaction: (valores: any) => void
}

export default function Transacao({ makeTransaction }: TransactionProps) {
  return (
    <section className="relative z-0 mt-4 flex h-1/2 w-[690px] items-center rounded-lg bg-[#cbcbcb] p-6 shadow-lg">
      <Image
        src={TopImage}
        alt="Top background image"
        className="absolute right-0 top-0 -z-10 size-48 bg-cover bg-no-repeat"
      />
      <div className="mx-auto my-0 flex h-full w-3/5 flex-col">
        <TransactionForm makeTransaction={makeTransaction} />
      </div>
      <Image
        src={Ilustracao}
        alt="ilustracao"
        className="h-[229px]"
        height={229}
        width={359}
      />
      <Image
        src={BottomImage}
        alt={'Bottom background image'}
        className="absolute bottom-0 left-0 size-48 bg-cover bg-no-repeat"
      />
    </section>
  )
}
