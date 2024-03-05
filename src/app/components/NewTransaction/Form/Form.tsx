/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'

type TransactionFormProps = {
  makeTransaction: (valores: any) => void
}

export default function TransactionForm({
  makeTransaction,
}: TransactionFormProps) {
  const [valor, setValor] = useState({ transacao: '', valor: '' })

  function handleChange(e: { target: { name: any; value: any } }) {
    const { name, value } = e.target
    const valoresAtualizados = { ...valor, [name]: value }
    setValor(valoresAtualizados)
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    const dataTransacao = new Date().toLocaleDateString('pt-br')
    const mesTransacao = new Date().toLocaleDateString('pt-br', {
      month: 'long',
    })
    makeTransaction({
      ...valor,
      data: dataTransacao,
      mes: mesTransacao[0].toUpperCase() + mesTransacao.substring(1),
    })
    setValor({ ...valor, valor: '' })
  }

  return (
    <form
      className="z-10 flex h-full w-9/12 flex-col justify-around pt-4"
      onSubmit={handleSubmit}
    >
      <h3 className="mb-4 text-xl font-bold text-black">Nova Transação</h3>
      <select
        className="rounded-md border-[1px] border-solid border-[#47a138] p-2 text-sm outline-none"
        onChange={handleChange}
        name="transacao"
        data-testid="select-opcoes"
      >
        <option defaultValue="Selecione um tipo de transação">
          Selecione um tipo de transação
        </option>
        <option value="Depósito">Depósito</option>
        <option value="Transferência">Transferência</option>
      </select>
      <label htmlFor="valor" className="py-3 text-base font-bold">
        Valor
      </label>
      <input
        onChange={handleChange}
        className="mb-4 w-[70%] rounded-md border-[1px] border-solid border-[#91e697] p-2 text-center text-sm outline-none"
        type="number"
        value={valor.valor}
        name="valor"
        id="valor"
        placeholder="Digite um valor"
      />
      <button
        className="w-[70%] cursor-pointer rounded-md border-none bg-[#47a138] py-3 text-base font-bold text-gray-100 transition-all hover:bg-[#50bd3f]"
        type="submit"
      >
        Realizar transação
      </button>
    </form>
  )
}
