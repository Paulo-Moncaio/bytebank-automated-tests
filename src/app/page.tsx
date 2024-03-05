/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { Header, Main, Menu, Statement, Transaction } from './components'
import { TTransaction } from '@/types/Transaction'
import { calculateNewBalance } from '@/utils/calculateNewBalance'

export default function Home() {
  const [saldo, setSaldo] = useState(1500)
  const [transactions, setTransactions] = useState<TTransaction[]>([])

  function handleTransaction(valores: any) {
    const novoSaldo = calculateNewBalance(valores, saldo)
    setSaldo(novoSaldo)
    setTransactions([...transactions, valores])
  }

  return (
    <>
      <Header />
      <main className="mx-auto my-0 mt-4 flex h-[86vh] w-[1199px] justify-between">
        <Menu />
        <div className="mx-auto my-0 flex flex-col items-center">
          <Main balance={saldo} />
          <Transaction makeTransaction={handleTransaction} />
        </div>
        <Statement transactions={transactions} />
      </main>
    </>
  )
}
