import Image from 'next/image'
import Icone from './icone-olho.svg'

type BalanceProps = {
  balance: number
}

export default function Balance({ balance }: BalanceProps) {
  return (
    <div className="mx-auto my-0 flex h-full w-48 flex-col">
      <div className="mx-auto my-0 flex w-full items-center justify-start">
        <h2 className="mr-10 text-lg font-medium text-gray-100">Saldo</h2>
        <Image src={Icone} alt={'icone'} />
      </div>
      <div className="mx-auto my-4 h-px w-full bg-gray-100" />
      <p className="text-sm text-gray-100">Conta corrente</p>
      <p className="mx-0 my-4 text-2xl font-medium text-gray-100">{`R$ ${balance}`}</p>
    </div>
  )
}
