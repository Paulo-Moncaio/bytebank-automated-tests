import React, { useState } from 'react'
import { calculateNewBalance } from '@/utils/calculateNewBalance'
import { Header } from './components'

type Transacao = { transacao: string; valor: string }

export default function Home() {
  const [saldo, setSaldo] = useState(1000)
  const [transacoes, setTransacoes] = useState<Transacao[]>([])

  function handleTransaction(valores: Transacao) {
    const novoSaldo = calculateNewBalance(valores, saldo)
    setSaldo(novoSaldo)
    setTransacoes([...transacoes, valores])
  }

  return (
    <>
      <Header />
      {/* <main className={estilos.container}>
        <Menu />
        <div className={estilos.wrapper}>
          <Principal saldo={saldo} />
          <Transacao realizarTransacao={realizarTransacao} />
        </div>
        <Extrato transacoes={transacoes} />
      </main> */}
    </>
  )
}
