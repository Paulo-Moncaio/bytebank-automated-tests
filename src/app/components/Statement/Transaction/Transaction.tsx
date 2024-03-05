import { TTransaction } from '@/types/Transaction'

export type TransactionProps = {
  transaction: TTransaction
}

export default function Transaction({ transaction }: TransactionProps) {
  const isTransfer = transaction.type === 'Transferência'
  const amountPrefix = isTransfer ? '- R$' : 'R$'

  return (
    <li>
      <p className="mb-6 text-xs font-extrabold text-[#111111]">
        {transaction.month}
      </p>
      <div className="my-2 flex w-full justify-between text-left">
        <p className="text-sm text-black" data-testid="tipoTransacao">
          {transaction.type}
        </p>
        <span className="text-xs text-[#8b8b8b]">{transaction.date}</span>
      </div>
      <h3
        data-testid="valorTransacao"
        className="text-base font-bold text-black"
      >{`${amountPrefix}  ${transaction.amount}`}</h3>
      <div className="mx-auto my-3 h-[1px] w-full bg-[##47a13880]" />
    </li>
  )
}
