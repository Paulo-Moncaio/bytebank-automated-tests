'use client'
import { useState } from 'react'
import { Header, Menu, Statement } from './components'
import { TTransaction } from '@/types/Transaction'

export default function Home() {
  const [transactions, setTransactions] = useState<TTransaction[]>([])

  return (
    <>
      <Header />
      <main className="mx-auto my-0 mt-4 flex h-[86vh] w-[1199px] justify-between">
        <Menu />
        {/* <div className={estilos.wrapper}>
          <Principal saldo={saldo} />
          <Transacao realizarTransacao={realizarTransacao} />
        </div> */}
        <Statement transactions={transactions} />
      </main>
    </>
  )
}
