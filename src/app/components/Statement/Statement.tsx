import { TTransaction } from '@/types/Transaction'
import Transaction from './Transaction/Transaction'

type StatementProps = {
  transactions: TTransaction[]
}

export default function Statement({ transactions }: StatementProps) {
  return (
    <section className="w-[282px] overflow-hidden rounded-lg bg-[#f7f7f7] p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-extrabold text-[#111111]">Extrato</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ul>
    </section>
  )
}
